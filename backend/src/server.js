const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');
const cors = require('./config/cors');
mongoose.Promise = global.Promise;

// const { host } = config.get('database');
// mongoose
//     .connect(`mongodb://${host}`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => logger.info('MongoDB connection has been established successfully.'))
//     .catch(err => {
//         logger.error(err);
//         process.exit();
//     });

// Felhő kapcsolat
const Connection_String =
  `mongodb+srv://vizsgaremek:${process.env.DB_PASSW}@cluster0.1egzp.mongodb.net/bookstoreDB?retryWrites=true&w=majority`
  //"mongodb+srv://urbancsokgy:DiPqHPyh6k5MEfV9@cluster0.xxaol.mongodb.net/chats?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const connectionCallback = () => {
  console.log("Mongoose Connection OK");
};
mongoose.connect(Connection_String, options, connectionCallback)

//------------------------
app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(require('./routes/auth.route'));

app.use('/api/users', require('./routes/user.route'));
app.use('/api/categories', require('./routes/category.route'));
app.use('/api/authors', require('./routes/author.route'));
app.use('/api/books', require('./routes/book.route'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(YAML.load('./docs/swager.yaml')));

// fallback for Angular routes
app.use('/*', (req, res, next) => {
    res.sendFile('index.html', { root: __dirname + '/../public' });
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;

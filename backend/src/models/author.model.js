const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    born: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Author', AuthorSchema);

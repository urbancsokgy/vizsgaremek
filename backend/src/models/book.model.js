const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: String,
        required: true,
        default: 0,
        min: 0
    },
    category: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Category'
    },
    author: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Author',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);

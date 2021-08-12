const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Book',
        required: true
    },
    amount: {
        type: Number,
        default: 1,
        min: 1
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);

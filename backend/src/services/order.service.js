const Model = require('../models/order.model');

const populatedFields = [ 'user', {
    path: 'book',
    model: 'Book',
    populate : {
        path: 'author',
        model: 'Author',  
    }}
];

exports.create = modelData => {
    const model = new Model(modelData);
    return model.save();
};

exports.count = () => Model.count();

exports.findAll = () => Model.find().populate(populatedFields);

exports.findOne = id => Model.findById(id).populate(populatedFields);

exports.update = (id, updateData) => Model.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Model.findByIdAndRemove(id);

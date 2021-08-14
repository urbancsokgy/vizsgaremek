const Model = require('../models/book.model');

const populatedFields = [ 'category', 'author' ];

exports.create = modelData => {
    const model = new Model(modelData);
    return model.save();
};

exports.findAll = () => Model.find().populate(populatedFields);

exports.findOne = id => Model.findById(id).populate(populatedFields);

exports.update = (id, updateData) => Model.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Model.findByIdAndRemove(id);

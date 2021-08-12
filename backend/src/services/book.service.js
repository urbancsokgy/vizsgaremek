const Model = require('../models/book.model');

exports.create = modelData => {
    const model = new Model(modelData);
    return model.save();
};

exports.findAll = () => Model.find().populate();

exports.findOne = id => Model.findById(id).populate();

exports.update = (id, updateData) => Model.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Model.findByIdAndRemove(id);

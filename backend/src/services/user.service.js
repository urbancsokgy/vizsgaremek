const Model = require('../models/user.model');

exports.create = modelData => {
    // TODO
    // modelData.role='user'
    const model = new Model(modelData);
    return model.save();
};

exports.findAll = () => Model.find().populate();

exports.findOne = id => Model.findById(id).populate();

exports.update = (id, updateData) => Model.findByIdAndUpdate(id, updateData, {new: true});

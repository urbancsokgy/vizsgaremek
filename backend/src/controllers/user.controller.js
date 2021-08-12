const createError = require('http-errors');
const service = require('../services/user.service');
const model = require('../models/user.model');

exports.register = (req, res, next) => {
    const validationErrors = new model(req.body).validateSync();
    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    }

    return service.create(req.body)
        .then(created => res.status(201).json(created))
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then(entity => res.json(entity));
};

exports.findOne = (req, res, next) => {
    return service.findOne(req.params.id)
        .then(entity => {
            if (!entity) {
                return next(new createError.NotFound("User not found"));
            }
            return res.json(entity);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new model(req.body).validateSync();
    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    }

    return service.update(req.params.id, req.body)
        .then(entity => res.json(entity))
        .catch(err => next(new createError.InternalServerError(err.message)));
};
const createError = require('http-errors');

const JWT = require('jsonwebtoken');

const User = require('../models/user');

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email, password: req.body.password})
    .then(user => {

        if(!user) throw createError(401, "Incorrect email or password");
        let data = {
            id: user._id,
            name: user.name,
            email: user.email
        };

        let token = JWT.sign(data, process.env.JWT_KEY);

        res.json({token: token,  _id: user._id});
    })
    .catch(next);

};

exports.me = (req, res, next) => {
    res.json(req.user);
};


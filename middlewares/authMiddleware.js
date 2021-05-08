const jwt = require('jsonwebtoken');

const createError = require('http-errors');

exports.authenticated = (req, res, next) => {
    let token = req.headers['authorization'];

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) throw createError(401);

        req.user = {
            id: decoded.id,
            email: decoded.email,
            password: decoded.password
        };

        next();
    });
}

exports.guest = (req, res, next) => {
    let token = req.headers['authorization'];
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) return next();
        throw createError(403);
    });
};

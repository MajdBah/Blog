const User = require('../models/user');
const createError = require('http-errors')

exports.create = (req,res,next) => {

  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  .then(user => {
    res.json(user);
  })
  .catch(next)
};

exports.list = (req, res, next) => {
  User.find()
  .then(user => {
    res.json(user);
  })
  .catch(next)
};


exports.show = (req, res, next) => {
    User.find({email: req.params.email})
    if(!user) throw createError(404, "User Not Found")
    .then(user => {
      res.json(user);
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`Password: ${user.password}`);
    })
    .catch(next)
};

exports.update = (req,res,next) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  User.findByIdAndUpdate(req.params.id, data)

  .then(updatedInfo => {
    if(!updatedInfo) return res.json().send();
    res.json(updatedInfo);
  })
  .catch(next)
};

exports.delete = (req,res,next) => {
  User.findByIdAndDelete(req.params.id)

  .then(deleted => {
    if(!deleted) throw createError(404, "User not found.");

    res.json({message: "user deleted!"});
    })
  .catch(next)
};



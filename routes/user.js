const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const User = require('../models/User')

router.post('/signup', (req, res, next) => {
  User.find({ email: req.body.email }).exec()
    .then(user => {
      if (user.length > 0) {
        return res.status(409).json({
          error: "Data Conflict"
        })
      } else {
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            if (err) {
              return res.status(500).json({
                error: err
              })
            } else {
              const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash
              })
              user
                .save()
                .then(result => {
                  return res.status(200).json({
                    message: 'created User'
                  })
                })
                .catch(err => {
                  return res.status(500).json({
                    error: err
                  })
                })
            }
          });
        });
      }
    })
})

router.delete('/:userId', (req, res, next) => {
  User.remove({ _id: req.params.userId }).exec()
    .then(result => {
      res.status(200).json({
        message: "user deleted"
      })
    })
    .catch(err => {
      return res.status(500).json({
        error: err
      })
    });
})

module.exports = router
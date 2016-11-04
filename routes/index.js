var express = require('express')
var router = express.Router()
var puppies = require('./puppies')
var models = require('../models/puppy')

router.route('/')
  .get(function(req, res) {
    res.render("./static/index", {
      title: 'Express',
      puppiesArray: models.puppiesArray
    })
  })

router.route('/about')
  .get(function(request, response) {
    response.render('./static/about')
  })

router.route('/contact')
  .get(function(request, response) {
    response.render('./static/contact')
  })

module.exports = {
  router,
  puppies
}

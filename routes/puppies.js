var express = require('express');
var router = express.Router();
var Puppy = require('../models/puppy').Puppy;
var puppiesArray = require('../models/puppy').puppiesArray;
// var id = require('../models/puppy').id;
// console.log('id, line 6', id);
router.route('/new')
  .get(function(request, response, next) {
    // send information to render
    response.render('../views/puppies/new', {
      puppiesArray: puppiesArray
    });
    next();
  });

router.route('/')
  .post(function(request, response) {
    var newPuppy = new Puppy(request.body.name, request.body.age);
    // console.log("line 19", id);
    if (newPuppy) {
      // console.log(newPuppy);
      puppiesArray.push(newPuppy);
    }
    response.redirect('/');
  });

router.route("/:id")
  .get(function(request, response) {
    // console.log(request, response);
    for (let i = 0; i < puppiesArray.length; i++) {
      if (puppiesArray[i].id === Number(request.params.id)) {
        response.send(puppiesArray[i]);
      }
    };
  });

module.exports = {
  router,
  Puppy,
  puppiesArray,
};

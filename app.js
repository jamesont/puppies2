"use strict"
var express = require('express')
var app = express()
var routerForIndex = require('./routes/index')
var routerForPuppies = require('./routes/puppies')
var bodyParser = require('body-parser')
var path = require('path')
var PORT = process.env.PORT || 8000

app.set("view engine", "jade");

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/puppies', routerForPuppies.router)
app.use('/', routerForIndex.router)

app.listen(PORT, function() {
  console.log(`${PORT} be listening... bitchezzzzz`)
})

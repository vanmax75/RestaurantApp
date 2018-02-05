// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Favorite = require("../models/favorite.js");
const yelp = require('yelp-fusion');

// Routes
// =============================================================
module.exports = function(app) {

  const apiKey = 'dO6hTbT39xoy6cKkWM5SK3cg0O-UHw-Py4e81X2TjLLrtd5Ux6tdD3jLvMjvtWsq4XG-qToMrJvPm8R9g3gF8NOylu1-24hcpzjwj9ZFaaIRL2g9nJRC6CiJfxtxWnYx';
    const client = yelp.client(apiKey);

 
};

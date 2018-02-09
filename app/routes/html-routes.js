// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var client = require("./api-routes");
var Favorite = require("../models/favorite.js");


 console.log(client)

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/z.html"));
  });
  app.get("/location", function(req, res) {
    client.client.search({term: 'restaurant', location: req.query.s , limit: 25})
		.then(function (data) {
		    console.log(data);
		    res.json(data);
		})
		.catch(function (err) {
		    console.error(err);
		});
  });
  app.get("/favorites", function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/all.html"));
  });
  app.get("/api/favorites", function(req, res) {
  	Favorite.findAll().then(function(favorites){
  		res.json(favorites)
  	})
  });
   
 
    app.post("/location/new", function(req, res) {

    // Take the request...
    var favorite = req.body;

    
    // Then add the restaurant to the database using sequelize
    Favorite.create({
      
      name: favorite.name,
      image_url: favorite.image_url,
      page_url: favorite.page_url
    })
    .then(function(obj) {
    	console.log(obj);
    	// res.redirect("/");
    	res.json(obj)
    })

  });


};

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Favorite" model that matches up with DB
var Favorite = sequelize.define("favorite", {
   // the name of the favorite (a string)
  name: Sequelize.STRING,
  // the favorite's image (a string)
  image_url: Sequelize.TEXT,
  // the character's age (a string)
  page_url: Sequelize.STRING
});

// Syncs with DB
Favorite.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Favorite;

//Restaurant Model

module.exports = function(sequelize, DataTypes) {
	var Favorite = sequelize.define("Favorite", {
		 // the name of the favorite (a string)
		  name: DataTypes.STRING,
		  // the favorite's image (a string)
		  image_url: DataTypes.TEXT,
		  // the character's age (a string)
		  page_url: DataTypes.STRING

	});
	return Favorite;
};
// Dependencies
// =============================================================
var path = require("path");




// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.


  // test z file and load the html page
  app.get("/z", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/z.html"));
  });

};

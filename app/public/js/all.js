
// make a get request to our api to grab every favorite
$.get("/api/favorites", function(data) {

  // for each favorite that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "favorite-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);

    // Now add all of our favorite data to the well we just placed on the page

    // make the name an h2,
    $("#favorite-well-" + i).append("<div class='imagewell'style= 'background : url(" + data[i].image_url + ")'>");
    // the role an h3,
    $("#favorite-well-" + i).append( "<h2 class='namewell'>" + data[i].name + " </h2></div>");
    
  }
});

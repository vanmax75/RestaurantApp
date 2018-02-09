




// var yelp = new Yelp({
//     app_id: 'dO6hTbT39xoy6cKkWM5SK3cg0O-UHw-Py4e81X2TjLLrtd5Ux6tdD3jLvMjvtWsq4XG-qToMrJvPm8R9g3gF8NOylu1-24hcpzjwj9ZFaaIRL2g9nJRC6CiJfxtxWnYx',
//     app_secret: 'swPNGSImViKvhugCDKUovfxVBA510D2FvPnFl0SoPkSSMqUTvYDUqVL3CSqyPvZN'
// });



$(document).ready(() => {
	
	$('#j1').show(1000);
	
	$('#searchForm').on('submit', (e) => {
		e.preventDefault();
		let searchText = $('#location').val();
		getRestaurant(searchText)
		
		.then(response => {
			console.log(response)
		  const firstResult = response.jsonBody.businesses[0];
		  const prettyJson = JSON.stringify(firstResult, null, 4);
		  console.log(prettyJson);

		   $("#restaurant").empty();
		    // if the data is not there, then return an error message
		    if (!response.jsonBody.businesses.length) {
		      $("#restaurant").append("<h2> Sorry!!! Location was not found. </h2>");
		    }
		    // otherwise
		    else {
		    	 for(var i = 0; i< response.jsonBody.businesses.length; i++){
		    	 	var business = response.jsonBody.businesses[i]
		    	 	var html = "<div class='col-md-6'>"
		    	 	html+= "<div class='imagewell'style= 'background : url(" + business.image_url + ")'>"
		    	 	html+= "<h2 class='namewell'>" + business.name + "</h2>"
		    	 	html+="<form class='form' method='POST'>"
		    	 	html+="<input type='hidden' name='name' class='name' value='" + business.name + "'/>"
		    	 	html+="<input type='hidden' name='image_url' class='img' value='" + business.image_url + "'/>"
		    	 	html+="<input type='hidden' name='page_url' class='urlwell' value='" + business.url + "'/>"
		    	 	html+="<input type='submit' value = 'Add to Favorites' class='urlfav btn btn-success' /></form>"
		    	 	html+= "<a class= 'btn btn-info'  href='"+ business.url + "'>More Info</a>"
		    	 	html+="</div></div>"

		    	 	
		    	 	// html+= "<a class= 'urlwell btn btn-success'  url='"+ business.url + "'>Favorite</a>"
		    	 	  $("#restaurant").append(html);
		    	 }
		      		addevent();
		    
		    
		 
		    }
		}).catch(e => {
		  console.log(e);
		});


	});
	function getRestaurant (searchText){
		return $.get("http://localhost:8080/location?s=" + searchText )
		
	
	};

console.log("lilililili");

// when user clicks add-btn
function addevent(){
	console.log($(".urlfav"));

	$(".urlfav").on("click", function(event) {
		console.log("jkjlkjlkjl");
	  event.preventDefault();

	  // make a newFavorite Restaurant obj
	  var newFavorite = {
	    // name from name restaurant name
	    name: $(this).siblings(".name").val().trim(),
	    // image from restaurant image_url
	    image_url: $(this).siblings(".img").val().trim(),
	    // url from restaurant url
	    page_url: $(this).siblings(".urlwell").val().trim()
	  };

	  // send an AJAX POST-request with jQuery
	  $.post("/location/new", newFavorite)
	    // on success, run this callback
	    .done(function(data) {
	      // log the data we found
	      console.log(data);
	      // tell the user we're adding a favorite with an alert window
	      alert("Adding to your favorites...");
	    });

	  
	  

	});
}
})
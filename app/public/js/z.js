




// var yelp = new Yelp({
//     app_id: 'dO6hTbT39xoy6cKkWM5SK3cg0O-UHw-Py4e81X2TjLLrtd5Ux6tdD3jLvMjvtWsq4XG-qToMrJvPm8R9g3gF8NOylu1-24hcpzjwj9ZFaaIRL2g9nJRC6CiJfxtxWnYx',
//     app_secret: 'swPNGSImViKvhugCDKUovfxVBA510D2FvPnFl0SoPkSSMqUTvYDUqVL3CSqyPvZN'
// });



$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#location').val();
		getRestaurant(searchText);
		console.log(searchText);
		e.preventDefault();



let searchRequest = {
  term:'restaurant',
  location: searchText
};

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });





function getRestaurant (searchText){
	client.search({term: 'restaurant', location: searchText , limit: 15})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error(err);
});
};

	});
});

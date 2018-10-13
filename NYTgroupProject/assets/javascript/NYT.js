
$( document ).ready(function() {

function displayReviewInfo (movie) {



var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
url += '?' + $.param({
  'api-key': "b2f7ed234f2647ea823d27075613c4f6",
  "query" : movie
  
});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

var movie = $("#searchText").val().trim();

displayMovieInfo(movie);

});
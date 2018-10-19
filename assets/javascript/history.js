

   var config = {
    apiKey: "AIzaSyCcaX0VDwva1Wf_-9_AkT6z1OAmuFat7sk",
    authDomain: "api-project-40a0b.firebaseapp.com",
    databaseURL: "https://api-project-40a0b.firebaseio.com",
    projectId: "api-project-40a0b",
    storageBucket: "api-project-40a0b.appspot.com",
    messagingSenderId: "1043881912872"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
//  This is a the Firebase event that adds movie title to the search history
  database.ref().on ("child_added", function(childSnapshot){
  var searchedMovie = childSnapshot.val().movie; // name is a placeholder for whatever was used as a varible in seach results
// console.log(seachedMovie);
// This is a new row that will appear in the Search history when a movie is searched 
 for(var i =1; i < 4; i++){
   var omdbTitle = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=45885583&limit=5" +i;
   var nyTimes = "https://api.nytimes.com/svc/movies/v2/reviews/search.json" + i;
     $("#main").append(
       $("<button>")
          .attr("omdb-ajax", omdbTitle)
          .attr("nyt-ajax", nyTimes)
          .text("history #" + i)
     )
 };
  function displayMovieInfo (movie) { 
  var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=45885583&limit=5";

  $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response)

      var title = response.Title;
      var pTitle = $("<p>").text("Title: " + title);
      var rating = response.Rated;
      var pRating = $("<p>").text("Rating: " + rating);
      var released = response.Released;
      var pReleased = $("<p>").text("Released: " + released);
      var plot = response.Plot;
      var pPlot = $("<p>").text("Plot: " + plot);
      var cast = response.Actors
      var pCast = $("<p>").text("Cast: " + cast);
      var poster = response.Poster
      var pPoster = $("<img>").attr("src", poster);
      $("#omdb").empty();
      $("#omdb").append(pTitle, pRating, pReleased, pCast, pPlot, pPoster)

    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
    url += '?' + $.param({
      'api-key': "b2f7ed234f2647ea823d27075613c4f6",
      "query" : movie
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      var title = result.results[0].headline;
      var pTitle = $("<p>").text("Title: " + title);
      console.log(title);
      var author = result.results[0].byline;
      var pAuthor = $("<p>").text("Author: " + author);
      console.log(author);
      var snipit = result.results[0].summary_short;
      var pSnipit = $("<p>").text("Snip It: " + snipit);
      console.log(snipit);
      var link = result.results[0].link.url;
      var pLink = $("<a>").attr("href", link).append(link);
      console.log(link);
      $("#nyTimes").empty();
      $("#nyTimes").append(pTitle, pAuthor, pSnipit, pLink);
    }).fail(function(err) {
      throw err;

    // NICKS CODE GOES HERE

  });
};
    $("<div/>").on("click", function(event){
      event.preventDefault();
      var movie = $("#movie-input").val().trim();
      displayMovieInfo(movie);
    });





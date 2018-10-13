$(document).ready(function() {

    // Create function that will render information into HTML Display
    function displayMovieInfo (movie) { 

        // Querying the oMDB api for the selected movie
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

          // var artistURL = $("<a>").attr("href", response.url).append(artistName);

          // // Deleting the movie NYTReview display prior to adding new review
          $("#nyTimes").empty();
          // //Displaying all the response variables
          $("#nyTimes").append(pTitle, pAuthor, pSnipit, pLink);
          
        }).fail(function(err) {
          throw err;
        });
      };
                    
        // This function handles events where a movie button is clicked
        $("#add-movie").on("click", function(event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();
    
    //Running the display movie function
    displayMovieInfo(movie);
        });
        
});
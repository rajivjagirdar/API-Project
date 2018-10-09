// Movies will get dumped into display section in HTML (figure out)
// Create function that will re-render information into HTML Display
function displayMovieInfo() {

            // Deleting the movie omdb prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#omdb").empty();

    // This line grabs the input from the textbox
    var movie = $("#movie-input").val().trim();
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=45885583";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {

// This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
  
            // Creating a div to hold the movie
            var movieDiv = $("<div class='movie'>");
  
            // Storing the rating data
            var rating = response.Rated;
  
            // Creating an element to have the rating displayed
            var pOne = $("<p>").text("Rating: " + rating);
  
            // Displaying the rating
            movieDiv.append(pOne);
  
            // Storing the release year
            var released = response.Released;
  
            // Creating an element to hold the release year
            var pTwo = $("<p>").text("Released: " + released);
  
            // Displaying the release year
            movieDiv.append(pTwo);
  
            // Storing the plot
            var plot = response.Plot;
  
            // Creating an element to hold the plot
            var pThree = $("<p>").text("Plot: " + plot);
  
            // Appending the plot
            movieDiv.append(pThree);

            // Storing the cast
            var cast = response.Actors

            // Creating an element to hold the cast
            var pFour = $("<p>").text("Cast: " + cast);

            // Displaying the cast 
            movieDiv.append(pFour);

        });

    });

};

displayMovieInfo();

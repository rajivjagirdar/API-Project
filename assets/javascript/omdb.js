// Movies will get dumped into display section in HTML (figure out)
// Create function that will re-render information into HTML Display
function displayMovieInfo() {

    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
  
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

             // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();
      });

};

displayMovieInfo();

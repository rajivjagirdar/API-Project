$( document ).ready(function() {

    // Create function that will render information into HTML Display
    function displayMovieInfo (movie) { 

        // Querying the oMDB api for the selected movie
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=45885583&limit=5";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response)

            // Storing the Title data
            var title = response.Title;
            // Creating an element to have the rating displayed
            var pTitle = $("<p>").text("Title: " + title);
 

            // Storing the rating data
            var rating = response.Rated;
            // Creating an element to have the rating displayed
            var pRating = $("<p>").text("Rating: " + rating);
 
    
            // Storing the release year
            var released = response.Released;
            // Creating an element to hold the release year
            var pReleased = $("<p>").text("Released: " + released);

            // Storing the plot
            var plot = response.Plot;
            // Creating an element to hold the plot
            var pPlot = $("<p>").text("Plot: " + plot);

            // Storing the cast
            var cast = response.Actors
            // Creating an element to hold the cast
            var pCast = $("<p>").text("Cast: " + cast);

            // Storing the poster
            var poster = response.Poster
            // Creating an element to hold the cast
            var pPoster = $("<img>").attr("src", poster);


            // Deleting the movie omdb display prior to adding new movie
            $("#omdb").empty();
            //Displaying all the response variables
            $("#omdb").append(pTitle, pRating, pReleased, pCast, pPlot, pPoster)

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



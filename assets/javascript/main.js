var GlobalTitle = ""
var SliceYear = ""

$(document).ready(function() {

    var popular = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=acf664aff45e61ffd55c6f2b051e212f",
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(popular).done(function (response) {
        console.log(response);
        var top = response.results;
        var topmovie = top[0].original_title
        console.log(top);
        for (let i = 0; i < 6; i++) {
          console.log(top[i].original_title);
          console.log(top[i].poster_path);
          $('#topBox').append('<p>' + top[i].original_title +'</p>' + '<br>')

        };
        var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
         url += '?' + $.param({
           'api-key': "b2f7ed234f2647ea823d27075613c4f6",
           "query" : topmovie
           
          });
          $.ajax({
              url: url,
              method: 'GET',
          }).done(function(result) {
            GlobalTitle = result.results[0].display_title;
            var headline = result.results[0].headline;
            var pHeadline = $("<p>").text("Title: " + headline);
            
            var author = result.results[0].byline;
            var pAuthor = $("<p>").text("Author: " + author);

            var snipit = result.results[0].summary_short;
            var pSnipit = $("<p>").text("Snip It: " + snipit);

            var link = result.results[0].link.url;
            var pLink = $("<a>").attr("href", link).append(link);

            var year = result.results[0].opening_date;
            SliceYear = year.slice(0,4)

            $("#nyTimes").empty();
            $("#nyTimes").append(pHeadline, pAuthor, pSnipit, pLink);

            var queryURL = "http://www.omdbapi.com/?t=" + topmovie + "&y=" + SliceYear + "&plot=short&apikey=45885583&limit=5";
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

                var query = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://api.themoviedb.org/3/search/movie?api_key=acf664aff45e61ffd55c6f2b051e212f&query=" + topmovie,
                    "method": "GET",
                    "headers": {},
                    "data": "{}"
                }
        
                $.ajax(query).done(function (res) {
                    if (res.results.length === 0) {
                        alert("I think you spelled the movie wrong :( ")
                    }
                    else {
                        console.log(res);
                        console.log(res.results[0].id);
        
                        var eyeD = res.results[0].id;
        
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "https://api.themoviedb.org/3/movie/" + eyeD + "/videos?language=en-US&api_key=acf664aff45e61ffd55c6f2b051e212f",
                            "method": "GET",
                            "headers": {},
                            "data": "{}"
                        }
        
                        $.ajax(settings).done(function (response) {
                            keymaster = response.results[0].key;
                            console.log(response);
                            console.log(keymaster);
                            $('#videoData').attr('src', "https://www.youtube.com/embed/" + keymaster);
                        });
                    };
        });
    });
});


$('#add-movie').on('click', function (event) {
    event.preventDefault();
    var movie = $("#movie-input").val().trim();

    var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
    url += '?' + $.param({
      'api-key': "b2f7ed234f2647ea823d27075613c4f6",
      "query" : movie
      
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {

        GlobalTitle = result.results[0].display_title;
        console.log(result.results[0].display_title);

        var headline = result.results[0].headline;
        var pHeadline = $("<p>").text("Title: " + headline);
        console.log(headline);
        
        var author = result.results[0].byline;
        var pAuthor = $("<p>").text("Author: " + author);
        console.log(author);
        
        var snipit = result.results[0].summary_short;
        var pSnipit = $("<p>").text("Snip It: " + snipit);
        console.log(snipit);

        var link = result.results[0].link.url;
        var pLink = $("<a>").attr("href", link).append(link);
        console.log(link);

        var year = result.results[0].opening_date;
        console.log(year);

        console.log(year.slice(0,4))
        SliceYear = year.slice(0,4)

        $("#nyTimes").empty();
        $("#nyTimes").append(pHeadline, pAuthor, pSnipit, pLink);

               var queryURL = "http://www.omdbapi.com/?t=" + GlobalTitle + "&y=" + SliceYear + "&plot=short&apikey=45885583&limit=5";
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

                   var query = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://api.themoviedb.org/3/search/movie?api_key=acf664aff45e61ffd55c6f2b051e212f&query=" + GlobalTitle,
                    "method": "GET",
                    "headers": {},
                    "data": "{}"
                }
        
                $.ajax(query).done(function (res) {
                    if (res.results.length === 0) {
                        alert("I think you spelled the movie wrong :( ")
                    }
                    else {
                        console.log(res);
                        console.log(res.results[0].id);
        
                        var eyeD = res.results[0].id;
        
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "https://api.themoviedb.org/3/movie/" + eyeD + "/videos?language=en-US&api_key=acf664aff45e61ffd55c6f2b051e212f",
                            "method": "GET",
                            "headers": {},
                            "data": "{}"
                        }
        
                        $.ajax(settings).done(function (response) {
                            keymaster = response.results[0].key;
                            console.log(response);
                            console.log(keymaster);
                            $('#videoData').attr('src', "https://www.youtube.com/embed/" + keymaster);
                        });
                    };
    
        
                });
            }).fail(function(err) {
                throw err;
              });
            });
        });
    });
});


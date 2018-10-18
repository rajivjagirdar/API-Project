$(document).ready(function () {

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
        console.log(top);
        for (let i = 0; i < 6; i++) {
          console.log(top[i].original_title);
          console.log(top[i].poster_path);
          $('#topBox').append('<p>' + top[i].original_title +'</p>' + '<br>')
          
        }


        
    });

    



    $('#add-movie').on('click', function (event) {
        // $('#omdb').empty();
        // $('#nyTimes').empty();
        event.preventDefault();
        var result = $("#movie-input").val();
        $('#movie-input').val("");
        console.log(result);

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
            }

        })

    })




});
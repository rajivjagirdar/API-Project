$(document).ready(function () {

    $('#add-movie').on('click', function (event) {

        event.preventDefault();
        var result = $("#movie-input").val();
        $('#movie-input').val("");
        console.log(result);

        var query = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/search/movie?api_key=acf664aff45e61ffd55c6f2b051e212f&query=" + result,
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
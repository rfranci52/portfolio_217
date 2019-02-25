console.log("y")

var array = [button1, button2]



var button1 = $('#button1').on('click', function () {
    var athlete_button_key = $.get("https://api.giphy.com/v1/gifs/search?q=michael+jordan&api_key=nWmC2DShZN8VR5yn5Yy1EFOmk22VNT6d&limit=5");

    athlete_button_key.done(function (data) {

        for (var i = 0; data.data.length; i++)
            if (data.data.length > 1) {
                var gif = (data.data[i].images.fixed_height_small.url)
                var static = (data.data[i].images.fixed_height_small_still.url)





                $('#gif').attr('src', gif);
                console.log(('src', gif))

                var personImage = $("<img>");
                personImage.attr("src", gif);


                $('#gif').append(personImage)
                var rating = (data.data[i].rating)
                var p = $("#gif2").prepend("Rating:" + rating + "<br>");


                $("img").on("click", function () {
                    $('img').attr('src', static);
                    $("img").on("click", function () {
                        $('img').attr('src', gif);
                    })




                })






            }

    })

})
var button2 = $('#button2').on('click', function () {
    var athlete_button_key = $.get("https://api.giphy.com/v1/gifs/search?q=tom+brady&api_key=nWmC2DShZN8VR5yn5Yy1EFOmk22VNT6d&limit=5");

    athlete_button_key.done(function (data) {

        for (var i = 0; data.data.length; i++)
            if (data.data.length > 1) {
                var gif = (data.data[i].images.fixed_height_small.url)
                var static = (data.data[i].images.fixed_height_small_still.url)



                $('#gif').attr('src', gif);
                console.log(('src', gif))

                var personImage = $("<img>");
                personImage.attr("src", gif);
                $('#gif').append(personImage)

                var rating = (data.data[i].rating)
                var p = $("#gif2").prepend("Rating:" + rating + "<br>");


                $("img").on("click", function () {
                    $('img').attr('src', static);
                    $("img").on("click", function () {
                        $('img').attr('src', gif);
                    })




                })









            }
    })

})


var button4 = $('#button4').on('click', function () {
    var athlete_button_key = $.get("https://api.giphy.com/v1/gifs/search?q=manny+ramirez&api_key=nWmC2DShZN8VR5yn5Yy1EFOmk22VNT6d&limit=5");

    athlete_button_key.done(function (data) {

        for (var i = 0; data.data.length; i++)
            if (data.data.length > 1) {
                var gif = (data.data[i].images.fixed_height_small.url)
                var static = (data.data[i].images.fixed_height_small_still.url)




                $('#gif').attr('src', gif);
                console.log(('src', gif))

                var personImage = $("<img>");
                personImage.attr("src", gif);


                $('#gif').append(personImage)
                var rating = (data.data[i].rating)
                var p = $("#gif2").prepend("Rating:" + rating + "<br>");


                $("img").on("click", function () {
                    $('img').attr('src', static);
                    $("img").on("click", function () {
                        $('img').attr('src', gif);
                    })




                })








            }

    })

})


var button5 = $('#button5').on('click', function () {
    var athlete_button_key = $.get("https://api.giphy.com/v1/gifs/search?q=lebron+james&api_key=nWmC2DShZN8VR5yn5Yy1EFOmk22VNT6d&limit=5");

    athlete_button_key.done(function (data) {

        for (var i = 0; data.data.length; i++)
            if (data.data.length > 1) {
                var gif = (data.data[i].images.fixed_height_small.url)
                var static = (data.data[i].images.fixed_height_small_still.url)




                $('#gif').attr('src', gif);
                console.log(('src', gif))

                var personImage = $("<img>");
                personImage.attr("src", gif);


                $('#gif').append(personImage)
                var rating = (data.data[i].rating)
                var p = $("#gif2").prepend("Rating:" + rating + "<br>");


                $("img").on("click", function () {
                    $('img').attr('src', static);
                    $("img").on("click", function () {
                        $('img').attr('src', gif);
                    })




                })








            }

    })

})



var button6 = $('#button6').on('click', function () {
    var athlete_button_key = $.get("https://api.giphy.com/v1/gifs/search?q=albert+pujos&api_key=nWmC2DShZN8VR5yn5Yy1EFOmk22VNT6d&limit=5");

    athlete_button_key.done(function (data) {

        for (var i = 0; data.data.length; i++)
            if (data.data.length > 1) {
                var gif = (data.data[i].images.fixed_height_small.url)
                var static = (data.data[i].images.fixed_height_small_still.url)




                $('#gif').attr('src', gif);
                console.log(('src', gif))

                var personImage = $("<img>");
                personImage.attr("src", gif);


                $('#gif').append(personImage)
                var rating = (data.data[i].rating)
                var p = $("#gif2").prepend("Rating:" + rating + "<br>");


                $("img").on("click", function () {
                    $('img').attr('src', static);
                    $("img").on("click", function () {
                        $('img').attr('src', gif);
                    })




                })








            }

    })

})










var button3 = $('#athletesubmit').on('click', function () {
    if (button3.val() === null) {
        alert("please enter an athlete")
    } else {

        var name = $("#athleteform").val().trim();
        name = name.replace(/ /g, "+");

        var get_key =
            $.get(
                "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=nWmC2DShZN8VR5yn5Yy1EFOmk22VNT6d&limit=5");

        get_key.done(function (data) {







            $('#gif').attr('src', gif);
            console.log(('src', gif))
            var button = $("<button>")
            button = $("<button>").addClass("btn btn-primary")
            name = name.replace("+", " ");

            button.html(name);
            button.on("click"


                ,
                function () {

                    var name = $("#athleteform").val().trim();
                    name = name.replace(/ /g, "+");

                    var get_key =
                        $.get(
                            "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=nWmC2DShZN8VR5yn5Yy1EFOmk22VNT6d&limit=5");

                    get_key.done(function (data) {
                        for (var i = 0; data.data.length; i++)
                            if (data.data.length > 1) {
                                // var gifanimate = (data.data[i].images.fixed_height_small.url)
                                var gif = (data.data[i].images.fixed_height_small.url)
                                var static = (data.data[i].images.fixed_height_small_still.url)
                                console.log(gif)
                                console.log(data.data)




                                $('#gif').attr('src', gif);
                                console.log(('src', gif))

                                var personImage = $("<img>");
                                personImage.attr("src", gif);


                                $('#gif').append(personImage);
                                console.log(button)
                                var rating = (data.data[i].rating)
                                var p = $("#gif2").prepend("Rating:" + rating + "<br>");

                                $("img").on("click", function () {

                                    var personImage = $("<img>");
                                    personImage.attr("src", static);
                                    $('img').attr('src',






                                        static);
                                    $("img").on("click", function () {

                                        $('img').attr('src', gif);
                                    })

                                    // personImage = $("<img>");
                                    // personImage.attr("src", static);
                                    // console.log(static)


                                })


                            }



                    })
                })


            var personImage = $("<img>");
            personImage.attr("src", gif);







            // console.log(button)
            // $("#gifanimate").on("click", function () {
            //     $('#gif').attr('src', gifanimate);

            //     personImage = $("<img>");
            //     personImage.attr("src", gifanimate);

            // })



            $('.col-sm-12').append(button);

        })
    }
})
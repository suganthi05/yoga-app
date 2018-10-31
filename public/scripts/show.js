//file for posting the fav studio , aa
$(document).ready(function () {

    var urlpath = window.location.pathname; //gives the current URL
    var id = urlpath.substring(urlpath.lastIndexOf('/') + 1);
    $.ajax({
        url: "/yoga/checkfavorite",
        method: "POST",
        data: {
            'yoga_id': id
        },
    }).then(function (response) {
        console.log("inside Value: " + response.isFav);
        if (response.isFav) {
            $("#id-of-input").click(function (event) {
                // event.preventDefault(); <
                // i class = "glyphicon glyphicon-heart-empty" > < /i> <
                // i class = "glyphicon glyphicon-heart" > < /i>
            });

            //Show the button state, already added, show button press, Change CSS
        } else {

        }
    }).catch(function (error) {
        console.log("Error:", error);
    })




    $("#id-of-input").click(function (e) {
        //$("#favbutton").click(function (e) {
        e.preventDefault();
        if (true) {
            var urlpath = window.location.pathname; //gives the current URL
            var id = urlpath.substring(urlpath.lastIndexOf('/') + 1);
            console.log("----working-----");
            $.ajax({
                url: "/yoga/addfavorites",
                method: "POST",
                data: {
                    yoga_id: id
                },
            }).then(function (response) {
                console.log("inside");
                alert("Favorite Studio Added");
            }).catch(function (error) {
                console.log("Error:", error);
                if (parseInt(error.status) === 400) {
                    alert("Sorry, Favorite Studio Already Present");
                } else {
                    alert("Error, Please log-in first!");
                }
            })

        }


    });

});
//login jquery
$(document).ready(function () {
    $("#login-button").click(function (event) {
        event.preventDefault();

        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });



});
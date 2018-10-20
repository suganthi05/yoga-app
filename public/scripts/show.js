$(document).ready(function () {

    $("#favbutton").click(function (e) {

        e.preventDefault();
        var urlpath = window.location.pathname; //gives the current URL
        var id = urlpath.substring(urlpath.lastIndexOf('/') + 1);
        console.log("working");
        $.ajax({
            url: "/yoga/addfavorites",
            method: "POST",
            data: {
                yoga_id: id
            },
        }).then(function (response) {
            console.log("From Ajax Call");
            console.log(response);

        }).catch(function (error) {
            console.log("Error:", error);
        })

    });

});
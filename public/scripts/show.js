//file for posting the fav studio , aa
$(document).ready(function () {

    $("#id-of-input").change(function (e) {
        //$("#favbutton").click(function (e) {
        e.preventDefault();
        if (this.checked) {
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
                    alert("Error Occured!");
                }
            })

        }


    });

});

$(document).ready(function () {
    $("#login-button").click(function (event) {
        event.preventDefault();

        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });
});
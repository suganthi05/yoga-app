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
//login jquery
$(document).ready(function () {
    $("#login-button").click(function (event) {
        event.preventDefault();

        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });
});

//code for add to my favs   
$(document).ready(function () {

    $('.click').click(function () {
        if ($('span').hasClass("fa-star")) {
            $('.click').removeClass('active')
            setTimeout(function () {
                $('.click').removeClass('active-2')
            }, 30)
            $('.click').removeClass('active-3')
            setTimeout(function () {
                $('span').removeClass('fa-star')
                $('span').addClass('fa-star-o')
            }, 15)
        } else {
            $('.click').addClass('active')
            $('.click').addClass('active-2')
            setTimeout(function () {
                $('span').addClass('fa-star')
                $('span').removeClass('fa-star-o')
            }, 150)
            setTimeout(function () {
                $('.click').addClass('active-3')
            }, 150)
            $('.info').addClass('info-tog')
            setTimeout(function () {
                $('.info').removeClass('info-tog')
            }, 1000)
        }
    })
});
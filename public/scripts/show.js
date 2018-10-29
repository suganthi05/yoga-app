//file for posting the fav studio , aa
$(document).ready(function () {

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
// $(document).ready(function () {

//     $('.click').click(function () {
//         if ($(this).find('span').hasClass("fa-star")) {
//             $(this).removeClass('active')
//             setTimeout(function () {
//                 $(this).removeClass('active-2')
//             }, 30)
//             $(this).removeClass('active-3')
//             setTimeout(function () {
//                 $(this).find('span').removeClass('fa-star');
//                 $(this).find('span').addClass('fa-star-o')
//             }, 15)
//         } else {
//             $(this).addClass('active')
//             $(this).addClass('active-2')
//             setTimeout(function () {
//                 $(this).addClass('fa-star')
//                 $(this).removeClass('fa-star-o')
//             }, 150)
//             setTimeout(function () {
//                 $(this).addClass('active-3')
//             }, 150)
//             $('.info').addClass('info-tog')
//             setTimeout(function () {
//                 $('.info').removeClass('info-tog')
//             }, 1000)
//         }
//     })
// });
$(document).ready(function () {

    $("#register-form").on("submit", function (ev) {
        ev.preventDefault();
        var formData = $(this).serializeArray();
        var form = ev.target;
        var data = new FormData(form);
        $.ajax({
            url: form.action,
            method: form.method,
            contentType: false,
            data: data,
            processData: false,
            success: function (data) {

                console.log("Client - " + data.url);

                var dataPost = {
                    username: formData[0].value,
                    home: formData[1].value,
                    email: formData[2].value,
                    password: formData[3].value,
                    url: data.url
                };

                $.ajax({
                    url: "/register",
                    method: "POST",
                    data: dataPost,
                    success: function (data) {
                        console.log("Success---");
                        //redirect
                        window.location.replace("/yoga");
                    },
                    error: function (err) {
                        console.log("error---" + err);
                    }
                });

            },
            error: function (err) {

            }
        });
    });


});
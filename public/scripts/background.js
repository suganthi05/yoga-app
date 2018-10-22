var counter = 0;

function changeBG() {
    var imgs = [
        "url(https://images.pexels.com/photos/588561/pexels-photo-588561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.pexels.com/photos/374632/pexels-photo-374632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.pexels.com/photos/1328527/pexels-photo-1328527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.pexels.com/photos/268134/pexels-photo-268134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.pexels.com/photos/823694/pexels-photo-823694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.pexels.com/photos/396133/pexels-photo-396133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)"
    ]

    if (counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}

setInterval(changeBG, 2000);
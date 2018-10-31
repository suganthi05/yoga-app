let map;

function initMap() {
    let mapOptions = {
        center: new google.maps.LatLng(43.65432, -79.38347), //Toronto
        zoom: 8.5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    console.log("userFavLocations: " + userFavLocations);
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(userLat, userLng),
        map: map,
        icon: {
            url: "https://png.icons8.com/dusk/60/000000/order-delivered.png"
        }

    });
    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            let infowindow = new google.maps.InfoWindow();
            infowindow.setContent("<p><b>My Home " + username + "</b></p>");
            infowindow.open(map, marker);
        }
    })(marker));

    addMarkers();
}

function addMarkers() {

    var index = 0;
    var marker;

    userFavLocations.forEach(yoga => {
        ++index;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(yoga.lat, yoga.lng),
            map: map,
            icon: {
                url: "https://png.icons8.com/office/40/000000/heart-balloon.png"
            }

        });
        // console.log("yoga lat: " + yoga.lat);
        // console.log("yoga Obj: " + JSON.stringify(yoga));
        // console.log("yoga : " + yoga.name);
        google.maps.event.addListener(marker, 'click', (function (marker, index) {
            return function () {
                let infowindow = new google.maps.InfoWindow();
                infowindow.setContent(
                    "<p><b>" + yoga.name + "</b></p>" +
                    // "<p>" + yoga.location + "</p>" +
                    "<img src='" + yoga.image + "' width='100px' height='80px'>")
                // "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='/yoga/" + yoga._id + "' class='btn btn-primary'>More Info</a>")
                // infowindow.open(map, marker);
            }
        })(marker, index));

    });


    userStudiosLocations.forEach(yoga => {
        ++index;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(yoga.lat, yoga.lng),
            map: map,
            icon: {
                url: "https://png.icons8.com/office/40/000000/sort-down.png"
            }
        });
        //console.log("yoga lat: " + yoga.lat);
        //console.log("yoga Obj: " + JSON.stringify(yoga));
        //console.log("yoga : " + yoga.name);
        google.maps.event.addListener(marker, 'click', (function (marker, index) {
            return function () {
                let infowindow = new google.maps.InfoWindow();
                infowindow.setContent(
                    "<p><b>" + yoga.name + "</b></p>" +
                    // "<p>" + yoga.location + "</p>" +
                    "<img src='" + yoga.image + "' width='100px' height='80px'>")
                // "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='/yoga/" + yoga._id + "' class='btn btn-primary'>More Info</a>")
                // infowindow.open(map, marker);
            }
        })(marker, index));

    });
}
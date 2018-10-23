function initMap() { //will give the blank map
    var mapOptions = {
        center: new google.maps.LatLng(43.65432, -79.38347),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

var map;

$(document).ready(function () {


    $.ajax({
        url: "yoga/getallstudios",
        method: "GET"
    }).then(function (response) {
        console.log("From Ajax Call");
        console.log(response);
        loadMapPoints(response);

    }).catch(function (error) {
        console.log("Error:", error);
    })

});

function loadMapPoints(response) {
    var marker;
    var index;
    response.forEach(point => {
        ++index;
        console.log("points are", point);
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(point.lat, point.lng),
            map: map,
            icon: image
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                var infowindow = new google.maps.InfoWindow();
                infowindow.setContent(
                    "<p>Title: " + point.name + "</p>" +
                    // "<p>Description: " + response.pointsArray[i].description + "</p>" +
                    "<img src='" + point.image + "' width='100px' height='100px'>")
                // "Co-ordinates: " + response.pointsArray[i].latitude)
                infowindow.open(map, marker);
            }
        })(marker, index));

    });
}
// begin - sj
function showCount(count) {
    $("h3#results-found").html('');
    let text = `${count} yoga studio(s) found!`;
    let $count = $("<span>").addClass("label label-warning").append(text);
    $("h3#results-found").append($count);
} 

// render yoga studio search results
function renderResult(yogadata, nomatch) {
    $("div#search-result").html('');
    let $result = $("<div>").addClass("row text-center").css({
        'display': 'flex',
        'flex-wrap': 'wrap'
    });
    let $nomatchdiv = $("<div>").addClass("col-md-12");
    if (nomatch !== null) {
        let $nomatch = $("<h3>").append(nomatch);
        $nomatchdiv.append($nomatch);
    }
    $result.append($nomatchdiv);
    $('div#search-result').append($result);
    for (let yoga of yogadata) {
        let img = yoga.image;
        let name = yoga.name;
        let yogaid = yoga._id;
        let rating = yoga.rating;
        let cost = yoga.cost;
        let $column = $("<div>").addClass("col-md-3 col-sm-6");
        let $thumbnail = $("<div>").addClass("thumbnail search-results");
        let $image = $(`<img src = ${img}>`).addClass("image-results");
        let $caption = $("<div>").addClass("caption");
        let $name = $("<h4>").append(name);
        let $para = $("<p>")
        let $link = $("<a />", {
            href: `/yoga/${yogaid}`,
            class: "btn btn-primary more-info",
            text: "More Info"
        });
        // begin - sj - show amenities using awesome font
        let $amenities;
        for (let amenities of yoga.amenities) {
            if (amenities === "Parking") {
                $amenities = $("<span>").addClass("fa fa-car").attr('title', 'Parking');
                $para.append($amenities);
                $para.append(" | ");
            } else if (amenities === "Wifi") {
                $amenities = $("<span>").addClass("fa fa-wifi").attr('title', 'Wifi');
                $para.append($amenities);
                $para.append(" | ");
            } else if (amenities === "Lockers") {
                $amenities = $("<span>").addClass("fa fa-lock").attr('title', 'Locker');
                $para.append($amenities);
                $para.append(" | ");
            } else if (amenities === "Showers") {
                $amenities = $("<span>").addClass("fa fa-shower").attr('title', 'Shower');
                $para.append($amenities);
                $para.append(" | ");
            } else if (amenities === "Smoothie Bar") {
                $amenities = $("<span>").addClass("fa fa-coffee").attr('title', 'Smoothie Bar');
                $para.append($amenities);
                $para.append(" | ");
            }
        }

        let $cost;
        if (cost >= 0 && cost <= 15) {
            $cost = $("<span>").addClass("fa fa-dollar");
            $para.append($cost);
        } else if (cost > 15 && cost <= 25) {
            $cost = $("<span>").addClass("fa fa-dollar");
            $para.append($cost);
            $cost = $("<span>").addClass("fa fa-dollar");
            $para.append($cost);
        } else if (cost > 25) {
            $cost = $("<span>").addClass("fa fa-dollar");
            $para.append($cost);
            $cost = $("<span>").addClass("fa fa-dollar");
            $para.append($cost);
            $cost = $("<span>").addClass("fa fa-dollar");
            $para.append($cost);
        }

        $para.append("<br />");
        $para.append("<br />");
        // end - sj - show amenities using awesome font

        // begin - sj - show rating star using awesome font
        let $star;
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                $star = $("<span>").addClass("fa fa-star checked");
                $para.append($star);
            } else {
                $star = $("<span>").addClass("fa fa-star unchecked");
                $para.append($star);
            }
        };
        $para.append("&nbsp;&nbsp;");
        // end - sj - show rating star using awesome font
        $caption.append($name);
        $para.append($link);
        $thumbnail.append($image, $caption, $para);
        $column.append($thumbnail);
        $('div#search-result').append($column);
    }
}

let map;

function initMap() { //will give the blank map
    let mapOptions = {
        center: new google.maps.LatLng(45.65432, -79.48347), //Toronto
        zoom: 8.1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
let gmarkers = [];

function removeMapMarkers() {
    for (i = 0; i < gmarkers.length; i++) {
        gmarkers[i].setMap(null);
    }
}

function loadMapMarkers(yogadata) {
    let marker;
    let index;
    let position;
    removeMapMarkers();
    for (let yoga of yogadata) {
        position = new google.maps.LatLng(yoga.lat, yoga.lng);
        marker = new google.maps.Marker({
            position: position,
            map: map
        });
        gmarkers.push(marker);
        map.setCenter(position);
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                let infowindow = new google.maps.InfoWindow();
                infowindow.setContent(
                    "<p><b>" + yoga.name + "</b></p>" +
                    "<p>" + yoga.location + "</p>" +
                    "<img src='" + yoga.image + "' width='100px' height='80px'>" +
                    "     <a href='/yoga/" + yoga._id + "' class='btn btn-primary'>More Info</a>")
                infowindow.open(map, marker);
            }
        })(marker, index));
    }
}

// ajax call to get yoga search result and render on screen
$(document).ready(function () {



    // initial load of map
    $.ajax({
        url: "yoga/getallstudios",
        method: "GET"
    }).then(function (data) {
        loadMapMarkers(data);
    }).catch(function (error) {
        console.log("Error:", error);
    });

    // Yoga studio search
    $("#filterbutton").click(function (event) {
        event.preventDefault();
        let queryString = $("form").serialize();
        // begin - sj - get multi-select classes and build query string
        let classes = 0;
        let selectClass = $('.selectpicker').selectpicker()[0];
        for (let i = 0; i < selectClass.length; i++) {
            if (selectClass[i].selected === true) {
                queryString += "&classes=" + selectClass[i].value;
                classes = 1;
            }
        }
        if (classes === 0) {
            queryString += "&classes=";
        }
        // end - sj - get multi-select classes and build query string

        // begin - sj - get multi-select amenities and build query string
        let amenities = 0;
        let selectAmenities = $('.selectpicker').selectpicker()[1];
        for (let i = 0; i < selectAmenities.length; i++) {
            if (selectAmenities[i].selected === true) {
                queryString += "&amenities=" + selectAmenities[i].value;
                amenities = 1;
            }
        }
        if (amenities === 0) {
            queryString += "&amenities=";
        }
        console.log(queryString);
        // end - sj - get multi-select amenities and build query string

        $.ajax({
            url: "/yoga",
            method: "GET",
            data: queryString
        }).then(function (data) {
            renderResult(data.yoga, data.noMatch);
            loadMapMarkers(data.yoga);
            showCount(data.count);
        }).catch(function (error) {
            console.log("Error:", error);
        })

    });
});
// end - sj
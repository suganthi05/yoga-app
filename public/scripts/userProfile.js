let map;

function initMap() {
    let mapOptions = {
        center: new google.maps.LatLng(43.65432, -79.38347), //Toronto
        zoom: 7.5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    console.log("userFavLocations: " + userFavLocations);
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(userLat, userLng),
        map: map,
        icon: {
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAi8SURBVGhD1VlpbFTXFXb3VV2itqqqtlKl/qnaX5X6p+3vVJEq9U+jqv3TRmqt2vNmjD3GdmSISxTKMrtnvMx43ntjE+MF47hATMLWbF5LAo4DCRBCiYgBA4G0cowp9un3vbkDdzzPCDB4+aSjeXOXs9xz7rnn3Vf0IBEq7/pCyLAfDxpWE36Hgx57MmjYN0ghw7qo2hoCXvO3HKumrRxEyuyvhTzWFtBHUFZCHnuuxWdOd5aZs7vWmELqAqV95gwMmnPGGPZHGLeRcxWb5YMUyScChlkOA65SuY6y9M3RyrRM1CTlygI0UZ0SjunEWM4JG/aHMK6UvBTbpUXA3/YlKNFLZVp95s2317a4Kn4nOr42JW1ea5Y8EI4dSx5uMa/5TaziGEgOVqRdlbwIOl2VknEYeL66sF+nA+BBXmHDOhwqb3lEibl/1P3R/nyyOPkZ9dcVdXXdn4XAobDHmnu9Mt8Ll0GjaOsoMyXidfaBQwPhlFxJN0h6jSU7sVeOuXjvMOZFPPZs2GO/1P1496eUOFdQB5L6Wwi4dxCCL4ECodKWH6rmPGA/2FRuyJ+vDMPELLMcxRMVlvQ3QrneRjl1MC5TJ6Jy/VREDpjNUl+eNW4E4/X5pEEYwz5ktrgSl4dwaebH8Fw9xlxjKKrmQgRLzV8ik+zMpkxkF4/5hOpyEPRYv6Kg58vNPAVGoEBUGTDS3SQfn4zIzGl3+s/xqIz3J+TqYEwubmqWdxF+Oi/ydoyBLkqsAxhXq4y8Dh23B3zpn6iuhbHFk/4OjKkJlFg/U01wZ90nEVLHG2Eg4z8nmCERQhiZ60y59EbMVfmFaKC9yVkAPdQugBoMezZiWP/SMxkSyy9giJ/7UzXdH4KG+XuuCN2fE8rVjMKI1JOmXHsrmqfk5OsxeTHVLK0bTIf2tSSdNn0M56RrTWnw2XIOaTnHdwBhS1nhUus3SvyDA7zxahzeuKSEkbrVpj43HM9T8MSBhMSwsSO+jLT9fYdDfOb+YJ8+dmKkXsLgsQdJIMeXMuLwSsiT2aPEPxhsKmn/Ojb5XJ+2N07CG1y1vU3JPMWujUcdhdN1nXLh5LjcuPqeQ+dPjEv6qQ5J+G1njD5nb3NSIuD1vpam+9akBZnxfzyvlBqLR9Bj/ppKH9HCan85c78tHwzX5yk12NHotJ8dO3rLiBz9++gRp2+wsylvzrmheqd9wH/7TGJqZ1vYm3lUqbF4wBvVZHpGyzAZnyXJGjNPIdKu+pQkKtvkxof5RjiENvbtiud7cebdiDRVWdKthdd7yuMsgZQadwbS2SvIzax3NLLfD5ZY31NDilTudjJKTlAjDNkRbMlXCLQzlJJkbXuhEYrYxzHz53VtbREb51CO/wVsfspEqg0rNYqoE3Wbry9tgJK2H3+S+WRHE6WJL6v5PD9SUWz0nBASN2jByoJ2J5LYI60yc+V0gRFsY9/zOCznzyOvJs0QEvYN6jArqdQook7UzUVfvxpyZ+BwjGCCU4LkhCS8KDdcVpbxD8Zy9s3CPcJ9w76R7saCeT3BlKQ1Q5i5OFb3yKIBI9aRqZ7rTYSWtb5wj5wfRTpFqu0I9Mr05dte4TPbImUZmcCY+fOs9WnZrhly9lZoWU8qNRYPHkxkOqadwLtZSiC89NN8bHeDNKxFFevNOEp0R/rkg2NjDu2I9jlt7Ev4LacOy827fCTm9B3SKulc1mLGVGosHltL7W+z9tqnCRpTgl59NptKX9mWDalAbaus6+yWDYl2x1C2OYTnpxs6pK69U+K12bZ96exeIQ/+P1l1e6FYc1HmokuS+Yh5rbdSCKecIMZwGv95+L3Rlz07Nm/aJpUDvVIx+pxDNS/0yFNmh0N8zrX7X+uV8MZWZ85QV6PEUQWw9Nd5N2APRjzWYSX+3uG8fxu2D5lqiPWVambmqqTgY1r5fRShxrYoFAnXZqRiOKvo3ZB/sFe2Vrc62Y9lDiuFW3yVt6mHEo+zzF4DHc7ASxv0o8EVGPw3VL1TismoXv0Gi5PfQL11Qz+0SH0wguPjG22pGHJX2o38GBt4us2ZuxdVgs6zHd4JG5lp/WIi6LV+Dv3GOR7G8H0/pLoKwU6eGahxfqqa8oC3NxPltJzSvMKU3APjKCBQ1ybVWggtRDX9PRKtyyaE/nnvNizp2R4ptRJKbB6y5bzVhmy2RTXdO7jp4ZUZrpgunPQSEgELP27qZzY/K+s6uqTqQI8TQlz9qv09sn57l0Q2wQsYE0fpztdinQcXJeOjN8zpwF/bvqXEPhzghK/jis1/XyedrUrKP7DCUSjJMW7UgATxIkKJ10Lz5w+rvYFVr1HiHh54QYFsMskMNrnA7Qjb30T4vYZqllUyb0n4svQ2NrReHejEOq4RmSpmWBMxb+xzStzDBTbb77hy+rmyWOpXrwW8TlVilgYxr72fG/+EdojdL/Fyj7yinnS/Yr904AVFxLCmWHNNuih3t8Qw5MGKRPFfJhPFfmmBd+onGA7cB25K3g3l3jRxfv1JsV0eIIsdYljoJ/PdEs+jbEiZBxW75UPU1/p9ZLFp6x5DjPUU3wgRUlObvanvKnbLC5y0BsODadZNaTf6J1Iz54D+otgsP3gLiZUd5cnOSwM3xXU6g8MQY+cQli8v23eRhRApaf0RPHNTf8tbiDqztdn1gNH2AzV9ZQGFXJjh4la+5Ih3Y05IodJW01Ye1LfEq80oCt3KFyaDZi9v+a2JZHHyi2raykSw1CzhirPOmm8IbxKz3rD+oIavXPBrE0r9d1AAzule4TPaZnFuDK+4Db4Qcp8gdK/wmW0BI/OYGrbygXT8aXjlTMpr3rqdTBnwhsc+qoasHmD119ID76CyJfE56MkUq+7VA76q8vvGHhSFJDx/HPNu+4rqXl2AF/bxK1c9bz081nOqefUBhvgYUtmwsv6smlcf+Ak5Z8hC3+1XBXimIKSuw5ApFpaqeXUChryMsDqk/q5ebC5OfpWk/j4kFBX9HzAC0pVBmUCfAAAAAElFTkSuQmCC"
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
                url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL6SURBVFhH7ZdNaxNRFIbrJyrSlQt3IoKoK8XPhR+k1rYotm6kFBVakzbGUoXupAvdudGNa/+AWQidCUEXUgU3tqltWk0mqbVY6iKZqYqKIOp7PTOcpml6U+5kxjZgH3ghM3O4eXJz58ydmlVWcQkm+pqEiG7kw+oDqbYZmHqED6sLpEM9YjQgSPBDVc4ikvWztqCwdJLUwny6OkD26nUxuEfMC+pTVTWLSJ6xigUdybzeyZdXFmQ6w45cqaCpvxcisYHLVg4kG0yZoCNp9Qe5bGWAEQwV5KSC2qQQA+u5fPlBsjG/lCBLdnD58oJ0sGOBXHnBd/98FoXRu00YXRdhtN/D29YnGG/O4PXRXyqCLPmCeuMDSjdm9Ubk4ruoDa3j4dVAtqdWTEQuIN1+lyRieNOSpub7CcOHfy8SKZcygrLQXf4Tlm5QNPp8nxKhH3Aan2I7hLi9lrXmsRc8hvZD+sWqcSFYLiT6Ela8lrUWAqPzChIeJD0K2ktB5KJbWUcOUqE2DB2oTNKDIP3Vz8RHbQtrLI1zQyQO/pFKLJUKBelvfaosNweMcItryQoESS4upgY28de6A5nwWSQOqUu6FLTvYM+7HmQjDcqtxoUgtZTHvm3JMBEJYPjI4sZcGlVBU4v6vtOhG+e4GNonF5uLmuBz108RFTDTvVsqVRwFQbud8JD+gkzwhlSqOEqCWp6H9BdhXIpKpYqjugZzse08rH/Q5iEllSqOoiDM/joe1j8wEvgqlSqOqqCl3+Rh/UNlp4PRAGRCpaGnx0Me1h8w1XNMJlQItR9nE2vXWbF6asKvZGJzsa/z0P4g0h13pGKDewXGzk3D6GriUgchxBpaZy0kMi4VtPRvdg2XeweptnipHMYaczAirVwixd4Zw4xddt5LSiU/9+/kMu9g/PxkQS5Z9wXZ0DW+pIT9WKPZDFNmCoKm3syXvYOREz8wcuo7UsFbfKoiMP1oM2a1XpIzaVb7+LR3nDUoe5GpEHtbj3zsJB+u8r9SU/MXRigwABA6Zl8AAAAASUVORK5CYII="
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
                url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJHSURBVGhD7ZbBS1RRFMYHhEIj3CWCkO9qBAZuDKeCWkSESEUL35tJpxQtylWYFFQUrVLURGlTUTupRRAu8g9Q3wzM4L/QxoWOiK6bRfd0zp3jKHod3L3z8P7gg/vuvefwfdw7817CcRyA3nNKp9Rb1KIOvD9GNE6pN7TG2+Siu1pPoulZnfJKkFJgE63pQE2D33aCy2ShMw2n0GRYMf30OsDkE4BPLwE+DB8MFKgluNVYx+VywJOYNybvtwF8fAbwc3ZX3yfQfIsljPeLy2UAQctdY67vPMBnPAEy/2MK4P0AwMgNgIH2AyF2hGFuc5vowSuVM8be3SuHmBsHeHTRany/6Dpym2jRaa8B7/s/c3XmxspBRm9aTdtEtTqjznC76NBB8zVjaqhj9/eQbrWaPkx4Kle5XXTodPMdY2j4cjnIl9dWs9VEPbhddOjg7CVjKI1X60U3wOOk1Ww1UQ9uFx3gq3p6ydkMHkVY+5d6cLtoQTMLNpNHEf79/uY20YN3PInfUdpmtJqoRvd4ndxGBmhqyma2mvA0JrhcDuAnajDMN5thm/D98ZVquFwe2vcG0eSazTyJ1rSv+nm7bOirtjSUzKyPPYetVw+MaFx6eKVP9zTV8rZ4sLKyXZ8tbMBe0RwvxwcXRBouiDRcEGm4INJwQaThgkjDBZGGCyINF0QaLog0XBBphOHm6f1BaI6X40U2X1yuBMExT8ePsFDMVE4DxzwdP3K51dpsobhNojFPx5MwvzFD4sf4spxfv0DiR8cxIZH4DzW9T1I9vq8WAAAAAElFTkSuQmCC"
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
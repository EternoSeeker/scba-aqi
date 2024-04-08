
var city = 'london'
var country = 'India'

document.addEventListener('DOMContentLoaded', function() {
    $.ajax({
        method: 'GET',
        url: "https://api.api-ninjas.com/v1/geocoding?city=" + city + "&country=" + country,
        headers: { 'X-Api-Key': 'y3qqgPjhSxvsv8WE6x7A3A==XqFvISvIxEARkHIX'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    
    var map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(19.082502, 72.7163719),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 11
    });

    var t = new Date().getTime();
    var waqiMapOverlay = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            return 'https://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=fbaf3106e129cd96ce5446b60cc9080b21373504";
        },
        name: "Air Quality",
    });

    map.overlayMapTypes.insertAt(0, waqiMapOverlay);
});
document.addEventListener('DOMContentLoaded', function() {
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

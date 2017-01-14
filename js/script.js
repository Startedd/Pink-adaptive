var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var map;

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {

    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
    }
});

(function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.936253, lng: 30.320740},
        zoom: 16
    });

    var image = 'img-optimized/icon-map-marker.svg';
    var marker = new google.maps.Marker({
        position: {lat: 59.936253, lng: 30.320740},
        map: map,
        title: 'Hello World!',
        icon: image
    });
})();



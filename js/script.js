let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let map;

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

    let image = 'img-optimized/icon-map-marker.svg';
    let marker = new google.maps.Marker({
        position: {lat: 59.936253, lng: 30.320740},
        map: map,
        title: 'Hello World!',
        icon: image
    });
})();



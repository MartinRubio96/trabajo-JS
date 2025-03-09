let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition
    (success,
    error,
    options
)} else {
    alert('Los servicios de geolocalización no están disponibles');
}

// servicio de geolocalizacion disponible
function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('mapa',{
        center:[latitude,longitude],
        zoom: 14
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

    // funcion para enrutar
    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude,longitude), // origen
            L.latLng(40.441187,-3.697425) // destino
        ],
        language: 'es'
    }).addTo(map);
}

// servicio de geolocalizacion no disponible
function error() {
    let map = L.map('mapa',{
        center:[40.441187,-3.697425],
        zoom: 14
    });
}

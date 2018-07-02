(function(){
    function initialize() {
        const map = new google.maps.Map(document.getElementById("map-container"), {
          center: {lat: 55.5973, lng: 26.4313},
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        getDirections(map)
    }
    
    function autoRefresh(map, pathCoords) {
        const route = new google.maps.Polyline({
            path: [],
            geodesic : true,
            strokeColor: '#000',
            strokeOpacity: .9,
            strokeWeight: 5,
            editable: false,
            map: map
        });
        
        const marker = new google.maps.Marker({
            map: map, 
            icon:"./images/train-icon.png",
        });
    
        for (let i = 0; i < pathCoords.length; i++) {                
            setTimeout(coords => {
                route.getPath().push(coords);
                marker.setPosition(coords);
            }, 200 * i, pathCoords[i]);
        }
    }
    
    function getDirections(map) {
        const directionsService = new google.maps.DirectionsService();
        const request = {
            origin: 'Minsk-Passajirskii, Minsk',
            destination: 'Riga',
            travelMode: 'TRANSIT',
            
        };
        directionsService.route(request, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                autoRefresh(map, result.routes[0].overview_path);
            }
        });
    }
    
    google.maps.event.addDomListener(window, 'load', initialize);
})();

(function() {
    const menuButton = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuButton.addEventListener('click', () => showMenu());
    mobileMenu.addEventListener('click', () => showMenu());

    function showMenu() {
        menuButton.classList.toggle('change');
        mobileMenu.classList.toggle('hidden');
    }
})();

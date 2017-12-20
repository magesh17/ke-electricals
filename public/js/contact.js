var map;
if ($('#map').length > 0) { 
    map = new GMaps({
        el: '#map',
        lat: 12.9647954,
        lng: 80.109924,
        scrollwheel: false
    });

    map.addMarker({
         lat: 12.9647954,
        lng: 80.109924,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p>Kalaivani Electricals Plot No: 11 & 12, Women Industrial Park, SIDCO, Thirumudivakkam, Chennai - 600 044, Tamil Nadu.</p>'
        }
    }); 
	
	}
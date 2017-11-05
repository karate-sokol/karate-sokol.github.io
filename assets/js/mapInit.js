function initMap() {
  var uluru = {lat: 50.059395, lng: 19.931838};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

  var uluru2 = {lat: 50.0665472, lng: 19.9030851};
  var map2 = new google.maps.Map(document.getElementById('piastowska'), {
    zoom: 15,
    center: uluru2
  });
  var marker2 = new google.maps.Marker({
    position: uluru2,
    map: map2
  });
}
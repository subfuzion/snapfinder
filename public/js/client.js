if ($("#homepage").length)
{
  if(typeof(Storage)!=="undefined")
  {
    var lat = localStorage.getItem('lat');
    var lng = localStorage.getItem('lng');
    if (lat && lng)
    {
     loadStoresByCoordinates(lat,lng);
    }
    else getLocation();
  }
}


$("#currentlocation").click(function () {
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  //else{x.innerHTML="Geolocation is not supported by this browser.";}
}


function showPosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  
  if(typeof(Storage)!=="undefined")
  {
    localStorage.lat = lat;
    localStorage.lng = lng;
  }

  loadStoresByCoordinates(lat,lng);
}

function loadStoresByCoordinates(lat,lng) {
  var address = lat + "," + lng;
  var range = document.getElementById('range');
  var url = '/storelist?address=' + address + (range ? '&range=' + range.value : '&range=3');
  window.location.href = url;
}


$("form#findform").submit(function (e) {

  e.preventDefault();

  var address = document.getElementById('address').value;
  if (address) {

    var range = document.getElementById('range');
    var url = '/storelist?address=' + address + (range ? '&range=' + range.value : '&range=3');
    window.location.href = url;
  }
});




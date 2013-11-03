$( "#currentlocation" ).click(function() {
  getLocation();
});

function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  //else{x.innerHTML="Geolocation is not supported by this browser.";}
  }


function showPosition(position)
  {
    var address = position.coords.latitude + "," +  position.coords.longitude;
    var range = document.getElementById('range');
    var url = '/storelist?address=' + address + (range ? '&range=' + range.value : '&range=3');
    window.location.href = url;
   //$('#address').val(position.coords.latitude + "," +  position.coords.longitude);
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

$("form#findform2").submit(function (e) {

  e.preventDefault();

  var address = document.getElementById('address').value;
  var range = document.getElementById('range');
  var url = '/storelist?address=' + address + (range ? '&range=' + range.value : '&range=3');

  $.ajax({
    type: 'GET',
    url: url,
    complete: function (r) {
      window.location.href = url;
    }
  });

});


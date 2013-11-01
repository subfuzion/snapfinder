$("form#findform").submit(function (e) {

  e.preventDefault();

  var address = document.getElementById('address').value;
  var range = document.getElementById('range');
  var url = '/storelist?address=' + address + (range ? '&range=' + range.value : '&range=3');

  window.location.href = url;

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


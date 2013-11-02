var config = require('./config.js');
var snap = require('snapfinder-lib');

snap.connect('mongodb://localhost/snapdb', function (err, client) {
  if (err) return console.error(err);
});

exports.index = function (req, res) {
  res.render('index', {title: 'SNAPfinder'});

};

exports.stores = function (req, res) {

  var address = req.query.address;
  var range = req.query.range;

  getStores(address, range, function (err, result) {
    if (err) console.error(err);
    if (!result) result = { address: address, zip5: '', stores: [] };

    var stores = result.stores;

    for (var i = 0; i < stores.length; i++) {
      var s = stores[i];
      var address = s.address1;
      if (s.address2) address += ',' + s.address2;
      if (s.city) address += ',' + s.city;
      if (s.state) address += ',' + s.state;
      if (s.zip5) address += ',' + s.zip5;
      var latlng = '' + stores[i].latitude + ',' + stores[i].longitude;
      var mapPreviewUrl = 'https://www.google.com/maps/preview#!q=' + encodeURIComponent(address);
      stores[i].mapPreviewUrl = mapPreviewUrl;
    }

    res.render('stores', {
      title: 'SNAPfinder',
      result: result,
      stores: stores,
      metaKeywords: 'snapfinder stores'});
  });

};

exports.singlestore = function (req, res) {

  var id = req.params.id;

  getStoreById(id, function (err, result) {
    if (result) {
      res.render('storedetail', {
        title: 'SNAPfinder',
        items: result,
        metaKeywords: 'snapfinder stores'});
    }
  });

};

function getStoreById(id, callback) {
  snap.getStore(id, callback);
}

// note that a successful result is an object with 3 properties:
// * address - fully formatted address that was the best match for input
// * zip5 - the 5 digit zip for the address
// * stores - an array of store objects that matches the database format
function getStores(address, range, callback) {
  if (islatlng(address)) {
    snap.findStoresInRangeLocation(parselatlng(address), range, callback);
  } else {
    snap.findStoresInRangeAddress(address, range, callback);
  }
}

function islatlng(s) {
  return s
    ? s.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)\s*,\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/g)
    : false;
}

function parselatlng(latlng) {
  try {
    var coords = latlng.split(',');
    return { lat: parseFloat(coords[0].trim()), lng: parseFloat(coords[1].trim()) };
  } catch (err) {
    return null;
  }
}


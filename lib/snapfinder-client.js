exports.findStoresInRangeLocation = findStoresInRangeLocation;
exports.findStoresInRangeAddress = findStoresInRangeAddress;


var util = require('util')
  , request = require('request')
  , qs = require('qs')
  ;


/**
 * Find nearby stores in ascending distance order.
 * @param locaton an object with lat and lng properties
 * @param range a distance in miles
 * @return data object with a zip5, address (formatted), and
 *              stores properties.
 */
function findStoresInRangeLocation(location, range, callback) {
  var latlng = util.format("%s,%s", location.lat, location.lng)
    , query = qs.stringify({ latlng: latlng, range: range})
    , reqtmpl = "http://snapfinder.org/v1/stores/nearby?%s"
    , req = util.format(reqtmpl, query)
    ;

    request(req, function(err, res, data) {
      if (err) {
        console.log('ERROR: ' + err);
        return callback(err);
      }
      console.log(data);
      return callback(data);
    });
}

/**
 * Find nearby stores in ascending distance order.
 * @param address a valid address or address fragment
 * @param range a distance in miles
 * @return data object with a zip5, address (formatted), and
 *              stores properties.
 */
function findStoresInRangeAddress(address, range, callback) {
 var query = qs.stringify({ address: address, range: range })
    , reqtmpl = "http://snapfinder.org/v1/stores/nearby?%s"
    , req = util.format(reqtmpl, query)
    ;

    request(req, function(err, res, data) {
      if (err) {
        console.log('ERROR: ' + err);
        return callback(err);
      }
      console.log(data);
      return callback(data);
    });
}



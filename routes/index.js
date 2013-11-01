var config = require('./config.js');
var mongo = require('mongodb');
var snapclient = require('./snapfinder-client')

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server(config.MongoServer, {auto_reconnect: true});
var db = new Db(config.MongoDB, server, {safe: true});

db.open(function(err, client) {
    if (err) {
        console.log('error opening db: ' + err);
    } else {
		db.addListener("error", function(error){
			console.log("db error: " + error);
		});

/*
		client.authenticate(config.MongoDBUser, config.MongoDBPassword, function(err, success) {
			if (success) {
				console.log('authenticated with database');
			}

			if (err) {
				console.log('error authenticating with database');
			}
		});
*/
	}
});


exports.index = function(req, res){
    res.render('index', {title: 'Snapfinder'});

};

exports.stores = function(req, res){

    var zipcode = req.params.zipcode;

    getStoresByZip(zipcode, function(err, result) {
                if (result) {
                        res.render('stores', {
                                title: 'Snapfinder',
                                items: result,
                                metaKeywords: 'Snapfinder stores'});
                        }
                });

};


exports.singlestore = function(req, res){

    var id = req.params.id;

    getStoreById(id, function(err, result) {
                if (result) {
                        res.render('storedetail', {
                                title: 'Snapfinder',
                                items: result,
                                metaKeywords: 'Snapfinder stores'});
                        }
                });

};

function getStoresByZip(zip, callback) {
    
db.collection('store-1377636690512', function (err, collection) {
                
            collection.find({"zip5":zip}).toArray(function (err, stores) {

            if (err) {
                console.error("collection find err:" + err);
            } else {
                callback(null, stores);
            }

        });
    });
}

function getStoreById(id, callback) {
    
     db.collection('store-1377636690512', function (err, collection) {
            collection.findOne({'_id': new BSON.ObjectID(id)}, function (err, item) {
                
                    if (item){
                        callback(null, item);
                    } else {
                        console.log("error:" + err);
                        callback(err);
                    }
                    

        });
    });
    
}

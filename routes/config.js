config = {};

config.env = process.env.NODE_ENV || 'development';

config.rootURL = process.env.rootURL || '/';

config.MongoServer = process.env.MongoServer || 'ds041168.mongolab.com';

config.MongoDB = process.env.MongoDB || 'snapdb';

config.MongoDBUser = process.env.MongoDBUser || 'apiuser';

config.MongoDBPassword = process.env.MongoDBPassword || 'snapdb';

module.exports = config;


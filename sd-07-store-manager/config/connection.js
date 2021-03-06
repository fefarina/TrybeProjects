const mongoClient = require('mongodb').MongoClient;

// const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager'; AVALIADOR
const DB_NAME = 'StoreManager';
const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';

const connection = async () => {
  return mongoClient
	  .connect(MONGO_DB_URL, {
	  	useNewUrlParser: true,
	  	useUnifiedTopology: true,
	  })
	  .then((conn) => conn.db(DB_NAME))
	  .catch((err) => {
	  	console.error(err);
	  	process.exit(1);
	  });
};

module.exports = connection;

import mongoose from 'mongoose';
import Constants from './config/constants';

// use native promises
mongoose.Promise = global.Promise;

// connect to MongoDB;
mongoose.connect(Constants.mongo.uri);
mongoose.connection.on('error', (err) => {
  throw err;
});

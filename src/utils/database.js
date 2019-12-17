const connectToDB = () => {
  const mongoose = require('mongoose');
  const MONGODB_DEV_URL = 'mongodb://localhost:27017';
  const mongoDB = process.env.MONGODB_URI || MONGODB_DEV_URL;

  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);

  mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

export default connectToDB;
const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect('mongodb://saltadmin:episalt@localhost:27017/saltcarts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // eslint-disable-next-line no-console
  console.log('MongoDB connected');
};

module.exports = connectDB;

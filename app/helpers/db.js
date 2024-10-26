const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const connString = process.env.MONGO_CONN_STRING;
      console.log('Trying to connect db ...');
      const conn = await mongoose.connect(connString);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

module.exports =  connectDB;
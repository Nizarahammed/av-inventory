const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      console.log('Trying to connect db ...');
      const conn = await mongoose.connect(``);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

module.exports =  connectDB;
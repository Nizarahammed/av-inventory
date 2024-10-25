const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      console.log('Trying to connect db ...');
      const conn = await mongoose.connect(`mongodb+srv://nizar:nizar3014@cluster0.7p5bk.mongodb.net/av-inventory`);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

module.exports =  connectDB;
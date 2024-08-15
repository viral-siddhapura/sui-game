// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:jyg4!muVwEmG*5b@sass-app.wa2bfb6.mongodb.net/?ssl=true&authSource=admin");
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

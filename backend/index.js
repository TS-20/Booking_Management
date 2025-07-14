const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const connectDB = require('./config/db');
const bookingroute= require('./route/booking.route');
const userRoute = require('./route/user.route');

// Connect to MongoDB
connectDB();
const app = express()
app.use(express.json());
app.use('/bookings', bookingroute);
app.use('/users', userRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const connectDB = require('./config/db');
const userRoute = require('./route/user.route');
//City orute has been imported here.
const cityRoutes =require('./route/cityRoutes');

// Connect to MongoDB
connectDB();
const app = express()
app.use(express.json());
app.use('/user', userRoute);
//  inclusion of city route
app.use('/cities',cityRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

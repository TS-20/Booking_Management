const express = require('express');
const app = express()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const connectDB = require('./config/db');
const userRoute = require('./route/user.route');
//City orute has been imported here.
const cityRoutes =require('./route/cityRoutes');
var cors = require('cors') // npm install cors-> to allow cross-origin request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Connect to MongoDB
connectDB();

app.use('/user', userRoute);
app.use('/cities',cityRoutes);
//connectDB();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

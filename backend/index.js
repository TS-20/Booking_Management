const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const connectDB = require('./config/db');

const userRoute = require('./route/user.route');

// Connect to MongoDB

const app = express()
var cors = require('cors') // npm install cors-> to allow cross-origin request
app.use(cors());
app.use(express.json());
app.use('/user', userRoute);
connectDB();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

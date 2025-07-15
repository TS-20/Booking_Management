const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const connectDB = require('./config/db');
<<<<<<< HEAD
=======

>>>>>>> a25130e42b50b5af1218299299d135851d52bdc3
const userRoute = require('./route/user.route');
//City orute has been imported here.
const cityRoutes =require('./route/cityRoutes');

// Connect to MongoDB
connectDB();
const app = express()
var cors = require('cors') // npm install cors-> to allow cross-origin request
app.use(cors());
app.use(express.json());
app.use('/user', userRoute);
<<<<<<< HEAD
//  inclusion of city route
app.use('/cities',cityRoutes);

=======
connectDB();
>>>>>>> a25130e42b50b5af1218299299d135851d52bdc3
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

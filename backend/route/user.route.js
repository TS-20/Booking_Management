const express = require('express');
const Router = express.Router();
const userController = require('../controller/user.controller');
// Route to create a new user
Router.post('/signup', userController.signUp);
Router.post('/login', userController.login);


module.exports = Router;
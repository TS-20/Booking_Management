const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const signUp = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const { firstName, lastName, email, password, phone } = req.body;
    try{
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        };

        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone
        });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const login = async (req, res) => {
    const {email , password} = req.body;
    try {
        // Check if the user exists in the database
        const user = await User.findOne({ email });
        // If user does not exist OR password does not match, return an error
        if(user === null) {
            return res.status(401).json({ message: 'Invalid credentails' }); // Unauthorized error
        }
        if (!await bcrypt.compare(password, user.password)) { 
            return res.status(401).json({ message: 'Invalid credentails' }); // Unauthorized error
        }

        // Generate a JWT token for the authenticated user
        const token = jwt.sign(
            { userId : user._id , role:user.role ,
                firstName: user.firstName
            },  // Payload (data inside the token)
            process.env.JWT_SECRET,      // Secret key for signing the token
            { expiresIn: "1h" }          // Token expiration time (1 hour)
        );

        // Send the generated token as a JSON response
        res.json({ token, message: 'Login successful', firstName: user.firstName });
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'Login failed'}); // Handle any unexpected errors
    }
}
module.exports= {
    signUp,
    login
}
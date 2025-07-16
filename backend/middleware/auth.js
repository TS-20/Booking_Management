const jwt=require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    // Extract the token from the Authorization header (format: "Bearer <token>")
    const token =req.header('Authorization');// req.header.Authorization?.split(' ')[1];
    // If no token is provided, deny access
    if (!token) {
        return res.status(401).send('Access Denied');
    }

    // Verify the JWT using the secret key
   const decode= jwt.verify(token, process.env.JWT_SECRET);
   console.log('*************',decode)
   const usr=decode.userId;
   if(usr!='')
    next();//controller functions
 else
    return res.status(401).send('Invalid Token')
    // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    //     console.log(process.env.JWT_SECRET)
    //     console.log(err);
    //     console.log(user);
    //     if (err) return res.status(401).send('Invalid Token'); // Token verification failed

    //     // If verification is successful, attach user data to request object
    //     req.user = user;

    //     // Pass control to the next middleware or route handler
    //     next();
    // });
};

const verifyAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({message:'Access Forbidden: Admins only'}); // Forbidden access for non-admin users
    }
    next();
}
module.exports ={verifyAdmin,verifyToken};
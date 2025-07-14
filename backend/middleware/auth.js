require('dotenv').config();
const authenticateJWT = (req, res, next) => {
    // Extract the token from the Authorization header (format: "Bearer <token>")
    const token = req.header('Authorization')?.split(' ')[1];

    // If no token is provided, deny access
    if (!token) {
        return res.status(401).send('Access Denied');
    }

    // Verify the JWT using the secret key
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).send('Invalid Token'); // Token verification failed

        // If verification is successful, attach user data to request object
        req.user = user;

        // Pass control to the next middleware or route handler
        next();
    });
};


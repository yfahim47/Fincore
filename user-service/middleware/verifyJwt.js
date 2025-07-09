const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.status(401).json({ message: 'Token missing' });

    const token =  authHeaders.split(' ')[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};
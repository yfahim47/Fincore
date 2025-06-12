const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const passport = require('passport');
const jwt = require('jwtwebtoken')

router.post('/register', authController.register);

router.get('/google', 
    passport.authenticate('google', {scope:['profile', 'email']}));

router.get('google/callback',
    passport.authenticate('google', {failureRedirect:'/login-failure', session:false}),
    (req, res) => {
        const token = jwt.sign(
            { id: req.user.id }, 
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
    }
)
module.exports = router;
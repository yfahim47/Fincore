const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const passport = require('passport');
const jwt = require('jsonwebtoken')

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/google', 
    passport.authenticate('google', {scope:['profile', 'email']}));

router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Redirect to frontend or return token
    res.json({ token, message: 'Google Login Successful' });
  }
);
module.exports = router;
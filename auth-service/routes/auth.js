const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');

router.post('/register',
    [
        body('username').notEmpty().withMessage('Username is reqired'),
        body('email').notEmpty().withMessage('Invalid Email'),
        body('password')
            .isLength({min:6})
            .withMessage('Password must be 6 characters')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors:errors.array()[0].msg})
        }
        next();
    },
     authController.register);

router.post('/login',
    [
        body('username').notEmpty().withMessage('Usrename is required'),
        body('password').notEmpty().withMessage('Password is required')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors:errors.array()[0].msg});
        }
        next();
    },
    authController.login);

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
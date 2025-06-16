const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyTokenMiddleware');
const checkRole = require('../middleware/roleCheckMiddleware');

router.get('/user-home', verifyToken, (req, res) => {
  res.json({ message: `Welcome User ${JSON.stringify(req.user)}` })});

router.get('/admin-dashboard', verifyToken, checkRole(), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.id}` })});

module.exports = router
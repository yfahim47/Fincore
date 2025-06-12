require('dotenv').config();
const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const User = require('./models/Users')
const sequelize = require('./config/db');
const { session } = require('passport');
const passport = require('passport');

app.use(express.json());

app.use(session({secret: 'fincore', resave: false, saveUninitialized: true }));
app.user(passport.initialize());
app.use(passport.session());

//Routes
app.use('/api/auth', authRoute);

sequelize.sync({alter: true})
  .then(() => {
    console.log('✅ Models synced.');
  })
  .catch(err => {
    console.error('Sync failed:', err);
  });

app.listen(3000, ()=>{
    console.log(`Auth Service is running on port 3000}`);
})
const express = require('express');
const app = express();
const authRoute = require('./routes/auth');

app.use(express.json());

//Routes
app.use('api/auth', authRoute);

//Health Check
app.use('/', (res, req)=> {
    res.send('Auth Service is Running');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Auth Service is running on port ${PORT}`);
})
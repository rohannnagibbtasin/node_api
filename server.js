const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO,{},()=>{
    console.log('connected to db');
});
app.use('/api/auth',authRoute);

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})
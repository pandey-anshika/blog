const express = require('express');
const Joi = require('joi');
const { default: mongoose } = require('mongoose');
const app = express();
const blog = require('./routes/blog');
const {mw} = require('./middleware/mw');


mongoose.connect('mongodb://127.0.0.1:27017/newwprod')
.then((res)=> console.log('connected to mongodb::'))
.catch(err=> console.log('could not connect to mongodb' , err));
  
app.use(express.json());
app.use('/api/blog-stats',blog);
app.use('/api/blog-search',blog);
app.use(mw);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log('listening...'); });
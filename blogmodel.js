const Joi = require('joi');
const mongoose = require('mongoose');

const Blogs= mongoose.model('Blogs', new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    },
    shortDes: {
        type: String,
        minlength: 5,
        maxlength: 30
    }, 
    desc: {
        type: String,
        required: true
    },
}));


function validateUser(blog){
    const schema = {
        title: Joi.string().min(3).max(20).required(),
        shortDes: Joi.string().min(5).max(30),
        desc: Joi.string(),
        createdAt: Joi.number(),
    };
    return Joi.valid(blog, schema);

}
exports.Blogs = Blogs;
exports.validate = validateUser;

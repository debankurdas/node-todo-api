var {mongoose} = require('../db/mongoose');
const validator = require('validator');

var User = mongoose.model('user',
{
    email:
    {
       type: String,
       required: true,
       minlength: 2,
       trim: true,
       unique: true,
       validate:{
        validator: validator.isEmail,
        message:'{Value}is not a valid email'
       } 
    },
    password:
    {
        type: String,
        required: true,
        minlength: 6
    },
    tokens:[{
        auth:
        {
            type: String,
            required: true
        },
        tokem:{
           type: String,
           required: true 
        }
    }]
});

module.exports = {User};
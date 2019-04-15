var {mongoose} = require('../db/mongoose');

var User = mongoose.model('user',
{
    email:
    {
       type: String,
       required: true,
       minlength: 2,
       trim: true
    }
});

module.exports = {User};
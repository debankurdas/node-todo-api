var {mongoose} = require('../db/mongoose');

var todo = mongoose.model('todo',
{
    text: 
    {
       type: String ,
       require: true,
       minlength: 1 ,
       trim: true
    },
    complete: 
    {
       type: Boolean,
       default: false
    },
    completeAt:
    {
       type: Number,
       default: null
    }
});

module.exports = {todo};
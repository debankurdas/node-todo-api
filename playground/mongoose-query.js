const {mongoose} = require('../server/db/mongoose');
const {todo} = require('../server/models/todos');
const {user} = require('../server/models/user');
const {ObjectId} = require('mongodb');

var id = '5caa694f9d75300007b396a6';
if(!ObjectId.isValid(id))
{
    console.log("id is not valid");
}

todo.find({
    _id:id
}).then((res) =>
{
    console.log("Todo",res);
})

todo.findOne({
    _id:id
}).then((res) =>
{
    console.log("Todo",res);
})
todo.findById(id).then((todo) =>
{
    if(!todo)
    {
       return console.log('Id is not found');
    }

    console.log(JSON.stringify(todo, undefined,2))
}).catch((e) =>
{
    console.log("error",e);
})
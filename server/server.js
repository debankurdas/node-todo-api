 var {mongoose} = require('./db/mongoose');
 var {todo } = require('./models/todos');
 var {User} = require('./models/user');
 const express = require('express');
  var bodyParser = require('body-parser');
  const _ = require('lodash');

/*

 var newtodo = new todo(
     {
         text: "ami vat khai"

     }
 );
 newtodo.save().then((doc) =>
 {
    console.log(doc);
 });
 var other = new todo({
     text: "ami vat aabr khabo",
     complete: true,
     completeAt: 12
 });
 other.save().then((result) =>
 {
   console.log(result,undefined,2);   
 }, (err) =>
 {
     console.log('not possible');
 }) 


 var anotherUser = new User(
 {
     email:'debankurdas2013.dd@gmail.com'
   
 })

 anotherUser.save().then((doc) =>
 {
     console.log('succesfull',doc)
 }, (err) =>
 {
     console.log(err);
 }) */

 var app = express();
 app.use(bodyParser.json());

 app.post('/todos', (req,res) =>
 {
     var Todo = new todo(
         {
             text: req.body.text
         }
     ) ;
     Todo.save().then((result) =>
     {
        res.send(result)
     }, (err) =>
     {
         res.status(400).send(err);
     });
 });

 app.post('/users',(req,res) =>{
     var body = _.pick(req.body,['email','password'])
     var user = new User(body);

     user.save().then((user) =>
     {
        res.send(user)
     }).catch((e) =>
     {
         res.status(400).send(e);
     })
 })


 app.listen(3000, () =>
 {
     console.log('port is started')
 });
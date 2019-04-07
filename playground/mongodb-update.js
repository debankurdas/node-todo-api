 const {MongoClient,ObjectId} = require('mongodb');
 MongoClient.connect('mongodb://localhost:27017/Todoapp',(err, db) =>
 {
     if(err)
     {
         return console.log('mongodb is not connected:')
     }
     console.log('mongodb is connected')

     db.collection('newname').findOneAndUpdate({
         _id : new ObjectId("5ca8cffb506c532eb0edd9e7")
     }, {
        $set:
        {
            name:"JOy"
        },
        $inc:
        {
            age: 1
        }

     },{
        returnOrginal: false
     }).then((result) =>
     {
         console.log(result);

     });

    
 //    db.close();

 });
 const mongoClient = require('mongodb').MongoClient;
 mongoClient.connect('mongodb://localhost:27017/Todoapp',(err, db) =>
 {
     if(err)
     {
         return console.log('mongodb is not connected:')
     }
     console.log('mongodb is connected')

    /* db.collection('todo').insertOne({
         text: 'Amar new dataconnection',
         complete: true
     },(err,result) =>
     {
         if(err)
         {
             return console.log("sending error",err);
         }
         console.log(JSON.stringify(result.ops,undefined,2))

     }); */
     db.collection('newname').insertOne({
        name: 'Dbankur Das',
        age: 21,
        location: 'horah'

     },(err,result) =>
     {
         if(err)
         {
             return console.log('error in statement',err)
         }
         console.log(JSON.stringify(result.ops));

     })

     db.close();

 });
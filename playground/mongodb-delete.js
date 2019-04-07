const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/Todoapp',(err, db) =>
{
    if(err)
    {
        return console.log('mongodb is not connected:')
    }
    console.log('mongodb is connected')
    // for deleting many option
   db.collection('todo').deleteMany({text : "Amar new dataconnection"}).then((result) =>
    {
        console.log(result);
    }); 
    // for deleting one property
    db.collection('todo').deleteOne({text: "Ami valo chele"}).then((result)=>
    {
        console.log(result);
    });
    //for findOneAndDelete
    db.collection('todo').findOneAndDelete({text: "Ami valo chele"}).then((result)=>
    {
        console.log(result)
    });
  
    db.close();

});
const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/Todoapp',(err, db) =>
{
    if(err)
    {
        return console.log('mongodb is not connected:')
    }
    console.log('mongodb is connected')
    //PROPERTY GULO DEKHA JABE
    /* db.collection('newname').find({name: 'Debankur Das'}).toArray().then((docs) =>
    {
        console.log('todo');
        console.log(JSON.stringify(docs,undefined,2));

    }); */
    // property koTA ACHE JANA JABE
     db.collection('newname').find().count().then((count) =>
    {
        console.log(`property: ${count}`);
     

    });
    
  
    db.close();

});
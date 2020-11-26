var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/fruits';

var client = new MongoClient(url);

async function run(){

    try{
        await client.connect();
        const db = client.db("TestNodeMongo");
        const collection = db.collection("movies");
    
        collection.updateOne(

            {"name" : "Rush"},
            {"$set": {"loc": "Abc"}}
        ).then(res => {
            console.log(res);
        })
    
    }

    finally{
        await client.close();
    }
}

run().catch(err => {
    console.log(err)
});
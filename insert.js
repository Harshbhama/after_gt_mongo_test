var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/fruits';

var client = new MongoClient(url);

async function run(){

    try{
        await client.connect();
        const db = client.db("TestNodeMongo");
        const collection = db.collection("movies");
    
        const doc = {name: "Dhoom", loc: "Ind"}
        const doc2 = {name: "Rush", loc: "Aus"}
    
        const result = collection.insertMany([doc, doc2]);
        console.log(result);
        result.then(res => {
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
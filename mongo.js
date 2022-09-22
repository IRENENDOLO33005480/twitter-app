const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const connectionURL = ("mongodb+srv://irene:lakehub@cluster0.vgpsqw3.mongodb.net/task-manager-api")
const databaseName = 'task-manager-api'
MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('unable to connect to database');
    }
    const db = client.db(databaseName);
    db.collection("users").insertOne(
        {
            name: "andrew",
            age: 27,
        },
        (error, result) => {
            if (error) {
                return console.log("unable to create user");
            }
            console.log(result);
        }
    );
});










// ALL OF THIS IS BOILERPLATE
// except the database name --- spotifyExampleDB

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/spotifyExampleDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})
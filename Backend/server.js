const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

var corsOptions = {
    origin : "http://localhost:3000/"
}

app.use(cors(corsOptions));
app.use(express.json());

const db = require("./models");

db.mongoose.connect(db.url,{
    })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(err => {
        console.log("Cannot connect", err);
        process.exit();
    });

app.get('/', (req,res) => {
    res.json({"message": "Hello Crud Node Express"});
});

app.listen(3000, () => {
    console.log("Hello");
})
// read in data
// connect to database
const express = require("express")
const mongoose = require("mongoose")
const request = require('request');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fetal_database',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// creation of server
// app.use(Router);

const PORT = 3000;

app.get('/home', function(req, res) {
    request('http://127.0.0.1:5000/flask', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
      });      
});

app.listen(PORT, function (){ 
    console.log('Listening on Port 3000');
});  

// state
// race/hispanic_origin
// age
// delivery place
// delivery method
// fetal death count


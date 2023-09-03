var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb+srv://@cluster0.bshhvdo.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function checkDB(error) {
    if (error) {
        console.log("errorr")
    }
    else {
        console.log("DB Connected!")
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
    if (error) {
        console.log("Error starting server!")
    }
    else {
        console.log("Server Started!")
    }
});

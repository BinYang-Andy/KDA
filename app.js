var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const mongoose = require('mongoose');




mongoose.connect('mongodb+srv://yb511865789:<password>@cluster0.yom9c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var db = mongoose.connection;

db.on('error',console.log.bind(console, "connection error"));
db.once('open',function(callback){
    console.log("connection succeeded");
})


var app = express()

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

const notesSchema = {
    email: String,
    password:String,
    full_name:String
}
const Note = mongoose.model("Note", notesSchema);



app.get("/",function(req, res){
    res.sendFile(__dirname + "../public/index.html");
});



app.post('/sign_up', function(req,res){
    let newNote = new Note({
        email : req.body.email,
        password : req.body.password,
        full_name : req.body.full_name
    });
    newNote.save();
    res.redirect('/');  
})

app.listen(3001,function(){
    console.log("Server is running on Port 3001");
})


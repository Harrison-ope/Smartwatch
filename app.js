var express= require('express');
var server=express();
var path=require("path");

server.get('/', function(req,res){
var message = 'welcome to my website';
    res.sendFile(path.join(__dirname, "public", "index.html"));
//res.render('index');

})

server.get('/about', function(req,res){
var message = 'welcome to my website';
    res.sendFile(path.join(__dirname, "public", "about.html"));


})

server.get('/gallery', function(req,res){
var message = 'welcome to my website';
    res.sendFile(path.join(__dirname, "public", "gallery.html"));

    
})

server.get('/partners', function(req,res){
var message = 'welcome to my website';
    res.sendFile(path.join(__dirname, "public", "partners.html"));

    
})
server.get('/contacts', function(req,res){
var message = 'welcome to my website';
    res.sendFile(path.join(__dirname, "public", "contacts.html"));

    
})


server.set("view engine", "ejs");




server.listen(3000,function(){

console.log("server is running on port 3000");

});
console.log("app working");
//Requirements
var express = require("express");
var app = express();

//set view engine
app.use(express.static("public"));
app.set("view engine", "ejs");

//Routes
app.get("/home", function(req, res){
  res.render("home");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/samples", function(req, res){
  res.render("samples");
});














app.listen(4000, function() {
  console.log('app is running on port 4000');
});

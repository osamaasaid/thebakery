console.log("app working");
var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home.ejs");
})














app.listen(4000, function() {
  console.log('app is running on port 4000');
});

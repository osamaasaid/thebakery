console.log("app working");
//Requirements
const express = require("express");
const app = express();

//set view engine
app.use(express.static("public"));
app.set("view engine", "ejs");

//Routes
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/samples", (req, res) => {
  res.render("samples");
});














app.listen(4000, function() {
  console.log('app is running on port 4000');
});

var express = require('express');


var app = express();
var PORT = process.env.PORT || 3000;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/php", express.static("public/php"));


app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/portfolio", function(req, res) {
  res.sendFile(process.cwd() + "/views/portfolio.html");
});







app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
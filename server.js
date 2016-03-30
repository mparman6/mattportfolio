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

// Mail Code

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "mparman6",
        pass: "andy0119"
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
    res.sendfile('index.html');
});
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});





app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
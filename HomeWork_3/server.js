var express = require("express");
var app = express();
var fs = require("fs");

app.use(express.static(__dirname));

app.post('/create',function(req,res){
    console.log(req.body);
    
    fs.writeFile("data.json", req.body, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
        }
    });
    res.send('Vse zaebis');
  });
  app.listen(3000,function(){
    console.log("Started on PORT 3000");
  })
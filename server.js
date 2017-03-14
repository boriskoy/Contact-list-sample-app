var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist'])

app.get('/contactlist', function (req, res){
	console.log("i received a request");
	db.contactlist.find(function (err, docs) {
    res.json(docs);
  });
});

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("app at port 3000");
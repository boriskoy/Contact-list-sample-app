var express = require('express');
var app = express();

app.get('/contactlist', function(req, res){
	console.log("i received a request");
	var contactList = [
    	{
    		name: "shoaib",
    		email: "shoaib@gmail.com",
    		number: "111 111 1111"
    	},
    	{
    		name: "jojo",
    		email: "jojo@gmail.com",
    		number: "222 222 2222"
    	},
    	{
    		name: "don",
    		email: "don@gmail.com",
    		number: "333 333 3333"
    	}
    ];
    res.json(contactList);
});

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("app at port 3000");
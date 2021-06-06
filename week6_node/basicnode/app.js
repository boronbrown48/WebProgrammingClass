// var http = require('http'); 
// http.createServer(function (request, response) {
//     response.writeHead(200,
//      {
//          'Content-Type': 'text/plain'
//     });
//     response.end('Hello World\n');
// }).listen(8800);
// console.log('Server running at http://127.0.0.1:8800/');

//console.log(__filename)
//console.log(__dirname)

// function helloworld(){
//     console.log("Hello World!!")
// }
// var t = setTimeout(helloworld,3000) //3 sec
//clearTimeout(t) 

// var i=0
// var counter = setInterval(counter,2000)
// function counter(){
//     i++
//     console.log(i)
// }

// setTimeout(function(){
//     clearInterval(counter);
// },10000)

// var calculate = require('./calculate')
// // console.log(calculate.circleArea(50))

// // console.log(calculate.pi)
// // console.log(calculate.rectArea(4,5))

// calculate.data.deleteData()
// calculate.data.updateData()

// var util = require('util');
// var fs = require('fs');

// function readFile(str, callback){
//     var lines =[];
//     fs.readFile(str, function (err, data) {
//         if (err) throw err; 
//         lines.push(data); 
//         console.log(data.toString());
//     });
//    callback(lines);
// }

// var a, b;
// readFile('./20.txt', function(data){
//     a= data;
// }); 

// readFile('./10.txt',function(data){
//     b= data;
// }); 
// util.log("a -- "+a);
// util.log("b -- " +b);


// var assert = require('assert');
// function add (a, b) { 
//     return 1 + a + b;
// }
// var expected = add(1,2);
// assert( expected === 3, 'one plus two is three');


// var crypto=require('crypto');var fs=require('fs');
// var shasum = crypto.createHash('sha1');
// var s = fs.ReadStream('10.txt');
// s.on('data',function(d) {
//   shasum.update(d);
// });
// s.on('end',function() {  
//     var d = shasum.digest('hex');
//   console.log(d+' -- 10.txt');
// });




// http.createServer(function(rew,res){
//   res.writeHead(200,{'Content-Type':'text/html'})
// var myStream = fs.createReadStream(__dirname+'/'+'index.html','utf8')
// myStream.pipe(res)
// }).listen(8081,'127.0.0.1')


// var myUser = {
//     "name": "Reese",
//     "job": "Coordinator",
//     "age": "30"
// }

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'application/json'})
//     res.end(JSON.stringify(myUser))
// }).listen(8081, '127.0.0.1')
var http=require('http')
var fs=require('fs')
var express=require('express')

var crypto = require('crypto')
var routing=express()
var fs=require('fs')
var users = fs.readFileSync('./users.json','utf8')
var data = JSON.parse(users);

routing.get('/profile/:id',function(req,res){
        res.send("<h1>id : "+data.users[req.params.id].id+"</br>username : "+data.users[req.params.id].username+"</br>password : "+crypto.createHash('sha1').update(data.users[req.params.id].password).digest('hex')+"</br>full name : "+data.users[req.params.id].fullname+" </h1>")       
})
routing.listen(8081)


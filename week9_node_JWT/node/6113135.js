var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken')
const app = express();
app.use(bodyParser.json());
var token
var secret_key="adminKey"
const bob = { username : "bob" , password : "bob"}
const admin = { username : "admin" , password : "admin"}


app.get('/api', function api(req, res) {
    res.json({
      description: 'My API. Please authenticate!'
    });
  })
  
  app.get('/api/protected/', ensureToken , (req, res) => {
      if(secret_key === "adminKey" || secret_key ==="bobKey"){
        jwt.verify(req.token, secret_key , function(err, data) {
            if (err) {
              err.console.error();
            } else {
              res.json({
                description: 'Protected information. Congrats!',
                data: data
              });
            }
          });
      }else{
        res.json({
            description: 'Invalid User',
          });
      }
  })
  
  app.get('/api/admin', ensureToken, (req, res) => {
    if(secret_key === "adminKey"){
      jwt.verify(req.token, "adminKey" , function(err, data) {
          if (err) {
            res.sendStatus(403);
          } else {
            res.json({
              description: 'Admin Page. Congrats!',
              data: data
            });
          }
        });
    }else{
        res.json({
            description: 'Invalid User',
            data: data
          });
    }
})

  app.post('s', (req, res) => {
    if(req.body.username == "admin" && req.body.password == "admin"){
      secret_key = "adminKey"
      token = jwt.sign(admin, secret_key);
      res.json({
        message: 'Authenticated! Use this token in the "Authorization" header',
        token: token
      });
    }else if(req.body.username == "bob" && req.body.password == "bob"){
       secret_key = "bobKey"
       token = jwt.sign(bob, secret_key);
       res.json({
        message: 'Authenticated! Use this token in the "Authorization" header',
        token: token
      });
    }else{
      res.json({
        description: 'Invalid User',
        data: req.body.username
      });
    }
  })
  
  app.listen(5000, function () {
    console.log('App listening on port 3000!');
  })
  
  function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    } 
  }

    function ensureToken_2(req, res, next) {
      const bearerHeader = req.token;
      if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
      } else {
        res.sendStatus(403);
      }
  }

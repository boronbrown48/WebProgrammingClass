var express = require('express')
app = express()
port = process.env.PORT || 5000
mongoose = require('mongoose')
QObject = require('./api/models/objectModel.js')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Labquiz', function(error){
    if(error) throw error
    console.log('Successfully connected');
})

const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/objectRoutes.js')

routes(app)

app.listen(port)

console.log('Object List started on : '+ port)
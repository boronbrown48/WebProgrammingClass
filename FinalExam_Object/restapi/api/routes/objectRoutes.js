'use strict'
module.exports = function(app){
    var objectList = require('../controllers/objectController.js')

    //http://localhost:3000/objects
    app.route('/objects')
        .get(objectList.listAllObjects)

        
    //http://localhost:3000/objects/1234567890
    app.route('/objects/:objID')
        .get(objectList.readAObject)


    //http://localhost:3000/calculate/10/10/10
    //http://localhost:3000/calculate/height/width/depth
    app.route('/calculate/:type/:height/:width/:depth')
        .get(objectList.calAObject)
}
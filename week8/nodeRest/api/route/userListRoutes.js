'use strict'

module.exports = function(app){
    var userList = require('../controllers/model/userListController')
    app.route('/users')
    .get(userList.ListAllUsers)
    .post(userList.createAUser)
    
    app.route('/user/:userID')
    .get(userList.readAUser)
    .delete(userList.deleteAUser)
    .post(userList.updateAUser)
}
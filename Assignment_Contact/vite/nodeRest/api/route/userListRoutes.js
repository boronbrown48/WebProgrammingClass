'use strict'

module.exports = function(app){
    var userList = require('../controllers/model/userListController')
    
    app.route('/contacts').get(userList.ListAllUsers)
    app.route('/contacts/:userID').get(userList.readAUser)
    app.route('/contacts/add').post(userList.createAUser)
    app.route('/contacts/update/:userID').post(userList.updateAUser)
    app.route('/contacts/delete/:userID').delete(userList.deleteAUser)
}


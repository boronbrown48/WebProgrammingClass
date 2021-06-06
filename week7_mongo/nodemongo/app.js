var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err) throw err
    var dbo = db.db("MyProducts")
    // var obj = [{name : "Cake", price : "50"},
    //             {name : "Donut", price : "5"}
    //         ]
    // var obj = [ 
    //     {name : "Coffee mug", price : "45"},
    //     { name: "Book", price: 10 },
    //     { name: "Pencil", price: 5 },
    //     { name: "Calculator", price: 40 },
    //     { name: "Notebook", price: 15 },
    //     { name: "T-Shirt", price: 20 },
    //     { name: "Jacket", price: 20 }
    //   ]
    //var query = {name: /^P/} //starts with p
    var keySort={price : 1}//1 = ascending -1=descending
    var query = {price : {$gt : 15}}
    //var query = {name : "Cofee mug"}
    //var newName = {$set: {name:"Tea mug", price : 48}} 
    //var query = {name: /^T/}
    //var newName = {$set: {name:"Cofee"}} 
    dbo.collection("products").find(query).sort(keySort).toArray(function(err, result){
        if(err) throw err
        //console.log("Inserted " +result.insertedCount+ " documents")
        console.log(result)
    })
    db.close()
})
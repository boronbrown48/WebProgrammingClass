var PI = Math.PI
exports.circleArea = function(r){
    return PI*r*r
} // sent func

exports.pi = PI //sent var

exports.rectArea = function(L,M){
    return L*M
}
//exports.rectArea = rectArea //another way

var obj = {}
obj.updateData = function(){
    console.log("Update data")
}
obj.deleteData = function(){
    console.log("Delete data")
}


exports.data = obj
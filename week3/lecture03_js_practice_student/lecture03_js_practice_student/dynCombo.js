// dynValue.js
//   Illustrates dynamic values
     
var helpers = ["Bob 1234 Bangkok", "Mary 5678 Phuket","Susan 9012 Nakorn Prathom"];
function messages(v){
    switch(v){
        case '0':document.getElementById("adviceBox").value = helpers[0]; break;
        case '1':document.getElementById("adviceBox").value = helpers[1];break;
        case '2':document.getElementById("adviceBox").value = helpers[2];break;
    }   
}

// *********************************************************** 
// The event handler function to change the value of the 
//  textarea
//Add your code here
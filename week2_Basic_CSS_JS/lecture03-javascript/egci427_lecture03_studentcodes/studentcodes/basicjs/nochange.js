// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here
var fench = document.getElementById("french").value;
var cof = document.getElementById("coffee").value;
var tea = document.getElementById("tea").value;

// Compute the cost
  var total = (3.49*fench)+(2.5*cof)+(1.5*tea)
  document.getElementById("cost").value = total
  
}  //* end of computeCost

// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation

// Get the current date

var today = new Date();

// Fetch the various parts of the date
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var day = today.getDay();
var month = today.getMonth();
var time = today.getFullYear();
if (today.getHours() > 12) unit = "PM"
else unit = "AM"
var dateString = today.getHours() % 12 + ":" + today.getMinutes() + "." + today.getSeconds() + " " + unit


//Write your own code here 


// Display the parts


document.write(
      dayList[day] + " " + today.getDate() + " " + monthList[month] + ", " + today.getFullYear() + " " + dateString
);
//Write your own code here 

//want Friday 29 January, 2021 3.34.00 PM
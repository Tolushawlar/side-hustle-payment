// creating constants to hold static values
const basePay = 1000;
const extraHourPay = 200;
var extraHours = 0;

// getting the inputs of the username, workhours and confirmation if there is an extrahour work
let name = prompt("Enter Your Name");
let workHours = parseInt(prompt("How many Hours of work this month"));
let extraHourConfirmation = prompt("Did You work Extra Hours");
extraHourConfirmation = extraHourConfirmation.toUpperCase();

// checking if the inputed workhour is a number
if(isNaN(workHours)){
    alert("Your WorkHours Input isnt a Number!!");
}

// confirming if there is an extra hour work
if(extraHourConfirmation === "YES"){
    extraHours = parseInt(prompt("How Many Hours Of Overtime"));
}

// function to calculate the salary
function cal(workingHours, extraworkingHours){
    var baseSalary = workingHours * basePay;
    var extraPay = extraHourPay * extraworkingHours;
    var netPay = baseSalary + extraPay
    // writing the results into the html document
    document.getElementById("namespace").innerHTML = name;
    document.getElementById("hourWork").innerHTML = workingHours;
    document.getElementById("baseSalary").innerHTML = "#" + baseSalary;
    document.getElementById("extrahr").innerHTML = extraworkingHours;
    document.getElementById("extraPay").innerHTML = "#" + extraPay;
    document.getElementById("netpay").innerHTML = "#" + netPay;
}

// calling the function with the inputed values from the user.
cal(workHours, extraHours);




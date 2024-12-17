//This is a main function that runs when the button on the webpage is pressed
function findSum(){
    //these variables takes the input from the input fields first and secondnumber
    //Then it runs it throu the fuction checkIfNumber take checks if there is a valid input
    //It will return false if it is not
    let firstnumber = checkIfNumber(document.getElementById("firstnumber").value);
    let secondnumber = checkIfNumber(document.getElementById("secondnumber").value);

    //This if checks if first and secondnumber is not false, if invalid input then they will be false
    if(firstnumber != false && secondnumber != false){
        //Calls the functions that prints out results from the different calculations
        printSum(firstnumber,secondnumber);
        printTimes(firstnumber,secondnumber);
        printInBetween(firstnumber,secondnumber);
        printTimesTwo(calcSum(firstnumber,secondnumber));
    }
    //If any of the inputs return as false then it will alert the user
    else{
        alert("Please enter a number in both fields");
    }
}

//A function that calculates the sum of two numbers
function calcSum(firstnumber,secondnumber){
    let sum = firstnumber+secondnumber;
    return sum;
}

//A functions that takes a number and times it with 2
function timestwo(number){
    let timesTwo = number * 2;
    return timesTwo;
}

//A function that calculates the numbers times with eachother
function calcTimes(firstnumber, secondnumber){
    sum = firstnumber * secondnumber;
    return sum;
}

//A function that divides the firstnumber with the second(Not currently in use)
function calcDivide(firstnumber, secondnumber){
    sum = firstnumber/secondnumber;
    return sum;
}

//A function that adds the all the number inbetween the two numbers, it will check both ways
function allInbetween(firstnumber, secondnumber){
    let total = 0;
    if(firstnumber<secondnumber){
        for(i = firstnumber; i<=secondnumber; i++){
            total += i;
        }
        return "The sum of numbers between the first number and second number is: " + total;
    }
    else{
        for(i = secondnumber; i<=firstnumber; i++){
            total += i;
        }
        return "The sum of numbers between the second number and first number is: " + total;
    }
    
}

//A function to check if input can be converted to an int or a float, 
// if it can it will return the input string as a int or float, if not it will return false
function checkIfNumber(str){
    if(str.match(/^-?\d+$/)){
        //valid integer (positive or negative)
        const num = parseInt(str, 10);
        return num;
      }else if(str.match(/^-?\d*\.\d+$/)){
        //valid float
        const num = parseFloat(str);
        return num;
      }else{
        return false;
      }
}

//A function to print the result from calcSum function to a paragraph element in HTML with id of result
function printSum(firstnumber, secondnumber){
    let sum = calcSum(firstnumber,secondnumber);
    document.getElementById("result").innerHTML = "Sum = " + sum;
}

//A function to print the result from calcTimes function to a paragraph in HTML with id of timesresult
function printTimes(firstnumber, secondnumber){
    let times = calcTimes(firstnumber, secondnumber);
    document.getElementById("timesresult").innerHTML = "Sum times = " + times;
}

//A function to print the result from allInbetween function to a paragraph in HTML with id of inbetween
function printInBetween(firstnumber, secondnumber){
    let inBetween = allInbetween(firstnumber, secondnumber);
    document.getElementById("inbetween").innerHTML = inBetween;
}

//A function to print the result from timestwo function to a paragraph in HTML with the id of timestwo
function printTimesTwo(sum){
    let timesTwo = timestwo(sum);
    document.getElementById("timestwo").innerHTML = "The sum of the numbers times two is: " + timesTwo;
}
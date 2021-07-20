document.write("10" + 5);

function NotANumber() {
    document.getElementById("NotANumber").innerHTML = 0/0;
}

function HelloWorld() {
    document.getElementById("HelloWorld").innerHTML = isNaN('HelloWorld');
}

function Number007() {
    document.getElementById("Number007").innerHTML = isNaN('007'); //False, 
}

function NumInfinity() {
    document.getElementById("Infinity").innerHTML = 2E310; //positive infinity number.
}

function NumNegInfinity() {
    document.getElementById("NegInfinity").innerHTML = -3E310; //negative infinity number.
}

function TenGreaterTwo() {
    document.getElementById("TenGreaterTwo").innerHTML = 10 > 2; //value comparison: True.
}

function TwoGreaterTen() {
    document.getElementById("TwoGreaterTen").innerHTML = 2 > 10; //value comparison: False.
}

function ConsoleLog() {
    document.getElementById("ConsoleLog").innerHTML = console.log(2+2); //log value: 4.
}

function ConsoleTrueFalse() {
    document.getElementById("ConsoleTrueFalse").innerHTML = console.log(2 > 10); //log value: False.
}

function ComparisonTrue() {
    document.getElementById("ComparisonTrue").innerHTML = 10 == 10; //value comparison: True.
}

function ComparisonFalse() {
    document.getElementById("ComparisonFalse").innerHTML = 3 == 11; //value comparison: False.
}

function CompTripTrue() {
    stringOne = "Hello";
    stringTwo = "Hello";
    document.getElementById("CompTripTrue").innerHTML = stringOne === stringTwo; //same data type and value comparison: True.
}

function CompTripFalseAll() {
    numberOne = 1;
    document.getElementById("CompTripFalseAll").innerHTML = stringOne === numberOne; //different data type and value comparison: False.
}

function CompTripFalseData() {
    numberOneInString = "1";
    document.getElementById("CompTripFalseData").innerHTML = numberOneInString === numberOne; //different data type and same value comparison: False.
}

function CompTripFalseValue() {
    numberThree = 3;
    document.getElementById("CompTripFalseValue").innerHTML = numberThree === numberOne; //same data type and different value comparison: False.
}

function AndOpTrue() {
    document.getElementById("AndOpTrue").innerHTML = 5 > 2 && 10 > 4; //5 > 2? True. 10 > 4? True. AND operator: True.
}

function AndOpFalse() {
    document.getElementById("AndOpFalse").innerHTML = 2 > 5 && 10 > 4; //2 > 5? False. 10 > 4? True. AND operator: False.
}

function NotOpTrue() {
    document.getElementById("NotOpTrue").innerHTML = !(20 > 10); //20 is NOT greater than 10: False.
}

function NotOpFalse() {
    document.getElementById("NotOpFalse").innerHTML = !(10 > 20); //10 is NOT greater than 20: True.
}

/*
function () {
    document.getElementById("").innerHTML = 
}

*/

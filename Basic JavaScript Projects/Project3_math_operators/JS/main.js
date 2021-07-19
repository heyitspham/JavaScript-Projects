function mathMultiplication(num1, num2) {
    var Multiply = num1 * num2;
    document.getElementById("mathMultiply").innerHTML = Multiply;
}

function mathSubtraction() {
    var Subtraction = 5 - 2;
    document.getElementById("mathSubtract").innerHTML = "5 - 2 = " + Subtraction;
}

function mathAddition() {
    var Addition = 5 + 7;
    document.getElementById("mathAdd").innerHTML = "5 + 7 = " + Addition;
}

function mathModulus() {
    var Modulus = 10 % 3;
    document.getElementById("mathModulo").innerHTML = "10 % 3 = " + Modulus; //Outputs 1 as the modulus of 10 divided by 3.
}

function mathIncrement() {
    var Increment = 10;
    Increment++;
    document.getElementById("mathIncrement").innerHTML = "10++ = " + Increment; //Increments 10 by 1.
}

function mathDecrement() {
    var Decrement = 10;
    document.getElementById("mathDecrement").innerHTML = "10-- = " + Decrement; //Decrements 10 by 1.
}

function mathRandom() {
    var Random = Math.random()*100; //A random number is chosen between 0 and 100, and then assigned to the variable 'Random'.
    document.getElementById("mathRand").innerHTML = "Random # is " + Random; //outputs 
}

function piFunction () {
    document.getElementById("pi").innerHTML = Math.PI; //Math.PI outputs the value of pi to 15 decemal places.
}

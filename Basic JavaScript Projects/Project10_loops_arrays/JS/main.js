// While Loop, counting to ten.
function countingToTen() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("countingToTen").innerHTML = Digit;
}

// JS string length property
function jsStrLengthProp() {
    var str = "Hello World!";
    document.getElementById("jsStrLengthProp").innerHTML = str.length;
}

// For loop, printing array of instruments.
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function listOfInstruments() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
        document.getElementById("listOfInstruments").innerHTML = content;
    }
}

// Arrays and Objects, with cat pictures.
function catPics() {
    var catPicture = ["sleeping", "playing", "eating", "purring"];
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + catPicture[2] + ".";
}

// CONST keyword
function constantFunction() {
    const musicalInstrument = {type: "guitar", brand: "Fender", color: "black"};
    musicalInstrument.color = "blue";
    musicalInstrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " + musicalInstrument.type + " was " + musicalInstrument.price + " .";
}

// LET keyword
function letKeyword() {
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}

// no LET keyword
function noLetKeyword() {
    var X = 82;
    document.write(X);
    {
        var X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}

// RETURN statement
function returnStatement() {
    return Math.PI;
}
function callFunction() {
    document.getElementById("returnStatement").innerHTML = returnStatement();
}

// car OBJECTS
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2012 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
function carObject() {
    document.getElementById("carObject").innerHTML = car.description();
}
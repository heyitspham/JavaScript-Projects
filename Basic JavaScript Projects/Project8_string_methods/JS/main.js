
// CONCAT() METHOD
function fullSentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var wholeSentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = wholeSentence;
}

// SLICE() METHOD
function sliceMethod() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

// TOUPPERCASE() METHOD
function toUpperCase() {
    document.getElementById("toUpperCase").innerHTML = 
        document.getElementById("toUpperCase").innerHTML.toUpperCase();
}

// SEARCH() METHOD
function search() {
    document.getElementById("search").innerHTML = 
        document.getElementById("search").innerHTML.search("HELLOWORLD");
}

// TOSTRING() METHOD
function numbersToString() {
    var X = 100;
    document.getElementById("numbersToString").innerHTML = X.toString();
}

// TOPRECISION() METHOD
function toPrecision() {
    var X = 12938.3012987376112;
    document.getElementById("toPrecision").innerHTML = X.toPrecision(10);
}

// TOFIXED() METHOD
function toFixed() {
    var X = 5.56789;
    document.getElementById("toFixed").innerHTML = X.toFixed(3);
}

// VALUEOF() METHOD
function value() {
    var str = "Hello World!";
    document.getElementById("value").innerHTML = str.valueOf();
}

// ADDITION with GLOBAL VAR
function global() {
    var X = 10;
    function addX1() {
        return addX1result = 20 + X;
        ;
    }
    function addX2() {
        return addX2result = X + 100;
    }
    addX1();
    addX2();
    document.getElementById("global").innerHTML = "20 + 10 = " + addX1result + " and 10 + 100 = " + addX2result;
}

// ADDITION with LOCAL VAR
function local() {
    function addY1() {
        var Y = 10;
        return addY1result = 20 + Y;
        ;
    }
    function addY2() {
        return addY2result = Y + 100;
        //console.log(Y + 100);
    }
    addY1();
    addY2();
    document.getElementById("local").innerHTML = "20 + 10 = " + addY1result + " and 10 + 100 = " + addY2result;
}

// IF STATEMENT
function IfStatement() {
    if (new Date().getHours() < 18) {
        document.getElementById("IfStatement").innerHTML = "How are you today?";
    }
}

// own IF STATEMENT
function ownIfStatement() {
    if (new Date().getMonth() < 12) {
        document.getElementById("ownIfStatement").innerHTML = "It's not Christmas yet! =(";
    }
}

// ELSE STATEMENT
function ageFunction() {
    age = document.getElementById("age").value;
    if (age >= 18) {
        vote = "You are old enough to vote!";
    }
    else {
        vote = "You are not old enough to vote!";
    }
    document.getElementById("howOldAreYou?").innerHTML = vote;
}

// ELSE IF STATEMENT
function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time > 0 == time < 12) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon time.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}
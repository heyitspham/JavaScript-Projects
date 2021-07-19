function showGreenText() {                                      //defined my function showGreenText()
    var str = "This text is green!";                            //defined variable 'str' and gave it string values
    var result = str.fontcolor("green");                        //changed the string values in 'str' variable and then assigned those changed values to the variable 'result'
    document.getElementById("Green_Text").innerHTML = result;   //in the html file, when the 'Click me!' button is click, this whole 'showGreenText()' function is called, where the text 'Click Me' changes to the values in 'result' once this method is executed.
}

function myFunction() {
    var sentence = "I am learning";                             //assign string values to variable 'sentence'
    sentence += " a lot from this book!";                       //concatenated additional strings to the variable 'sentence'
    document.getElementById("Concatenate").innerHTML = sentence;//changes the text of 'Click Here!' (upon click) to the value of 'sentence'
}
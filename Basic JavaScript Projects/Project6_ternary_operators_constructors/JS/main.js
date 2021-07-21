function Ride_Function() {
    var Height, CanRide;
    Height = document.getElementById("Height").value; //sets number variable Height to the value set in the targeted input element.
    CanRide = (Height < 52) ? "You are too short":"You are tall enough"; //sets string variable CanRide to either string value options depending on the value of Height entered.
    document.getElementById("Ride").innerHTML = CanRide + " to ride."; //prints the string values in CanRide concatenated with " to ride."
}

function AgeFunction() {
    var Age, CanVote;
    Age = document.getElementById("InputAge").value; //sets number variable Age to the value set in the targeted input element.
    CanVote = (Age < 18) ? "You cannot":"You can"; //sets string variable CanVote to either string value options depending on the value of Age entered.
    document.getElementById("Age").innerHTML = CanVote + " vote."; //prints the string values in CanVote concatenated with " vote."
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color; //added four objects to THIS function Vehicle.
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //created 3 new instances of the function Vehicle() and assigned values to their objects.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + "."; //prints strings.
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count(); //prints the value from the function Count().
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;} //function Plus_one() to increment number variable Starting_point by 1.
        Plus_one(); //calls Plus_one(), thus incrementing number variable Starting_point by 1, which sets Starting_point to 10.
        return Starting_point; //10 is returned for the function Count().
    }
}
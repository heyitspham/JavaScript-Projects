function my_Dictionary() {  //start of dictionary.
    var Dog = {
        Name: "Finley",
        Name: "Kenzie",
        Breed: "Samoyed",
        Color: "white",
        Age: 4,
        Sound: "Bark!"
    };
    delete Dog.Name;    //deleted Name variable in Dog dictionary.
    document.getElementById("Dictionary").innerHTML = "My dog's name is " + Dog.Name;   //supposed to print my dog's name, but not anymore after the variable Name was deleted.
}
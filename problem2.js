//get node references from the DOM
let name_area = document.getElementById("name");

//set up event listener for text field
name_area.addEventListener("keypress", check_for_lowercase);

//checks to see the value passed in when key in pressed
function check_for_lowercase(ev) {
    let char_entered = ev.key;
    //alert(char_entered); //test
    let char_lower = char_entered.toLowerCase();

//checking to see if character entered is uppercase or lower case
    if(char_entered !== char_lower){
        alert("Please enter only lower case letters");
        //preventing the uppercase from being entered
        ev.preventDefault();
    }

}
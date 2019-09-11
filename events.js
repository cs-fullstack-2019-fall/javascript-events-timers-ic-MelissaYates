//get node references from the DOM
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");

//set up event listener for button 1 (click)
button1.addEventListener("click",btn1click);//reference to call back function
button2.addEventListener("click", btn2click);
// button 1 clicked
function btn1click(event) {
   // alert("Clicked button 1");
    button2.removeAttribute("disabled");
    button1.setAttribute("disabled", " ");
    button1.innerText ="Don't click me!";
    button2.innerText = "Click Me";
}

//button 2 clicked
function btn2click(event){
    button2.setAttribute("disabled", "");
    button1.removeAttribute("disabled");
    button2.innerText ="Don't click me!";
    button1.innerText = "Click Me";
}

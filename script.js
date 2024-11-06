const body = document.querySelector("body");
const image = document.querySelector("img");

const button = document.querySelector(".but");
const circle = document.querySelector(".circle");


// rgb(33, 33, 33) black
// rgb(240, 240, 240) light gray

function toggleColor(){
    if(circle.style.backgroundColor == "rgb(33, 33, 33)"){

        image.src = ("Untitled design/4.png");
        body.style.backgroundColor = "rgb(240, 240, 240)";
        button.style.backgroundColor = "rgb(33, 33, 33)";
        circle.style.backgroundColor = "rgb(240, 240, 240)";
        circle.style.transform = "translateX(0px)";
        circle.style.transition = "0.5s";
        button.style.transition = "0.5s";
        body.style.transition = "0.5s";



        console.log('became white');
    } else {        
        image.src = ("Untitled design/6.png");

        body.style.backgroundColor = "rgb(33, 33, 33)";
        button.style.backgroundColor = "rgb(240, 240, 240)";
        circle.style.backgroundColor = "rgb(33, 33, 33)";
        circle.style.transform = "translateX(28px)";
        circle.style.transition = "0.5s";
        button.style.transition = "0.5s";
        body.style.transition = "0.5s";

        console.log('became black');   
    }
}
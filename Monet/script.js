//from the example code provided by professor

let monetText = document.getElementById('monet-text');

let texts = ["Welcome to  my world!",
"I am espcially proud of this work", 
"Look at this Nympheas!", 
"Such as beautiful river!", 
"Thanks for visitng"]

document.addEventListener('scroll', changeText);

function changeText(){
    let pos = window.scrollY;

    let height =window.innerHeight;

    //change the number to better fit the flow of the background
    let sectionNum = parseInt((pos-height/1.9)/height);

    monetText.innerHTML = texts[sectionNum];
}
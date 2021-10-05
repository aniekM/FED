// JavaScript Document
var hamburger = document.querySelector ('.hamburger');
var menu = document.querySelector ('header nav ul');



function open(){
    hamburger.classList.toggle('open');
    menu.classList.toggle('oop');
}

hamburger.addEventListener ('click', open);
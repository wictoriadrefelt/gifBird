'use strict'

var imgObj ;
var animate ;
const SCREEN_WIDTH = '450px';
function init(){
 imgObj = document.getElementById('bird');
 imgObj.style.position= 'fixed'; 
 imgObj.style.left = '0px'; 
}
function moveRight(){
 imgObj.style.left = parseInt(imgObj.style.left) + 5 + 'px';
 animate = setTimeout(moveRight,50);
 
 /*
 if(imgObj.style.left == SCREEN_WIDTH){
    clearTimeout(animate)
    imgObj.style.left = '0px;'
*/
 }




document.querySelector('#bird').addEventListener('click', moveRight, { once: true })

window.onload =init; // starts animation when page loads
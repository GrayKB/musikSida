   
let currentPosition = 0;

let timer = [1, 2, 0, 0, 0, 0, 0, 0];

let hiHatSequence = [0, 0, 0, 0, 0, 0, 0, 0];
let snareSequence = [0, 0, 0, 0, 0, 0, 0, 0];
let kickSequence =  [0, 0, 0, 0, 0, 0, 0, 0];
let openHiHatSequence = [0, 0, 0, 0, 0, 0, 0, 0];
   
   function func(){
    var hihat = document.getElementsByClassName('hihat')
    var snare = document.getElementsByClassName('snare')
    var kick = document.getElementsByClassName('kick')
    var openHihat = document.getElementsByClassName('openHihat')

    //HIHATS
    if(hihat[0].checked){
        clearInterval();
        hiHatSequence[0] = 1;
    }else{
        hiHatSequence[0] = 0;
clearInterval();
    }
    if(hihat[1].checked){
        clearInterval();
        hiHatSequence[1] = 1;

    }else{
        hiHatSequence[1] = 0;
clearInterval();
    }
    if(hihat[2].checked){
        hiHatSequence[2] = 1;
    }else{
        hiHatSequence[2] = 0;
        clearInterval();
    }
    if(hihat[3].checked){
        hiHatSequence[3] = 1;
    }else{
        hiHatSequence[3] = 0;
    }
    if(hihat[4].checked){
        hiHatSequence[4] = 1;
    }else{
        hiHatSequence[4] = 0;
    }if(hihat[5].checked){
        hiHatSequence[5] = 1;
    }else{
        hiHatSequence[5] = 0;
    }
    if(hihat[6].checked){
        hiHatSequence[6] = 1;
    }else{
        hiHatSequence[6] = 0;
    }
    if(hihat[7].checked){
        hiHatSequence[7] = 1;
    }else{
        hiHatSequence[7] = 0;
    }

//OPENHIHAT

if(openHihat[0].checked){
        clearInterval();
        openHiHatSequence[0] = 1;
    }else{
        openHiHatSequence[0] = 0;
clearInterval();
    }
    if(openHihat[1].checked){
        clearInterval();
        openHiHatSequence[1] = 1;

    }else{
        openHiHatSequence[1] = 0;
clearInterval();
    }
    if(openHihat[2].checked){
        openHiHatSequence[2] = 1;
    }else{
        openHiHatSequence[2] = 0;
        clearInterval();
    }
    if(openHihat[3].checked){
        openHiHatSequence[3] = 1;
    }else{
        openHiHatSequence[3] = 0;
    }
    if(openHihat[4].checked){
        openHiHatSequence[4] = 1;
    }else{
        openHiHatSequence[4] = 0;
    }if(openHihat[5].checked){
        openHiHatSequence[5] = 1;
    }else{
        openHiHatSequence[5] = 0;
    }
    if(openHihat[6].checked){
        openHiHatSequence[6] = 1;
    }else{
        openHiHatSequence[6] = 0;
    }
    if(openHihat[7].checked){
        openHiHatSequence[7] = 1;
    }else{
        openHiHatSequence[7] = 0;
    }


//SNARE

if(snare[0].checked){
        clearInterval();
        snareSequence[0] = 1;
    }else{
        snareSequence[0] = 0;
clearInterval();
    }
    if(snare[1].checked){
        clearInterval();
        snareSequence[1] = 1;

    }else{
        snareSequence[1] = 0;
clearInterval();
    }
    if(snare[2].checked){
        snareSequence[2] = 1;
    }else{
        snareSequence[2] = 0;
        clearInterval();
    }
    if(snare[3].checked){
        snareSequence[3] = 1;
    }else{
        snareSequence[3] = 0;
    }
    if(snare[4].checked){
        snareSequence[4] = 1;
    }else{
        snareSequence[4] = 0;
    }if(snare[5].checked){
        snareSequence[5] = 1;
    }else{
        snareSequence[5] = 0;
    }
    if(snare[6].checked){
        snareSequence[6] = 1;
    }else{
        snareSequence[6] = 0;
    }
    if(snare[7].checked){
        snareSequence[7] = 1;
    }else{
        snareSequence[7] = 0;
    }

    //KICK

if(kick[0].checked){
        clearInterval();
        kickSequence[0] = 1;
    }else{
        kickSequence[0] = 0;
clearInterval();
    }
    if(kick[1].checked){
        clearInterval();
        kickSequence[1] = 1;

    }else{
        kickSequence[1] = 0;
clearInterval();
    }
    if(kick[2].checked){
        kickSequence[2] = 1;
    }else{
        kickSequence[2] = 0;
        clearInterval();
    }
    if(kick[3].checked){
        kickSequence[3] = 1;
    }else{
        kickSequence[3] = 0;
    }
    if(kick[4].checked){
        kickSequence[4] = 1;
    }else{
        kickSequence[4] = 0;
    }if(kick[5].checked){
        kickSequence[5] = 1;
    }else{
        kickSequence[5] = 0;
    }
    if(kick[6].checked){
        kickSequence[6] = 1;
    }else{
        kickSequence[6] = 0;
    }
    if(kick[7].checked){
        kickSequence[7] = 1;
    }else{
        kickSequence[7] = 0;
    }


    }

    function advancePlayback() {
    currentPosition ++;

    if (currentPosition > 7) {
        currentPosition = 0;
    }

    if (hiHatSequence[currentPosition] == 1 ) {
        playSoundHihat()
    }
    if(openHiHatSequence[currentPosition] == 1 ){
        playSoundOpenHihat()
    }
    if(snareSequence[currentPosition] == 1 ){
    playSoundSnare()
    }
    if(kickSequence[currentPosition] == 1 ){
        playSoundKick()
    }


}
function playSoundHihat() {
    console.log("HiHat")
}
function playSoundOpenHihat(){
    console.log("Open-HiHat")
}
function playSoundSnare(){
    console.log("Snare")
}
function playSoundKick(){
    console.log("Kick")
}



//Försökte lägga till ett objekt som håller takten. (lyckades dock inte)
/*
function cb1(){
document.getElementById('cb3').stylecolor = 'black'
document.getElementById('cb1').style.color = 'red';
}
function cb2(){
document.getElementById('cb1').stylecolor = 'black'
document.getElementById('cb2').style.color = 'red';
}
function cb3(){
document.getElementById('cb2').stylecolor = 'black'
document.getElementById('cb3').style.color = 'red';
}

setInterval(cb1, 100);
setInterval(cb2, 200);
setInterval(cb3, 300);


*/

setInterval(advancePlayback, 300);




//CLICKER
/*

let clickCount = 0;

let clickCounter = document.querySelector(".click-counter");
let clickButton = document.querySelector(".click-button");



console.log(clickCounter);
console.log(clickButton);

clickButton.addEventListener("click", addClick);

function addClick () {
    clickCount ++;
    clickCounter.innerHTML = clickCount;
}
*/
var speed=250;
var interval;
var currentAnimation;
function size(){
    let fontSize= document.getElementById("fontSize").value;
    let textArea= document.getElementById("mytextarea");
    textArea.style.fontSize= fontSize;
}

function speedAction(){
    let turbo= document.getElementById("turbo");
    if(turbo.checked){
        speed=50;
    }else {speed=250;}
    }

function changeAnimation(){
    let textArea= document.getElementById("mytextarea");
    let animation= document.getElementById("animationChoice");
    textArea.value= ANIMATIONS[animation.value];
}
function play(){
    document.getElementById("play").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animationChoice").disabled = true;
    let mytext= document.getElementById("mytextarea");
    currentAnimation = mytext.value.split("=====\n");
    interval =setInterval( function (){ nextAnimation(currentAnimation);},speed);
}

function nextAnimation(animation){
    let mytext= document.getElementById("mytextarea");
    currentAnimation=animation.shift();
    mytext.value=currentAnimation;
    animation.push(currentAnimation);
    currentAnimation=animation;
}

function stop(){
    document.getElementById("play").disabled=false;
    document.getElementById("animationChoice").disabled=false;
    changeAnimation();
    clearInterval(interval);
    document.getElementById("stop").disabled=true;
}
window.onload=function(){
    let SizeDropdown = document.getElementById("fontSize");
    SizeDropdown.onchange=size;
    let TurboCheckBox= document.getElementById("turbo");
     TurboCheckBox.onclick = speedAction;
   let AnimationDropdown= document.getElementById("animationChoice");
     AnimationDropdown.onchange=changeAnimation;
   let PlayButton= document.getElementById("play");
   PlayButton.onclick=play;
    let StopButton= document.getElementById("stop");
   StopButton.onclick=stop;
};
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function test(){
    let textArea=document.getElementById("tArea");
    textArea.style.fontSize="24pt";
    alert("Hello World!");
}
function blingAction(){
    let textArea=document.getElementById("tArea");
    let checkBox=document.getElementById("checkBox");
   if(checkBox.checked) {
       textArea.style.fontWeight="bold";
       textArea.style.color="green"; 
       textArea.style.textDecoration="underline";
       document.body.style.backgroundImage="url('Images/hundred-dollar-bill.jpg')";
   // alert("Bling is checked !");
} else{
    textArea.style.fontWeight = "normal";
    document.body.style.backgroundImage="none";
    textArea.style.textDecoration="none";
    textArea.style.color="black";
  //  alert("Bling is unchecked!");
}
}

function decorationBtnAction(){
   let textArea= document.getElementById("tArea");
    let size=parseInt(window.getComputedStyle(textArea).getPropertyValue("font-size"));
    size+=2;
    textArea.style.fontSize=size+"pt";
}

function delayBtnAction(){
    let timer= null;
    if(timer===null){
        timer = setInterval(decorationBtnAction,500);
    }
    else{ clearInterval(timer);
        timer=null;}
}
function pingLatin(str){
    str=str.tolowerCase();
  
    const vowels=["a","e", "i","o","u"];
    let vowelIndex=0;
    if(vowels.includes(str[0])){
        return str+"ay";
    }
   else{
       for(let char of str){
           if(vowels.includes(char)){
               vowelIndex =str.indexOf(char);
           }
       }
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
   }

}
function pingLatinAction(){
   let text=document.getElementById("tArea").value;
   let stringArray= text.split(' ');
   for(let str of stringArray){
   text.innerHtml+= pingLatin(str);
   }
}
 function malkoVitchAction(){
     
 }

window.onload= function (){
    
    var decorationBtn = document.getElementById("decoratorbtn");
    //decorationBtn.onclick = test;
    //decorationBtn.onclick=decorationBtnAction;
    decorationBtn.onclick =delayBtnAction;
    var BlingcheckBox=document.getElementById("checkBox");
    BlingcheckBox.onclick= blingAction;
    var pingLatinBtn=document.getElementById("latin");
    pingLatinBtn.onclick = pingLatinAction;
    var malkovitchBtn=document.getElementById("mal");
    malkovitchBtn.onclick = malkoVitchAction;
    };
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var accountList= [];
     accountList["Checking"]=accountList["checking"]= accountList["CHECKING"]="Checking";
     accountList["Savings"]=accountList["savings"]= accountList["SAVINGS"]="Savings";
     accountList["Business"]=accountList["business"]= accountList["BUSINESS"]="business";
let  numberOfAccount=0;

var rudyTimer = ( function(){
   var timer= null;
   function delayMsg2(){
       if(timer === null){
        timer= setInterval(rudy,1000);
    }
    else {clearInterval(timer);
     timer= null;
   }
}
   
     function rudy(){
         document.getElementById("innerText").innerHTML +="Rudy!";
     }
    
 return delayMsg2;
    
})();

// var account= {
//    accountName:"",
//    balance:0.0,
//    amount:0.0,
//    name: function(){return "AccountName:"+ this.accountName;},
//  deposit:function(){ this.balance= this.balance+ this.amount;}  
//};
//
// var checkingAccount= function(amount){
//     let checkAcct= Object.create(account);
//     checkAcct.accountName="Checking",
//     checkAcct.amount=amount;
//     checkAcct.balance= account.deposit;
//     return checkAcct;
//  };
// 
// var SavingsAccount= function(amount){
//     let SavingsAcct= Object.create(account);
//     SavingsAcct.accountName="Savings",
//     SavingsAcct.amount=amount;
//     SavingsAcct.balance= account.deposit;
//     return SavingsAcct;
//  };
//  var BusinessAccount= function(amount){
//     let BusinessAcct= Object.create(account);
//     BusinessAcct.accountName="Business",
//     BusinessAcct.amount=amount;
//     BusinessAcct.balance= account.deposit;
//     return BusinessAcct;
//  };

function Account( name, amount){
    let balance=0.0;
    this.name= name;
    this.amount= amount;
    this. balance= this.balance+ amount;   
};
var createAccount= function(){
    let acctName= document.getElementById("Accountname");
   let money= parseDouble(document.getElementById("amount").value);
    let newAccount;
    switch(acctName.value){
       case"Checking","CHECKING","checking":newAccount= new Account("Checking", money); break;
       case"Savings","SAVINGS","savings":newAccount=  new Account("Savings", money); break;
       case"Business","BUSINESS","business": newAccount=  new Account("Business",money); break; 
    }
    alert(newAccount.name +":" + newAccount.balance);
    return newAccount;
};
//   let acctName= document.getElementById("Accountname");
//   let money= parseDouble(document.getElementById("amount").value);
//   var newAccount;
//   account.balance= money;
//   //this.amount=money;
//   switch(acctName.value){
//       case"Checking","CHECKING","checking":newAccount= new checkingAccount("Checking", amount); break;
//       case"Savings","SAVINGS","savings":newAccount=  new SavingsAccount("Savings",amount); break;
//       case"Business","BUSINESS","business": newAccount=  new BusinessAccount("Business",amount); break;
//   }
//    numberOfAccount++;
//   //alert( numberOfAccount);
//   alert( newAccount.name);
//   return newAccount;

//};

window.onload = function (){
   let button= document.getElementById("btn");
   button.onclick =rudyTimer;
   let AccountBtn= document.getElementById("account");
   AccountBtn.onclick=createAccount;
  
};
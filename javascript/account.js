/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {
    var accountList = [];
    var accntName ;
    var deposit;
    
    window.onload = function(){
        let bttn = document.getElementById("account");
        accntName = document.getElementById("Accountname");
        deposit = document.getElementById("amount");
        bttn.onclick = handler; 
    };
    
    var account = (function(){
        var acctname = "";
        var acctbalance = "";
        
        function setName(name){
         acctname = name;
        };
        
        function setBalance(balance){
            acctbalance = balance;
        };
        
        var Accountobject = {
            create: function(name,deposit){
                setBalance(deposit);
                setName(name);
            },
            getName: function(){
                return acctname;
            },
            getDeposit: function(){
                return acctbalance;
            }
           
       };
       return Accountobject;
    });
    
    
    function displayAccounts(){
        var textarea = document.getElementById("context");
        var result = "";
        for(let i = 0; i < accountList.length ; i++){
            var acc = accountList[i];
            result += "\n Account Name: "+acc.getName()+" balance: "+acc.getDeposit();
        }
        textarea.value = result;
    };
    
    
    var handler = (function() {
      return function(){
       var newAcc = account();
       if(accntName.value !== "" && deposit.value !== ""){
           newAcc.create(accntName.value,deposit.value);
           accountList.push(newAcc);
                displayAccounts();
       }else{
           alert("fill in all fields");
       }
      };
        
    })();
    
})();
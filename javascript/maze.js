/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



   $(document).ready( function () {
      var count=0;
    $("#start").click(function () {
         $("#status").text("Game is running....");
        $(".boundary").mouseover(function() {
            $(this).css({"background-color":"red"});
             count++;
           $(".boundary.example").text("Boundary hit:"+count);
           $("#status").text("You lost");
           alert("you lost");
        });
       
         $("#maze").mouseleave( function() {
                    count++;
           $(".boundary.example").text("Boundary hit:"+count);
           $("#status").text("You lost");
           alert("you lost");
               } 
    );
       
       $("#end").mouseover(function(){
           if(count===0){
               
               $(".boundary.example").text("Boundary hit:"+count);
               $("#status").text("congrats, You won");
               alert("you win");
               location.reload();
           }
           else {
               $(".boundary.example").text("Boundary hit:"+count);
               $("#status").text("Sorry, you lost");
               alert("you lost");
               location.reload();
           }
       });
       
    });
       
       
   });   
    
   
       
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


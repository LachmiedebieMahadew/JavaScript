/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var rudyTimer = (function () {
    var timer = null;
    function delayMsg2() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    function rudy() {
        document.getElementById("mytext").innerHTML += "Rudy! ";
    }

    return delayMsg2;
})();
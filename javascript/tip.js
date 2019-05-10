/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcTip() {
	var subtotalElem =document.getElementById('subtotal'); 
	var tipElem = document.getElementById('tip');
	var totalElem = document.getElementById('total');
	var subtotal = parseFloat(subtotalElem.value);
	var tip = parseFloat(tipElem.value); 
	var total = (subtotal/100)*tip+subtotal;
	totalElem.innerHTML = '$' + total;
}


// Fiona E. Campebll
// knitting-project
// EECS 481
// script.js

$(document).ready(function(){

 	var num = 1;
 	$('.button').click(function(){

 		var source = "img/" + num + ".png"
 		$("#letter").attr("src",source);
 		
 		num += 1;

 		if (num == 26)	{ num = 0; }
 	});

 	 $('.letter').click(function(){

 		var let = num-1;

 		switch(let) {
 			case 0:
 				console.log("A");
 				break;
 			case 1:
 				console.log("B");
 				break;
 			case 2:
 				console.log("C");
 				break;
 			case 3:
 				console.log("D");
 				break;
 			case 4:
 				console.log("E");
 				break;
 			case 5:
 				console.log("F");
 				break;
 			case 6:
 				console.log("G");
 				break;
 			case 7:
 				console.log("H");
 				break;
 			case 8:
 				console.log("I");
 				break;
 			case 9:
 				console.log("J");
 				break;
 			case 10:
 				console.log("J");
 				break;
 			case 11:
 				console.log("L");
 				break;
 			case 12:
 				console.log("M");
 				break;
 			case 13:
 				console.log("N");
 				break;
 			case 14:
 				console.log("O");
 				break;
 			case 15:
 				console.log("P");
 				break;
 			case 16:
 				console.log("Q");
 				break;
 			case 17:
 				console.log("R");
 				break;
 			case 18:
 				console.log("S");
 				break;
 			case 19:
 				console.log("T");
 				break;
 			case 20:
 				console.log("U");
 				break;
 			case 21:
 				console.log("V");
 				break;
 			case 22:
 				console.log("W");
 				break;
 			case 23:
 				console.log("X");
 				break;
  			case 24:
 				console.log("Y");
 				break;
 			case 25:
 				console.log("Z");
 				break;
 		}
 	});
});

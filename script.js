// Fiona E. Campebll
// knitting-project
// EECS 481
// script.js


//timeout delay functions for video & custom audio
function start_video(){
	setTimeout(function(){
	    document.getElementById("video").play();
	}, 800);
}

function start_audio(){
	setTimeout(function(){
	    document.getElementById("custom-audio").play();
	}, 1000);
}

$(document).ready(function(){

 	var num = 0;
 	var letter_state = true;

 	$(".top").click(function(){

 		if (num == 26)	{ num = 0; }

 		letter_state = true;

 		//If it is clicked from picture state, hide the word & mute all sounds
 		$("span").addClass("hidden");
 		$("#custom-audio").attr("src", "");
 		$("#letter-audio").attr("src", "./aud/letters/" + num + ".wav");
 		$("#video").attr("src", "");
 		var source = "url(./img/let/" + num + ".png)"
 		$(".bottom").css("background-image", source);
 		
 		num += 1;
 	});

 	$(".bottom").click(function(){

 		var let = num-1;
 		var source = "";

 		switch(let) {
 			case 0://letter A
 				if(letter_state){

 					$("span").text("Ara");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Ara.wav");
 				    source = "url(./img/wrd/ara.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/0.png)"
 					letter_state = true;
 				}
 				break;
 			case 1://letter B
 				if(letter_state){
 					$("span").text("Bunny");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Bunny.wav");
 				    source = "url(./img/wrd/bunny.gif)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/1.png)"
 					letter_state = true;
 				}
 				break;
 			case 2://letter C
 				if(letter_state){
 					$("span").text("Cookie");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Cookie.wav");
 				    source = "url(./img/wrd/cookie.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/2.png)"
 					letter_state = true;
 				}
 				break;
 			case 3://letter D
 				if(letter_state){
 					$("span").text("Deer");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Dancing.wav");
 				    source = "url(./img/wrd/deer.gif)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/3.png)"
 					letter_state = true;
 				}
 				break;
 			case 4://letter E
 				if(letter_state){
 					$("span").text("Elephant");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Elephant.wav");
 				    source = "url(./img/wrd/elephant.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/4.png)"
 					letter_state = true;
 				}
 				break;
 			case 5://letter F
 				if(letter_state){
 					$("span").text("Family");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Family.wav");
 				    source = "url(./img/wrd/family.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/5.png)"
 					letter_state = true;
 				}
 				break;
 			case 6://letter G
 				if(letter_state){
 					$("span").text("Giraffe");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Giraffe.wav");
 				    source = "url(./img/wrd/giraffe.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/6.png)"
 					letter_state = true;
 				}
 				break;
 			case 7://letter H
 				if(letter_state){
 					$("span").text("Harp");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Harp.wav");
 				    source = "url(./img/wrd/harp.png)"
 				    $("#custom-audio").attr("src", "./aud/cus/harp.mp3");
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					$("#custom-audio").attr("src", "");
 					source = "url(./img/let/7.png)"
 					letter_state = true;
 				}
 				break;
 			case 8://letter I
 				if(letter_state){
 					$("span").text("Igloo");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Igloo.wav");
 				    source = "url(./img/wrd/igloo.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/8.png)"
 					letter_state = true;
 				}
 				break;
 			case 9://letter J
 				if(letter_state){
 					$("span").text("Jellyfish");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Jellyfish.wav");
 				    source = "url(./img/wrd/jellyfish.gif)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/9.png)"
 					letter_state = true;
 				}
 				break;
 			case 10://letter K
 				if(letter_state){
 					$("span").text("Kitten");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Kitten.wav");
 				    source = "url(./img/wrd/kitten.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/10.png)"
 					letter_state = true;
 				}
 				break;
 			case 11://letter L
 				if(letter_state){
 					$("span").text("Leaf");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Leaf.wav");
 				    source = "url(./img/wrd/leaf.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/11.png)"
 					letter_state = true;
 				}
 				break;
 			case 12://Letter M
 				if(letter_state){
 					$("span").text("Music");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Music.wav");
 				    $("#video").attr("src", "./vid/music.mp4");
 				    start_video();
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					$("#video").attr("src", "");
 					source = "url(./img/let/12.png)"
 					letter_state = true;
 				}
 				break;
 			case 13://Letter N
 				if(letter_state){
 					$("span").text("Nest");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Nest.wav");
 				    source = "url(./img/wrd/nest.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/13.png)"
 					letter_state = true;
 				}
 				break;
 			case 14://Letter O
 				if(letter_state){
 					$("span").text("Owl");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Owl.wav");
 				    source = "url(./img/wrd/owl.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/14.png)"
 					letter_state = true;
 				}
 				break;
 			case 15://Letter P
 				if(letter_state){
 					$("span").text("Pig");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Pig.wav");
 				    source = "url(./img/wrd/pig.gif)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/15.png)"
 					letter_state = true;
 				}
 				break;
 			case 16://Letter Q
 				if(letter_state){
 					$("span").text("Queen");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Queen.wav");
 				    source = "url(./img/wrd/queen.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/16.png)"
 					letter_state = true;
 				}
 				break;
 			case 17://Letter R
 				if(letter_state){
 					$("span").text("Racoon");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Racoon.wav");
 				    source = "url(./img/wrd/racoon.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/17.png)"
 					letter_state = true;
 				}
 				break;
 			case 18://Letter S
 				if(letter_state){
 					$("span").text("Sand");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Sand.wav");
 				    source = "url(./img/wrd/sand.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/18.png)"
 					letter_state = true;
 				}
 				break;
 			case 19://Letter T
 				if(letter_state){
 					$("span").text("Toy");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Toy.wav");
 				    source = "url(./img/wrd/toy.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/19.png)"
 					letter_state = true;
 				}
 				break;
 			case 20://Letter U
 				if(letter_state){
 					$("span").text("Umbrella");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Umbrella.wav");
 				    source = "url(./img/wrd/umbrella.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/20.png)"
 					letter_state = true;
 				}
 				break;
 			case 21://Letter V
 				if(letter_state){
 					$("span").text("Violin");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Violin.wav");
 				    source = "url(./img/wrd/violin.png)"
 				    $("#custom-audio").attr("src", "./aud/cus/violin.mp3");
 				    start_audio();
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					$("#custom-audio").attr("src", "");
 					source = "url(./img/let/21.png)"
 					letter_state = true;
 				}
 				break;
 			case 22://Letter W
 				if(letter_state){
 					$("span").text("Water");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Water.wav");
 				    source = "url(./img/wrd/water.gif)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/22.png)"
 					letter_state = true;
 				}
 				break;
 			case 23://Letter X
 				if(letter_state){
 					$("span").text("X-ray");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/X-ray.wav");
 				    source = "url(./img/wrd/xray.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/23.png)"
 					letter_state = true;
 				}
 				break;
  			case 24://Letter Y
 				if(letter_state){
 					$("span").text("Yo-yo");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Yo-yo.wav");
 				    source = "url(./img/wrd/yoyo.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/24.png)"
 					letter_state = true;
 				}
 				break;
 			case 25://Letter Z
 				if(letter_state){
 					$("span").text("Zebra");
 					$("span").removeClass("hidden");
 					$("#word-audio").attr("src", "./aud/words/Zebra.wav");
 				    source = "url(./img/wrd/zebra.png)"
 					letter_state = false;
 				} else {
 					$("span").addClass("hidden");
 					$("#letter-audio").attr("src", "./aud/letters/" + let + ".wav");
 					source = "url(./img/let/25.png)"
 					letter_state = true;
 				}
 				break;
 		}
 		
 		$(this).css("background-image", source);

 	});
});

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var playarea = document.getElementById("playarea");
var pad1 = document.getElementById("pad1");
var pad2 = document.getElementById("pad2");
var ball = document.getElementById("ball");
var gameover=document.getElementById("gameover");
var side = 1;

var vx = 2;
var vy =2;




document.addEventListener("keydown",function(event){

	var pad1b = pad1.getBoundingClientRect();

	if(event.which == 40 && pad1b.bottom < window.innerHeight){
		
		console.log("m in");
		pad1.style.top = pad1b.top + 15 + "px";
		
	}
	if(event.which == 38 && pad1b.top>0){
		
		console.log("m in");
		pad1.style.top = pad1b.top - 15 + "px";
		
	}


	var pad2b = pad2.getBoundingClientRect();

	if( event.which == 83 && pad2b.bottom < window.innerHeight){
		
		console.log(event.which);
		pad2.style.top = pad2b.top + 15 + "px";
	
	}
	if(event.which == 87 && pad2b.top>0){
		
		console.log(event.which);
		pad2.style.top = pad2b.top - 15 + "px";
		
	}
});



var id = setInterval(func,10);


function func(){
	var ballb = ball.getBoundingClientRect();
	var pad1b = pad1.getBoundingClientRect();
	var pad2b = pad2.getBoundingClientRect();
	var player1b = player1.getBoundingClientRect();
	var player2b = player2.getBoundingClientRect();
	
	if(ballb.top < 0){
		vy = -1*vy;
	}
	if(ballb.bottom > window.innerHeight){
		vy = -1*vy;
	}
	if(ballb.left < player1b.right){
		if( ballb.top+30 < pad1b.bottom && ballb.bottom-30 > pad1b.top )
		{
			vx = vx*-1;
		}else{
			gameover.style.zIndex = 7;
			clearInterval(id);

		}
	}
	if(ballb.right > player2b.left)	{
		if( ballb.top+30 < pad2b.bottom && ballb.bottom-30 > pad2b.top )
		{
			vx = vx*-1;
		}else{
			gameover.style.zIndex = 7;
			clearInterval(id);
		}
	}


	ball.style.left = ballb.left + vx + "px";
	ball.style.top = ballb.top + vy + "px";

}





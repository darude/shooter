$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	var fps = new Image();
	var screen = 0; 
	var crosshair = new Image();
	var hitmarker = new Image();
	var click1
	var fps2 = new Image();
	var menupic = new Image();
	var instructionsicon = new Image();
	var starticon = new Image();
	var disclaimericon = new Image();	
	var menumusic = new Audio('menumusic.mp3');
	var hover;
	var instructions = new Image();
	var drawstart
	var drawinstruct	
	var drawdisc
	var buttondown
	var gamebg = new Image();
	var gamebgcopy = new Image();
	var targetX = [4, 180, 0];
	var targetY = [235];
	var target1 = new Image();
	var target2 = new Image();
	var target3 = new Image();
	var target4 = new Image();
	var target5 = new Image();
	var target6 = new Image();
	var target7 = new Image();
	var speeds = [0, 0, 0, 0, 0, 0, 0];
	var bounce1, bounce2, bounce3, bounce4, bounce5, bounce6, bounce7;
	var targethit = [false, false, false, false, false, false, false];
	var targethit2 = [false, false, false, false, false, false, false];
	var click 
	var restart
	var timer = 0;
	var stop
	var start
	var countdown;
	var sanic = new Audio('sanicthemeforgame.wav');
	var smoke = new Audio('smokeweed.wav');
	var obaby = new Audio('obaby.wav');
	var xfiles = new Audio('xfilesforgame.wav');
	var airhorn = new Audio('airhorn.wav');
	var wow = new Audio('wow.wav');
	var sanicplay
	var smokeplay
	var obabyplay
	var xfilesplay
	var airhornplay
	var wowplay
	var dudu = new Audio('dudu.wav');
	var boxmove = 0;
	var boxstart;
	var nyanmove = 0;
	var nyanstart;
	var nyan = new Image();
	var begin
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	 	
		
	//////////
	///STATE VARIABLES
	
	fps.src = 'fps.png';
	fps2.src = 'fps2.png';
	crosshair.src = 'crosshair.png';
	hitmarker.src = 'hitmarker.png';
	menupic.src = 'menupic1.png';
	instructionsicon.src = 'instructionsicon.png';
	starticon.src = 'starticon.png';
	disclaimericon.src = 'disclaimericon.png';
	instructions.src = 'instructions1.png';
	gamebg.src = 'gamebg.png';
	gamebgcopy.src = 'gamebg copy.png'
	target1.src = 'target1.png';
	target2.src = 'target2.png';
	target3.src = 'target3.png';
	target4.src = 'target5.png';
	target5.src = 'target4.png';
	target6.src = 'target6.png';
	target7.src = 'target7.png';
	nyan.src = 'nyan.png';
	
	click = false
	click1 = false
	hover = false
	drawstart = true
	drawinstruct = false
	drawdisc = false
	buttondown = false
	bounce1 = false
	bounce2 = false
	bounce3 = false
	bounce4 = false
	restart = false
	stop = false
	countdown = 3000
	start = false
	sanicplay = false
	smokeplay = false
	obabyplay = false
	xfilesplay = false
	airhornplay = false
	wowplay = false
	boxstart = 500
	nyanstart = -100
	begin = true
	
	
	///////////
	//screen definitions
	///////////
	
	//screen 0 is main menu
	//screen 1 is game
	//screen 2 is instructions
	//screen 3 is disclaimer 

	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

		
	init();
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		
		//menu	
		
		if(screen==0) {
		
		dudu.pause();
		dudu.currentTime = '0'
		menumusic.play();
		
		ctx.drawImage(menupic, 0, 0, 640, 480);
		
		if(drawinstruct == true) {
		ctx.drawImage(instructionsicon, 48, 252, 168, 131);
		}
		
   		if(drawstart == true) {
		ctx.drawImage(starticon, 234, 252, 168, 131);
		}
		
		if(drawdisc == true) {
		ctx.drawImage(disclaimericon, 417, 252, 171, 131);
		}
		
		}
	
		//////////////////////////
		////////////////////
		///////////
		//game
		///////////
		///////////////////
		/////////////////////////
	
		if(screen==1) {
		
		ctx.fillStyle = "white"
		ctx.fillRect(0,0, w, h);	
		
		/////////////////
		/////////
		//1st game run through
		//////////
		////////////////
		
		menumusic.pause();
		menumusic.currentTime = '0'		
		dudu.play();
		
		ctx.drawImage(gamebg, 0, 0, 640, 480);
		
		if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 30);
		
		//////////
		//////
		//timer
		//////
		//////////
		
		if(stop == false) {
		timer += 33
		}
		
		ctx.fillStyle = 'white'
		ctx.textAlign = 'center'
		ctx.font = '15px Comic Sans MS'
		ctx.fillText(((timer/1000).toFixed(2)), 328, 50);
		
		/*
		if(begin == true){
		nyanmove +=10
		ctx.drawImage(nyan, nyanstart + nyanmove, 200, 200, 100)
		}
		
		if(nyanmove + nyanstart >= 640){
		nyanmove = 0
		nyanstart = -100
		stop = false
		begin = false
		}
		*/
		
		/////////////
		/////////
		////
		//targets
		////
		////////
		////////////
	
		//target1
		
		if(targethit[0] == false) {
		ctx.drawImage(target1, targetX[0] + speeds[0], 155, 90, 100);
		}
		//target1 movement
		if(targetX[0] + speeds[0] == targetX[0]) {
		bounce1 = true
		}
		if((targetX[0] + speeds[0] >= targetX[0]) && (targetX[0] + speeds[0] < 163) && bounce1 == true) {
		speeds[0] += 3
		}else {
		speeds[0] -= 3
		bounce1 = false
		}
		
		//target2
		if(targethit[1] == false) {
		ctx.drawImage(target2, 270, targetY[0] - speeds[1], 100, 125);
		}
		//target2 movement
		if(targetY[0] - speeds[1] == targetY[0]) {
		bounce2 = true
		}
		if((targetY[0] - speeds[1] <= targetY[0]) && (targetY[0] - speeds[1] > 140) && bounce2 == true) {
		speeds[1] += 3
		}else {
		speeds[1] -= 3
		bounce2 = false
		}
		
		//target3
		if(targethit[2] == false) {
		ctx.drawImage(target3, targetX[1] - speeds[2], 10, 80, 100);
		}
		//target3 movement
		if(targetX[1] - speeds[2] == targetX[1]) {
		bounce3 = true
		}
		if((targetX[1] - speeds[2] <= targetX[1]) && (targetX[1] - speeds[2] > 0) && bounce3 == true) {
		speeds[2] += 3
		}else {
		speeds[2] -= 3
		bounce3 = false
		}
		
		//target4
		if(targethit[3] == false) {
		ctx.drawImage(target4, targetX[2] + speeds[3], 0, 80, 100);
		}
		//target4 movement
		if(targetX[2] + speeds[3] == targetX[2]) {
		bounce4 = true
		}
		if((targetX[2] + speeds[3] >= targetX[2]) && (targetX[2] + speeds[3] < 180 && bounce4 == true)) {
		speeds[3] += 5
		}else {
		speeds[3] -= 5
		bounce4 = false
		}
		
		//target5
		if(targethit[4] == false) {
		ctx.drawImage(target5, 435, 45, 100, 100);
		}
		
		//target6
		if(targethit[5] == false) {		
		ctx.drawImage(target6, 430, 230, 175, 175);
		}
		
		//target7
		if(targethit[6] == false) {
		ctx.drawImage(target7, 75, 250, 100, 150);
		}
		
		/////////////////
		//////////
		//2nd game run through
		//////////
		////////////////
		
		if(targethit[0] == true && targethit[1] == true && 
		targethit[2] == true && targethit[3] == true && 
		targethit[4] == true && targethit[5] == true && 
		targethit[6] == true) {

		//target1 2nd time
		if(targethit2[0] == false) {
		ctx.drawImage(target1, targetX[0] + speeds[0], 155, 90, 100);
		}
		//target1 movement
		if(targetX[0] + speeds[0] == targetX[0]) {
		bounce1 = true
		}
		if((targetX[0] + speeds[0] >= targetX[0]) && (targetX[0] + speeds[0] < 163) && bounce1 == true) {
		speeds[0] += 3
		}else {
		speeds[0] -= 3
		bounce1 = false
		}
		
		//target2 2nd time
		if(targethit2[1] == false) {
		ctx.drawImage(target2, 270, targetY[0] - speeds[1], 100, 125);
		}
		//target2 movement
		if(targetY[0] - speeds[1] == targetY[0]) {
		bounce2 = true
		}
		if((targetY[0] - speeds[1] <= targetY[0]) && (targetY[0] - speeds[1] > 140) && bounce2 == true) {
		speeds[1] += 3
		}else {
		speeds[1] -= 3
		bounce2 = false
		}
		
		//target3 2nd time
		if(targethit2[2] == false) {
		ctx.drawImage(target3, targetX[1] - speeds[2], 10, 80, 100);
		}
		//target3 movement
		if(targetX[1] - speeds[2] == targetX[1]) {
		bounce3 = true
		}
		if((targetX[1] - speeds[2] <= targetX[1]) && (targetX[1] - speeds[2] > 0) && bounce3 == true) {
		speeds[2] += 3
		}else {
		speeds[2] -=3
		bounce3 = false
		}
		
		//target4 2nd time
		if(targethit2[3] == false) {
		ctx.drawImage(target4, targetX[2] + speeds[3], 0, 80, 100);
		}
		//target4 movement
		if(targetX[2] + speeds[3] == targetX[2]) {
		bounce4 = true
		}
		if((targetX[2] + speeds[3] >= targetX[2]) && (targetX[2] + speeds[3] < 180 && bounce4 == true)) {
		speeds[3] += 5
		}else {
		speeds[3] -= 5
		bounce4 = false
		}
		
		//target5 2nd time
		if(targethit2[4] == false) {
		ctx.drawImage(target5, 435, 45, 100, 100);
		}
		
		//target6 2nd time
		if(targethit2[5] == false) {		
		ctx.drawImage(target6, 430, 230, 175, 175);
		}
		
		//target7 2nd time
		if(targethit2[6] == false) {
		ctx.drawImage(target7, 75, 250, 100, 150);
		}
		}
		
		if(targethit2[0] == true && targethit2[1] == true && 
		targethit2[2] == true && targethit2[3] == true && 
		targethit2[4] == true && targethit2[5] == true && 
		targethit2[6] == true) {
		stop = true
		}
		
		//game bg overlap
		ctx.drawImage(gamebgcopy, 0, 0, 640, 480);
    	
    	////////
		/////
		//game stop
		/////
		////////
		
		ctx.font = '20px Comic Sans MS'
		ctx.fillStyle = 'white'
		if(stop == true) {
		boxmove +=10
		ctx.fillRect(120, boxstart - boxmove, 400, 200)
		if((boxstart - boxmove) <= 140){
		boxmove = 0
		boxstart = 140
		}
		
		if(boxmove == 0){
		ctx.fillStyle = 'black'
		ctx.textAlign = 'center'
		if(((timer/1000).toFixed(2)) > 5){
		ctx.fillText("Ur tyme was " + ((timer/1000).toFixed(2)) + ", u scrub", 320, 200)
		}else{
		ctx.fillText("Ur tyme was " + ((timer/1000).toFixed(2)) + ", quickscope ma$ter", 320, 200)
		}
		ctx.fillText("restart or nah? [press r]", 320, 250)
		}
		}
		
		//gun settings
				
		ctx.drawImage(fps, mx-40, 300, 200, 200);
		ctx.drawImage(crosshair, mx-20, my-20, 40, 40);
		
		}
		
		
		//gun sounds
		
		var fx = [];
		function playFX(){
     	fx.push(new Audio('bang.wav'));
     	if(click == true) 
        fx[fx.length - 1].play();
        click = false
        }
        
    	//hitmarker sound
    	
    	var gx = [];
    	function playGX(){ 
    	gx.push(new Audio('hitmarkersound.wav'));
    	if (click1 == true)
    	gx[gx.length - 1].play();
    	click1 = false;
    	}
    	
    	if(click1 == true) {
		ctx.drawImage(hitmarker, mx-20, my-20, 40, 40);
		playFX();
		playGX();
		click1 = false
		}
		
		if(click == true) {
		playFX();
		click = false
		}
		
		///////
		//Audio		
		///////
		
		if(sanicplay ==  true){
		sanic.play();
		sanicplay = false
		}
		
		if(smokeplay == true){
		smoke.play();
		smokeplay = false
		} 
		
		if(obabyplay == true){
		obaby.play();
		obabyplay = false
		}
		
		if(xfilesplay == true){
		xfiles.play();
		xfilesplay = false
		}
		
		if(airhornplay == true){
		airhorn.play();
		airhornplay = false
		}
		
		if(wowplay == true){
		wow.play(); 
		wowplay = false
		}
		//instructions
		
		if(screen == 2) {
		ctx.drawImage(instructions, 0, 0, 640, 480);
		}
		
		
		//disclaimer
		
		if(screen == 3) {
		ctx.fillText('this is a disclaimer')
		}

		
		
		
		
		
		
		
		
		
		//grid stuff
		
		//var g = whatever
		
		
		//for(var i=0; i < w; i= i + sizeG)
		{
			//ctx.beginPath()
			//ctx.moveTo(i, 80);
			//ctx.lineTo(i, h)
			//ctx.stroke();
			//ctx.closePath();
			}
			
			//for(var i=0; i < h; i= i + sizeG)
		{
			//ctx.beginPath()
			//ctx.moveTo(0, i);
			//ctx.lineTo(w, i)
			//ctx.stroke();
			//ctx.closePath();
			}
		
		
		//var gx = 320
		//var gy = 240
		//var angle = Math.atan((my-gy)/(mx-gx))
		
		//ctx.save()
		
		//ctx.translate(gx, gy)
		//ctx.rotate(angle);
		//ctx.drawImage(fps, 0, 0, 260, 260);
		
		//ctx.restore()

		
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
	
	
	//gun sound
	if(0 < mx && mx < 640 && 0 < my && my < 480 && screen == 1) {
	click = true
	}	
	
	/////////////////
	/////////
	//1st game run through
	//////////
	////////////////
	
	//shot target1
	if(targetX[0] + speeds[0] < mx && mx < targetX[0] + speeds[0] + 90 && 155 < my && my < 255 && targethit[0] == false && screen == 1) {
	targethit[0] = true
	click1 = true
	smokeplay = true
	}
	
	//shot target2
	if(targetY[0] - speeds[1] < my && my < targetY[0] - speeds[1] + 125 && 270 < mx && mx < 370 && targethit[1] == false && screen == 1) {
	targethit[1] = true
	click1 = true
	obabyplay = true
	}
	
	//shot target3
	
	if(targetX[1] - speeds[2] < mx && mx < targetX[1] - speeds[2] + 80 && 10 < my && my < 110 && targethit[2] == false && screen == 1) {
	targethit[2] = true
	click1 = true
	airhornplay = true
	}
	
	//shot target4
	
	if(targetX[2] + speeds[3] < mx && mx < targetX[2] + speeds[3] + 80 && 0 < my && my < 100 && targethit[3] == false && screen == 1) {
	targethit[3] = true
	click1 = true
	click1 = true
	sanicplay = true
	}
	
	//shot target5
	
	if(435 < mx && mx < 535 && 45 < my && my < 145 && targethit[4] == false && screen == 1) {
	targethit[4] = true
	click1 = true
	airhornplay = true
	}
	
	//shot target6
	
	if(430 < mx && mx < 605 && 230 < my && my < 405 && targethit[5] == false && screen == 1) {
	targethit[5] = true
	wowplay = true
	}
	
	//shot target7
	
	if(75 < mx && mx < 175 && 250 < my && my < 400 && targethit[6] == false && screen == 1) {
	targethit[6] = true
	click1 = true
	xfilesplay = true
	}
	
	/////////////////
	/////////
	//2nd game run through
	//////////
	////////////////
	
	//shot target1
	if(targetX[0] + speeds[0] < mx && mx < targetX[0] + speeds[0] + 90 && 155 < my && my < 255 && targethit[0] == true && targethit[1] == true && 
	targethit[2] == true && targethit[3] == true && 
	targethit[4] == true && targethit[5] == true && 
	targethit[6] == true && targethit2[0] == false && screen == 1) {
	targethit2[0] = true
	click1 = true
	smokeplay = true
	}
	
	//shot target2
	if(targetY[0] - speeds[1] < my && my < targetY[0] - speeds[1] + 125 && 270 < mx && mx < 370 && targethit[0] == true && targethit[1] == true && 
	targethit[2] == true && targethit[3] == true && 
	targethit[4] == true && targethit[5] == true && 
	targethit[6] == true && targethit2[1] == false && screen == 1) {
	targethit2[1] = true
	click1 = true
	obabyplay = true
	}
	
	//shot target3
	
	if(targetX[1] - speeds[2] < mx && mx < targetX[1] - speeds[2] + 80 && 10 < my && my < 110 && targethit[0] == true && targethit[1] == true && 
	targethit[2] == true && targethit[3] == true && 
	targethit[4] == true && targethit[5] == true && 
	targethit[6] == true && targethit2[2] == false && screen == 1) {
	targethit2[2] = true
	click1 = true
	airhornplay = true
	}
	
	//shot target4
	
	if(targetX[2] + speeds[3] < mx && mx < targetX[2] + speeds[3] + 80 && 0 < my && my < 100 && targethit[0] == true && targethit[1] == true && 
	targethit[2] == true && targethit[3] == true && 
	targethit[4] == true && targethit[5] == true && 
	targethit[6] == true && targethit2[3] == false && screen == 1) {
	targethit2[3] = true
	click1 = true
	sanicplay = true
	}
	
	//shot target5
	
	if(435 < mx && mx < 535 && 45 < my && my < 145 && targethit[0] == true && targethit[1] == true && 
	targethit[2] == true && targethit[3] == true && 
	targethit[4] == true && targethit[5] == true && 
	targethit[6] == true && targethit2[4] == false && screen == 1) {
	targethit2[4] = true
	click1 = true
    airhornplay = true
	}
	
	//shot target6
	
	if(430 < mx && mx < 605 && 230 < my && my < 405 && targethit[0] == true && targethit[1] == true && 
	targethit[2] == true && targethit[3] == true && 
	targethit[4] == true && targethit[5] == true && 
	targethit[6] == true && targethit2[5] == false && screen == 1) {
	targethit2[5] = true
	click1 = true
	wowplay = true
	}
	
	//shot target7
	
	if(75 < mx && mx < 175 && 250 < my && my < 400 && targethit[0] == true && targethit[1] == true && 
	targethit[2] == true && targethit[3] == true && 
	targethit[4] == true && targethit[5] == true && 
	targethit[6] == true && targethit2[6] == false && screen == 1) {
	targethit2[6] = true
	click1 = true
	xfilesplay = true
	}
	
	
	
	
	
	
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

	


      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
   
   

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	
	
		if(key == 37 && drawstart == true) { 
		
		drawstart = false
		drawinstruct = true
		

		}
		
		if(key == 39 && drawstart == true) {
		
		drawstart = false
		drawdisc = true
		
		
		}
		
		
		if(key == 39 && drawinstruct == true) {
		
		drawstart = true
		drawinstruct = false
		
		}
		
		
		if(key == 37 && drawdisc == true) { 
		
		drawdisc = false
		drawstart = true
		
		
		}
		
		var hx = [];
		function playHX(){
		hx.push(new Audio('menuhoversound.wav'));
		if (buttondown == true)
		hx[hx.length - 1].play();
		buttondown = false
		}
		
		if((key == 37) || (key == 39)) {
		
		buttondown = true
		playHX();
		
		
		}
	
		if(key == 13 && drawinstruct == true) {
		
		screen = 2
		
		}
	
		if(key == 13 && drawstart == true) {
		
		screen = 1
		
		}
		
		if(key == 27 && (screen == 1 || screen == 2)) {
		
		screen = 0
		restart = true

		}
		
		if(key == 82) {
		restart = true
		}
		
		if(restart == true) {
   		
   		targethit = [false, false, false, false, false, false, false];
		targethit2 = [false, false, false, false, false, false, false];
		targethit3 = [false, false, false, false, false, false, false];
  		targetX = [4, 180, 0];
  		targetY = [235];
  		speeds = [0, 0, 0, 0, 0, 0, 0];
  		timer = 0;
  		stop = false 
  		restart = false
  		boxmove = 0; 
  		boxstart = 500;
  		begin = true
  		dudu.currentTime = '0'
  		
  		}
					
		
	}, false);




})

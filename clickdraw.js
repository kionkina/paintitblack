//Karina Ionkina                                                                                  
//SoftDev2 pd07                                                                                   
//K00 -- I See a Red Door                                                                          
//2018-02-03  



var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var draw_dot;
var draw_box;

var clr = document.getElementById("clear");
var tog = document.getElementById("toggle");

clr.addEventListener("click", function(e) { clrCanvas(e);});
tog.addEventListener("click", function() { togl(); });
c.addEventListener("click", function(e) { draw(e); });


var draw = function(e){
    if (typeof draw_dot != 'number'){
	{
	draw_dot = 1;
	draw_box = 0;
	return drawCircle(e);
	}
    }
    else {
	if (draw_dot === 1){
	    console.log("drawing cirlce . . .")
	    return drawCircle(e);
	}
	else {
	    return drawRect(e);
	}
    }
}

var clrCanvas = function(e){
    e.preventDefault();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 600, 600);
}

var togl = function(e){
    console.log(" draw_dot was...");
    console.log(draw_dot);
       if (draw_dot === 1){
    	draw_dot = 0;
    	draw_box = 1;
       }
        else {
    	draw_box = 0;
    	draw_dot = 1;
        }
        console.log(" draw_dot is now...");
        console.log(draw_dot);
    }

var drawCircle = function(e){
	ctx.beginPath();
	console.log(e.clientX);
	ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
	ctx.stroke();
	ctx.fillStyle = 'green';
	ctx.fill();
	return;
}

    var drawRect = function(e){
	ctx.fillStyle = "black";
	ctx.fillRect(e.clientX, e.clientY, 10, 10);
    }
	


//for (i=0; i<10; i++){
//  if (i%2 === 0){
//ctx.fillStyle = "#FFF089";
//ctx.fillRect(i, i, 200, 200); }
//  else {
//ctx.fillStyle = "#FBB009";
//ctx.fillRect(i, i, 200, 200);
//  }
//}


//ctx.beginPath();
//ctx.arc(100, 100, 35, 0, Math.PI * 2);
//ctx.stroke();
//ctx.fillStyle = 'green';
//ctx.fill();
//ctx.beginPath();
//ctx.arc(100, 110, 15, 0, Math.PI);
//ctx.fillStyle = 'white';
//ctx.fill();
//ctx.beginPath();
//ctx.arc(87, 100, 6, 0, Math.PI * 2);
//ctx.stroke();
//ctx.fillStyle = 'black';
//ctx.fill();
//ctx.beginPath();
//ctx.arc(115, 100, 6, 0, Math.PI * 2);
//ctx.stroke();
//ctx.fillStyle = 'black';
//ctx.fill();

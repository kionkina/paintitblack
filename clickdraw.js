//Karina Ionkina and Dasha Shifrina                                                                            
//SoftDev2 pd07                                                                                   
//K00 -- I See a Red Door                                                                          
//2018-02-03  & 2018-02-05


var x1;
var y1;

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

	    drawCircle(e);

	}
	else {

	    drawRect(e);
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

    ctx.arc(e.offsetX, e.offsetY, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.closePath();


    return;
}

var drawRect = function(e){
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillRect(e.offsetX, e.offsetY, 10, 10);
    ctx.stroke();
    ctx.moveTo(e.offsetX,e.offsetY);
    ctx.closePath();

}

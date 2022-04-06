var lastPositionx, lastPositiony;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "blue";
Width_of_line= 2;

var width=screen.width;
var newWidth=screen.width-20
var newheight=screen.height-20

if(width<992){
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", etouchStart);

function etouchStart(e) {
    color = document.getElementById("colorinput").value;
    Width_of_line = document.getElementById("widthinput").value;
    lastPositionx=e.touches[0].clientX- canvas.offsetLeft;
    lastPositiony=e.touches[0].clientY- canvas.offsetTop;

}

canvas.addEventListener("touchmove", etouchmove);

function etouchmove(e)
{
    
    color = document.getElementById("colorinput").value;
    console.log(color);
    
    
    newtouch_x = e.touches[0].clientX - canvas.offsetLeft;
    newtouch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width_of_line;
        ctx.moveTo(lastPositionx, lastPositiony);
        ctx.lineTo(newtouch_x , newtouch_y);
        ctx.stroke();
    
    lastPositionx=newtouch_x;
    lastPositiony=newtouch_y;


    console.log("X = " + newtouch_x + " ,Y =  " + newtouch_y);   
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

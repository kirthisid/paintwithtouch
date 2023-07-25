canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
linewidth = 3;
color = "blue";


width = screen.width
newWidth = width - 70
newheight = screen.height - 300
if (width < 990) {
    canvas.width = newWidth
    canvas.height.newheight
}

newx = 0;

newy = 0
lastx = 0
lasty = 0




canvas.addEventListener("touchstart", mytouchstart)
function mytouchstart(e) {
    lastx = e.touches[0].clientX - canvas.offsetLeft
    lasty = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", mytouchmove)
function mytouchmove(e) {
    newx = e.touches[0].clientX - canvas.offsetLeft
    newy = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(lastx, lasty)
    ctx.lineTo(newx, newy)
    ctx.stroke()

    lastx = newx
    lasty = newy
}
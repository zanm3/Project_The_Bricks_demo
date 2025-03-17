 function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    //draw a circle
    ctx.beginPath();
    ctx.arc(75, 75, 10, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    clear();
    
    circle(x, y, 10);
    
    if (x + dx > WIDTH (-r)|| x + dx < 0 (+r))
    
    dx = -dx;
    
    if (y + dy > HEIGHT (-r)|| y + dy < 0 (+r))
    
    dy = -dy;
    
    x += dx;
    
    y += dy;
}
function drawIt() {
    let x = 150;
    let y = 150;
    let dx = 2;
    let dy = 4;
    let ctx;
    let canvas
    function init() {
    
    canvas=document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    return setInterval(draw, 10); //klic funkcije draw vsakih 10 ms; http://www.w3schools.com/jsref/met_win_setinterval.asp
    }
    function draw() {
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
    x += dx;
    y += dy;
    }
    init();

    clear();
    
    circle(x, y, 10);
    
    if (x + dx > WIDTH (-r)|| x + dx < 0 (+r))
    
    dx = -dx;
    
    if (y + dy > HEIGHT (-r)|| y + dy < 0 (+r))
    
    dy = -dy;
    
    x += dx;
    
    y += dy;
}
window.onload(draw());
window.onload(drawIt()); 
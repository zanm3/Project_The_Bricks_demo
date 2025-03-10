// koda pobrana iz učilnice

function drawBall(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // narišemo žogico

    ctx.beginPath();
    ctx.arc(75,75,10,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

function ballMovement(){
    let x = 150;
    let y = 150;
    let dx = 2;
    let dy = 4;
    let canvas;
    let ctx;
    function init(){
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        return setInterval(drawBall, 10) // klic funkcije draw vsakih 10 ms;
    }
    function drawBall(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.arc(x,y,10,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
        x += dx;
        y += dy;
    }
    init();
}
const canvas = document.getElementById("gameContainer");
const ctx = canvas.getContext("2d");
const swordImg = new Image();
swordImg.src = "../img/sword.png";

swordImg.onload = function(){
    const angle = Math.PI / 4;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.save();

    ctx.translate(centerX, centerY);

    ctx.rotate(angle);

    ctx.restore();
    ctx.drawImage(swordImg,450,700,100,100);
}
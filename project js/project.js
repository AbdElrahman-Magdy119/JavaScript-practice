
 const canvas = document.querySelector("#pong");
 const ctx = canvas.getContext("2d");

 const paly_height = 100;
 const play_width = 20;
 const ball_start_speed = 0.5;
 const com_level = 0.2;
 const ball_delta_speed = 0.1;

const player = {
   x: 0,
   y: canvas.height / 2 - paly_height / 2,
   width: play_width,
   height: paly_height,
   color: "#FE7235",
   score: 0,
};

const computer = {
     x: canvas.width - play_width,
     y: canvas.height / 2 - paly_height / 2,
     width: play_width,
     height:paly_height,
     color:"#02C2FF",
     score:0,
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: ball_start_speed,
    velocityX: 5,
    velocityY: 5,
    color: "gray",
};

const net ={
    x: canvas.width / 2 - 1,
    y:0,
    width: 2,
    height: 10,
    color: "rgb(192, 190, 190)",
};

function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}
  drawRect(0,0, canvas.width, canvas.height, "gray");

function drawCircle(x, y ,r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x , y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}
//drawCircle(100, 100, 50, "WHITE");



function drawtext(text, x, y, color){
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text, x, y);
}
//drawtext("korsat x Parmaga", 200, 300, "WHITE");

function drawnet(){
    for(let i=0; i<= canvas.height;i += 15){
        drawRect(net.x, net.y +i , net.width, net.height, net.color);
    }
}

function render(){
     drawRect(0, 0, canvas.width, canvas.height, "#111727");

     drawnet();

    drawtext(player.score,canvas.width / 4.5,canvas.height / 5,"#FFA837");
    drawtext(computer.score, (3* canvas.width) /4, canvas.height / 5,"#FFA837");

    drawRect(player.x, player.y, player.width, player.height, player.color);
    drawRect(computer.x, computer.y, computer.width, computer.height, computer.color);

    drawCircle(ball.x,ball.y,ball.radius,ball.color);
}

function collision(b,p) {
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x +b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x +p.width;

    return (
        b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom
    );
}

function resetBall(){
    ball.x = canvas.width /2;
    ball.y = canvas.height /2;
    ball.speed = ball_start_speed;
    ball.velocityX = -ball.velocityX;

}
 
canvas.addEventListener("mousemove", (e) => {
    if(paused) return;

    let rect = canvas.getBoundingClientRect();

    player.y = e.clientY - rect.top - player.height / 2;
});


function lerp(a,b,t){
    return a+(b-a)*t;
}


let paused = false;

function updata(){

    if(paused) return;

    ball.x += ball.velocityX * ball.speed;
    ball.y += ball.velocityY * ball.speed;

    if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0)
    {
         ball.velocityY = -ball.velocityY;
    }

    let selectedplayer = ball.x < canvas.width / 2 ? player : computer;
    if(collision(ball, selectedplayer))
    {
        ball.velocityX = -ball.velocityX;
        ball.speed += ball_delta_speed;
    }

   let targetpos = ball.y - computer.height / 2;
   let currentpos = computer.y;
   computer.y = lerp(currentpos , targetpos , com_level);

    if(ball.x - ball.radius < 0){
        computer.score++;
        if(computer.score == 1)
        {
            gameover();
            computer.score=0;
            player.score=0;
            clearInterval(r);
           
        }
        resetBall();
    }
    else if(ball.x + ball.radius > canvas.width)
    {+
        player.score++;
        if(player.score == 1)
        {
            Win();
            computer.score=0;
            player.score=0;
            clearInterval(r);
          
        }
        resetBall();
    }

}




function game(){
 updata();
 render();
}

const fps = 60;
var r = setInterval(game, 1000 / fps);


const pausebtn = document.querySelector("#pause");

pausebtn.addEventListener("click", ()=> {
    if(pausebtn.innerHTML === "Resume")
    {
        pausebtn.innerHTML = "pause";
        paused = false;
    }
    else
    {
        pausebtn.innerHTML = "Resume";
        paused = true;
    }
});


function gameover()
{
    
    var div = document.createElement("div");
    var pragraph = document.createElement("p")
    var text = document.createTextNode("Game Over");
    pragraph.append(text);
    div.classList.add("over");
    pragraph.classList.add("pra")
    div.append(pragraph)
    body =document.getElementById("body");
    var p = document.getElementById("parent");
    var pause = document.getElementById("pause");
    p.style.display="none";
    pause.style.display="none"
    
    var button = document.createElement("button");
    var button_text = document.createTextNode("Play Again");
    button.appendChild(button_text);
    button.classList.add("but");
    body.append(div);
    button.setAttribute("onclick","ok()");
    var home = document.createElement("button");
    var home_text = document.createTextNode("Home");
    home.appendChild(home_text);
    home.classList.add("home");
    home.setAttribute("onclick","backtohome()");
    body.append(button);
    body.append(home);
}
function Win()
{
    
    var div = document.createElement("div");
    var pragraph = document.createElement("p")
    var text = document.createTextNode("You Win");
    pragraph.append(text);
    div.classList.add("over");
    pragraph.classList.add("pra")
    div.append(pragraph)
    body =document.getElementById("body");
    var p = document.getElementById("parent");
    var pause = document.getElementById("pause");
    p.style.display="none";
    pause.style.display="none"
    body.append(div);
    var button = document.createElement("button");
    var button_text = document.createTextNode("Play Again");
    button.appendChild(button_text);
    button.classList.add("but");
    button.setAttribute("onclick","ok()");
    var home = document.createElement("button");
    var home_text = document.createTextNode("Home");
    home.appendChild(home_text);
    home.classList.add("home");
    home.setAttribute("onclick","backtohome()");
    body.append(button);
    body.append(home);
}

function ok()
{
    location.reload();

}
function backtohome()
{

}
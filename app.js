let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","green","purple"];

let started = false;
let lvl = 0;

let h2 =document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        lvlUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function lvlUp(){
    userSeq = [];
    lvl++;
    h2.innerText = `Level ${lvl}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn); 
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        document.querySelector("body").style.backgroundColor = "lightgreen";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        if(userSeq.length == gameSeq.length){
            setTimeout(lvlUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${lvl}</b> <br> Press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "lightcoral";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    btnFlash(this);
    usercolor = this.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    lvl = 0;
}
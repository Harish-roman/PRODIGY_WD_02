const btnStartStop = document.querySelector(".startstop");
const btnReset = document.querySelector(".reset");
const btnLap = document.querySelector(".lap");
const bLaps = document.querySelector(".laps");
const btimer = document.querySelector(".timer");
const scr = document.querySelector(".stopwatch");

let hrs=min=sec=ms=0,startTimer;
let isRunning = false;
let laps=[];

btnStartStop.addEventListener('click',function(){

    if(!isRunning){
        startTimer=setInterval(()=>{
            ms++;
            updateDisplay();
            if(ms == 100){
                sec++;
                ms=0;
            }
            if(sec == 60){
                min++;
                sec=0;
            }
            if(min == 60){
                hrs++;
                min=0;
            }
        },10);
        btnStartStop.textContent= 'stop';
        isRunning = true;
    }
    else{
        clearInterval(startTimer);
        btnStartStop.textContent='start';
        isRunning=false;
    }
    
});

btnReset.addEventListener('click',function(){
    hrs=min=sec=ms=0;
    clearInterval(startTimer);
    updateDisplay();
    btnStartStop.textContent="start";
    bLaps.textContent='';
});

btnLap.addEventListener('click',function(){
    if(isRunning){
        const lapElement = document.createElement('li');
        const lapTime = `${formatTime(hrs)}:${formatTime(min)}:${formatTime(sec)}.${formatTime(ms)}`;;
        lapElement.textContent = lapTime;
        bLaps.appendChild(lapElement);
    }
    else{
        if(hrs,min,sec,ms != "00"){
            isRunning = true;
        }
    }
    
});

function updateDisplay(){


    document.querySelector(".hrs").innerHTML=formatTime(hrs);
    document.querySelector(".min").innerHTML=formatTime(min);
    document.querySelector(".sec").innerHTML=formatTime(sec);
    document.querySelector(".ms").innerHTML=formatTime(ms);
}

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

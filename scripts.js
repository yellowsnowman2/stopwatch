let seconds = 00; 
  let tens = 00; 
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
  let StartBtn = document.getElementById('startint');
  let StopBtn = document.getElementById('endint');
  let ResetBtn = document.getElementById('resetint');
  let Interval ;

  StartBtn.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    StopBtn.onclick = function() {
       clearInterval(Interval);
  }
  

  ResetBtn.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

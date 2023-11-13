let set;
let watchtime = 0;

function starttime (){
    let timestart = Date.now() - watchtime;
   // console.log(Date.now());
       set = setInterval(() => {
        watchtime  = Date.now() - timestart;
        let millisec = Math.floor((watchtime % 1000) / 10);
        let sec = Math.floor((watchtime % (1000 * 60)) / 1000);
        let min = Math.floor((watchtime % (1000 * 60 * 60)) / (1000 * 60));
        let hr = Math.floor(watchtime / (1000 * 60 * 60));
          if(hr < 10) hr= "0" + hr;
          if(min < 10) min = "0" + min;
          if(sec < 10) sec = "0" + sec;
        time.innerText  = ` ${watchtime}
        ${hr}:${min}:${sec}:${millisec}`;
    //    console.log(watchtime);
       },10);
        
       
       document.getElementById("start").disabled = true;
     //  document.getElementById("stop").disabled = false;
}

let universal = document.getElementById("startstop");
let time = document.getElementById("timer");
let i = 1;
universal.addEventListener("click" ,(e) => {
   let event = e.target.innerText;
  // e.target.disabled = true;
   if(event === "Start"){
    starttime();
   }
   else if(event === "Stop"){
    clearInterval(set);

   /* X e.target.parent.children[0].disabled = false; */
    document.getElementById("start").disabled = false;
    //   document.getElementById("stop").disabled = true;
   }
   else{
    clearInterval(set);
    time.innerText  = "00:00:00";
    document.getElementById("start").disabled = false;
   //  document.getElementById("stop").disabled = false;
   }
});


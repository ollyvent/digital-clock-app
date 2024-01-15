// variables to target the hour, minutes, seconds and AM-PM elements
const hourEl = document.getElementById('hour');
const minnutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const amPmEl = document.getElementById('am-pm');

// function to get real time data
function updateClock(){
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
        
    let amPm = 'AM';

   
    // condition to update the am-pm element
    if(hr>12){
        hr=hr-12;
        amPm='PM'

     // condition to add 0 before hour if less than 10
     if(hr<10){
        hr= '0' + hr
    }else{
        hr=hr
    }

    // condition to add 0 before minute if less than 10
    if(min<10){
        min= '0' + min
    }else{
        min=min
    }

    // condition to add 0 before second if less than 10
    if(sec<10){
        sec= '0' + sec
    }else{
        sec=sec
    }

    }
    hourEl.innerText = hr;
    minnutesEl.innerText = min;
    secondsEl.innerText = sec;
    amPmEl.innerText = amPm;

    // call function every 1 minute
    setTimeout(()=>{
        updateClock()
    }, 1000)

}

//call funcion to update time
updateClock()
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
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();
    
console.log(date)
//We pull out what we require from the date object using methods
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
    
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec)

//Indicative of the position of the arms of the clock
let hrPosition = (hr * 360/12) + (min * (360/60)/12); /* In order to get the hour hand to follow the minute hand we need to take the current hour degrees and add to them the number of minutes that are added to the clock.  And then, divide all of that by 12 to get this component */

let minPosition = (min * 360/60) + (sec *(360/60)/60); /* Convert to degrees and divide cureent minutes in an hour.In order to get the minute hand to follow the seconds hand we need to take the current minute degrees and add to them the number of seconds that are added to the clock.  And then, divide all of that by 60 to ge this component */

let secPosition = sec * 360/60;  //We convert to degrees first and divide by secs in current minute

//Helps us change the script into a dynamic one
function runTheClock(){
    
    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60); 
    secPosition = secPosition + 6;
    
    //Using jQuery Selector we position the hands of the clock
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


// Interval is set for us to run the script every second
//setInterval's default run time is per millisecond
var interval = setInterval(runTheClock, 1000)

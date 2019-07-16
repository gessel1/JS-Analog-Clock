const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Indicative of the position of the arms of the clock
let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;



HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
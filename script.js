const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Indicative of the position of the arms of the clock
let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

//Our date object that we can manipulate as required using the info the browser gives us
var date = new Date();

//We pull out what we require from the date object using methods
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();


HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"

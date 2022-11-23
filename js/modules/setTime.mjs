import {hours, minutes, seconds} from "./getElements.mjs";

export function setTime() {
  let date = new Date();
  let setHours = date.getHours();
  let setMinutes = date.getMinutes();
  let setSeconds = date.getSeconds();

  //For when returned hours/minutes/seconds are single digits
  if (setSeconds < 10) {
    setSeconds = `0${setSeconds}`;
  }
  if (setMinutes < 10) {
    setMinutes = `0${setMinutes}`;
  }
  if (setHours < 10) {
    setHours = `0${setHours}`;
  }

  hours.innerText = setHours;
  minutes.innerText = setMinutes;
  seconds.innerText = setSeconds;
  
}
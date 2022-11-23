import {setTime} from "./modules/setTime.mjs";
import {mode} from "./modules/mode.mjs";

//Run the digital clock
setTime();
setInterval(setTime, 1000);

/* 
  Dark/Light mode based on the time of the day
    Light: 06:00:00 - 17:59:59
    Dark: 18:00:00 - 05:59:59
*/
mode();
setInterval(mode, 1000);
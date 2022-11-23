export function mode() {
  //Get current hour
  let hour = new Date().getHours();

  if (hour >= 6 && hour < 18) {

    //Light mode
    document.body.style.backgroundColor = "#f6f6f6";
    document.body.style.color = "#222";
  }
  else {
    
    //Dark mode
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#f6f6f6";
  }
}
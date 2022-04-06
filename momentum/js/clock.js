const clock = document.querySelector("h2#clock");

function getClock(){
   const date = new Date();
   //const hours = String(date.getHours()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");

   let hours = date.getHours();
   let AMPM = hours >= 12 ? "PM" : "AM";
   hours = hours % 12;
   hours = hours ? hours : 12;

   clock.innerText = `${hours}:${minutes}:${seconds} ${AMPM}`;

   //clock.classList.remove("hidden");
   //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


getClock()
setInterval (getClock, 1000); // 1000 -> 1 sec


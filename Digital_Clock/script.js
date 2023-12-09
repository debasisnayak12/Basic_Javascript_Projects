const timer = document.getElementById("clock");
setInterval(()=>{
  const date = new Date();
  timer.innerHTML = date.toLocaleTimeString();
},1000);
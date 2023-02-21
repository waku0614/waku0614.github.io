let deg = 0;
setInterval(() => {
  const img = document.getElementById("szpp-img");
  img.style.transform = `rotate(${deg}deg)`;
  deg = deg + 1;
}, 1)
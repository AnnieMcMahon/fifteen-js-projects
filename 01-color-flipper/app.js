const colors = ["green", "red", "rgba(133,122,200)", "#F15025"];
const getRandomNumber = (num) => Math.floor(Math.random() * num);

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber(colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]; 
});
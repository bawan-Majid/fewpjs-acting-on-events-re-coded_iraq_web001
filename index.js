// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
console.log(dodger.style.left);
console.log(dodger.style.bottom); 
dodger.style.bottom = "100px";

document.addEventListener("keydown", function(e) {
  console.log(e.key);
});
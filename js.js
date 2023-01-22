const bob = document.querySelector(".face");
let count = 0;
bob.addEventListener("click", function moveBob() {
  count += 50; //count =count +50
  bob.style.left = count + "px";
});
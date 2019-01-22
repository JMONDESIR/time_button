let container = document.getElementById("container");
container.innerHTML = Date();
let button = document.getElementById("button");
button.addEventListener("click", () => {
  container.innerHTML = Date();
});

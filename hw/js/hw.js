var change = document.querySelectorAll("nav a");
document.addEventListener("click", switchT);

function switchT(event) {
  event.preventDefault();
  if (event.target.matches("nav a")) {
    for (let item of change) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");//question to why use event and not item?
  }
}



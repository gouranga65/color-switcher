const body = document.querySelector("body");
const buttons = document.querySelectorAll(".box").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    } else event.target.id === "white";
    body.style.backgroundColor = event.target.id;
  });
});

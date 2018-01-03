var buttonElt = document.createElement("button");
buttonElt.textContent = "Hello!";
document.querySelector("div").appendChild(buttonElt);

buttonElt.addEventListener("click", ajout);
function action() {
  console.log("Hello World!");
}

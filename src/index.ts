import "./style.css";
import Carpet from "./sierpinski-carpet.png";

function component() {
  const element = document.createElement("h1");
  element.innerHTML = ["Sierpinski Carpet", "Starter Pack"].join(" ");
  element.classList.add("red");
  return element;
}

function image() {
  const element = document.createElement("div")
  const image = new Image();
  image.src = Carpet;
  element.appendChild(image);
  return element
}

const root = document.getElementById('root')

root?.appendChild(component());
root?.appendChild(image())

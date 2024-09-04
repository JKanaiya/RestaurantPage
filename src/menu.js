import knuckleSandwich from "./images/knuckle_sandwich.jpg";
import pancakes from "./images/pexels-ash-craig-122861-376464.jpg";
import potatoes from "./images/pexels-ella-olsson-572949-1640772.jpg";
import steak from "./images/pexels-vanmalidate-769289.jpg";
import burger from "./images/pexels-valeriya-1639562.jpg";
function populateMenu() {
  let content = document.getElementById("content");
  let container = document.createElement("div");
  content.appendChild(container);
  container.setAttribute("id", "container");
  let images = [pancakes, potatoes, steak, burger, knuckleSandwich];
  let descriptions = [
    "Fluffy Pancakes",
    "Potoato Fries",
    "Rich Steak",
    "Quality Burger",
    "Knuckle Sandwich",
  ];
  let i = 0;
  images.forEach((val) => {
    let c = document.createElement("div");
    c.setAttribute("class", "imgContainer");
    container.appendChild(c);
    let b = document.createElement("img");
    b.src = val;
    let d = document.createElement("h2");
    d.textContent = descriptions[i];
    c.appendChild(b);
    c.appendChild(d);
    i++;
  });
}
export default populateMenu;

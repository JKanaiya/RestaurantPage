import "./styles.css";
import populateHome from "./home";
import populateContact from "./contact";
import populateMenu from "./menu";
let content = document.getElementById("content");
populateHome();
function clear() {
  content.innerHTML = "";
}
document.getElementById("menu").addEventListener("click", () => {
  clear();
  populateMenu();
});
document.getElementById("home").addEventListener("click", () => {
  clear();
  populateHome();
});
document.getElementById("contact").addEventListener("click", () => {
  clear();
  populateContact();
});

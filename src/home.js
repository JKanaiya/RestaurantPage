function populateHome() {
  let content = document.getElementById("content");
  let h1 = document.createElement("h1");
  h1.textContent = "TWO RIVERS";
  let h2 = document.createElement("h2");
  h2.textContent = "Restaurant";
  content.appendChild(h1);
  content.appendChild(h2);
}
export default populateHome;

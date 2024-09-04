import WOTmap from "./images/WOTmap.jpeg";
import phone from "./images/phone.png";
import mapIcon from "./images/map-marker-alert.png";
function placeContact() {
  let content = document.getElementById("content");
  let cContainer = document.createElement("div");
  cContainer.setAttribute("id", "cContainer");
  content.appendChild(cContainer);
  let map = document.createElement("img");
  map.src = WOTmap;
  cContainer.appendChild(map);
  let phoneI = document.createElement("img");
  phoneI.src = phone;
  let mImg = document.createElement("img");
  mImg.src = mapIcon;
  let contacts = document.createElement("div");
  cContainer.appendChild(contacts);
  contacts.appendChild(mImg);
  contacts.appendChild(phoneI);
}
export default placeContact;

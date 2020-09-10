import h from "./modules/create-element.js";
import checkToken from "./modules/checkToken.js";
import navBar from "./modules/nav-bar.js";
import home from "./modules/home.js";

//this is where we put stuff on the page!
const body = document.querySelector("body");
//if false, signup/login + logo
const token = checkToken();
if (token) {
  const header = h("header", {}, navBar());
  body.append(header);
} else {
  body.append(home());
}

import h from "./modules/create-element.js";
import checkToken from "./modules/checkToken.js"
import navbar from "./modules/nav-bar.js"
import loginForm from "./modules/login-form.js"

//this is where we put stuff on the page!
const body = document.querySelector("body");
//if false, signup/login + logo
const token = checkToken()
if (token) {
    const header = h("header",{}, navbar());
    body.append(header);
} else {
    body.append(loginForm())

}
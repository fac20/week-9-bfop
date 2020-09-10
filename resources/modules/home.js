import h from "./create-element.js";
import signUpForm from "./sign-up-form.js";
import loginForm from "./login-form.js";

const home = () => {
  const mainEl = h("main", {});

  const imageEl = h("img", { src: "./resources/images/burn-book.png", alt: "Burn book image" });

  const signUpEl = h(
    "button",
    {
      onclick: () => {
        const signUpFormEl = signUpForm();
        mainEl.innerHTML = "";
        mainEl.append(imageEl, signUpFormEl);
      },
    },
    "Sign Up"
  );
  const loginEl = h(
    "button",
    {
      onclick: () => {
        const loginFormEl = loginForm();
        mainEl.innerHTML = "";
        mainEl.append(imageEl, loginFormEl);
      },
    },
    "Log In"
  );

  mainEl.append(imageEl, signUpEl, loginEl);
  return mainEl;
};

export default home;

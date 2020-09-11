import h from "./create-element.js";
import { login } from "./api.js";

//username, password
const loginForm = () => {
  const welcomeEl = h("main", {});
  const form = h(
    "form",
    {
      id: "loginForm",
      onsubmit: (event) => {
        //need a lot more stuff!!!
        event.preventDefault();
        const username = event.target.elements.loginForm__username.value;
        const password = event.target.elements.loginForm__password.value;
        login(username, password)
          .then((user) => {
            window.localStorage.setItem("fetch-is-not-a-thing", user.access_token);
            const welcomeMessage = h("span", {}, `You go ${user.name} Coco`);
            welcomeEl.append(welcomeMessage);
            // loginFormEl.replaceWith(welcomeEl)
            location.reload();
          })
          .catch((err) => {
            console.log("Incorrect Username / Password"); //tell user try again please
          });
      },
    },
    h(
      "label",
      { for: "loginForm__username" },
      "Username:",
      h("span", { "aria-hidden": "true" }, "*")
    ),
    h("input", { id: "loginForm__username", required: "required", placeholder: "Username" }), //if required doesnt work, try empty string for value
    h(
      "label",
      { for: "loginForm__password" },
      "Password:",
      h("span", { "aria-hidden": "true" }, "*")
    ),
    h("input", {
      id: "loginForm__password",
      type: "password",
      name: "loginForm__password",
      placeholder: "Password",
      "aria-label": "Password",
      required: "",
    }),
    h("button", { type: "submit" }, "Log In")
  );
  return form;
};

export default loginForm;
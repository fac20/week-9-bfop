import h from "./create-element.js";
import { signup } from "./api.js";

function signUpForm() {
  // label - username
  const usernameLabelEl = h(
    "label",
    { for: "sign-up-form__username" },
    "Username:",
    h("span", { "aria-hidden": "true" }, "*")
  );
  // input - username
  const usernameInputEl = h("input", {
    id: "sign-up-form__username",
    required: "required",
    placeholder: "Username",
  });
  // label - cohort
  const cohortLabelEl = h(
    "label",
    { for: "sign-up-form__cohort" },
    "Cohort:",
    h("span", { "aria-hidden": "true" }, "*")
  );
  // input - cohort
  const cohortInputEl = h("input", { id: "sign-up-form__cohort", placeholder: "Cohort" });
  // label - password
  const passwordLabelEl = h(
    "label",
    { for: "sign-up-form__password" },
    "Password:",
    h("span", { "aria-hidden": "true" }, "*")
  );
  // input - password
  const passwordInputEl = h("input", {
    id: "sign-up-form__password",
    required: "required",
    placeholder: "Password",
  });
  // button - sign up
  const submitButtonEl = h("button", { type: "submit" }, "Sign up");

  return h(
    "form",
    {
      id: "signUpForm",
      onsubmit: (event) => {
        event.preventDefault();
        const username = event.target.elements["sign-up-form__username"].value;
        const cohort = event.target.elements["sign-up-form__cohort"].value;
        const password = event.target.elements["sign-up-form__password"].value;
        console.log(username, cohort, password);
        signup(username, password, cohort).then((user) => {
          window.localStorage.setItem("fetch-is-not-a-thing", user.access_token);
          // Draw all facts page with appropriate function
        });
      },
    },
    usernameLabelEl,
    usernameInputEl,
    cohortLabelEl,
    cohortInputEl,
    passwordLabelEl,
    passwordInputEl,
    submitButtonEl
  );
}

export default signUpForm;

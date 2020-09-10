import h from "./create-element.js"
import {login} from "./api.js"

//username, password
const loginForm = () => {

  const welcomeEl = h("main", {});
    const form = h("form", {
      id: "loginForm",
      onsubmit: (event) => {
        //need a lot more stuff!!!
        event.preventDefault();
        const username = event.target.elements.loginForm__username.value;
        const password = event.target.elements.loginForm__password.value;
        login(username, password).then((user) => {
          window.localStorage.setItem("fetch-is-not-a-thing", user.access_token);
          const welcomeMessage = h("span", {}, `You go ${user.name} Coco`);
          welcomeEl.append(welcomeMessage)
          // loginFormEl.replaceWith(welcomeEl)
        }).catch(err => {
          console.log("Incorrect Username / Password") //tell user try again please
        });  
      },
    },
    h("label", { for: "loginForm__username"},"Username:", h("span", { "aria-hidden": "true"}, "*")),
    h("input", { id: "loginForm__username", required: "required"}),//if required doesnt work, try empty string for value
    h("label", {for: "loginForm__password"}, "Password:", h("span", {"aria-hidden": "true"}, "*")),
    h("input", {id: "loginForm__password", type: "password", name: "loginForm__password", placeholder: "Password", "aria-label": "Password", required: "" }),
    h("button", {type: "submit"}, "Log In") 
  )
  return form;
}

export default loginForm;
/*
<form id="loginForm">
  <label for="loginForm__username">Username:<span aria-hidden="true">*</span></label>
  <input id="loginForm__username" required>
  <label for="loginForm__password">Password:<span aria-hidden="true">*</span></label>
  <input id="loginForm__password" type="password" name="loginForm__password" placeholder="Password" "aria-label": "Password" required>
  <button type="submit">Log In</button>
  </form>
*/

/*
  function LoginForm() {
    return h(
      "form",
      {
        id: "loginForm",
        onsubmit: (event) => {
          event.preventDefault();
          const email = event.target.elements.email.value;
          const password = event.target.elements.password.value;
          login(email, password).then((user) => {
            // save the access token in localStorage so the user stays logged in
            window.localStorage.setItem("dogs-token", user.access_token);
  
            // show the welcome message instead of the form
            const messageEl = h("span", {}, `Hello ${user.name}`);
            welcomeEl.innerHTML = "";
            welcomeEl.append(messageEl, logoutEl);
            loginFormEl.replaceWith(welcomeEl);
          });
        },
      },
      h("label", { for: "email" }, "Email"),
      h("input", {
        id: "email",
        type: "email",
        name: "email",
        placeholder: "Email",
      }),
      h("label", { for: "password" }, "Password"),
      h("input", {
        id: "password",
        type: "password",
        name: "password",
        placeholder: "Password",
        "aria-label": "Password",
      }),
      h("button", {}, "Log in")
    );

/*
<body>
<h1>Create an account</h1>
<form action="URL" method="POST">
  <label for="email">Email<span aria-hidden="true">*</span></label>
  <input id="email" type="email" aria-describedby="emailError" required />
  <div id="emailError" class="error"></div>

  <label for="password">Password<span aria-hidden="true">*</span></label>
  <div id="passwordRequirements" class="requirements">Passwords must contain at least one number, and be at least 8 characterslong.
  </div>
  <input id="password" type="password" aria-describedby="passwordRequirements passwordError" required pattern=".*\d.*" minlength="8"/>
  <div id="passwordError" class="error"></div>
  <button>Sign up</button>
</form>
*/

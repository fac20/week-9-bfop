import h from "./create-element.js"

//username, password
const loginForm = () => {
    const form = h("form", {})
    
    

}
/*
export function login(email, password) {
    return request("https://dogs-rest.herokuapp.com/v1/users/login/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "content-type": "application/json" },
    });
  }


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



// const p = h("p", { className: "test" }, "Some text content", childNode);

//login form button which calls to loginForm()
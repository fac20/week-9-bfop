import fetchHelper from "./fetch-helper.js"

const login = (username, password) => {
    return fetchHelper("login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-type": "application/json" },
    });
}

//do we need to set cohort as an empty string
const signup = (username, cohort, password) => {
  return fetchHelper("signup", {
    method: "POST",
    body: JSON.stringify({ username, cohort, password }),
    headers: { "content-type": "application.json" },
  });
};

export {login, signup}

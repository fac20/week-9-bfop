import fetchHelper from "./fetch-helper.js";

export const login = (username, password) => {
  return fetchHelper("login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "content-type": "application/json" },
  });
};

//do we need to set cohort as an empty string
export const signup = (username, cohort, password) => {
  return fetchHelper("signup", {
    method: "POST",
    body: JSON.stringify({ username, cohort, password }),
    headers: { "content-type": "application.json" },
  });
};

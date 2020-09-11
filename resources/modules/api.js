import fetchHelper from "./fetch-helper.js";

const login = (username, password) => {
  return fetchHelper("login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "content-type": "application/json" },
  });
};

//do we need to set cohort as an empty string
const signup = (username, password, cohort) => {
  return fetchHelper("signup", {
    method: "POST",
    body: JSON.stringify({ username, password, cohort }),
    headers: { "content-type": "application/json" },
  });
};

const addFact = (text_content, about_who, token) => {
  return fetchHelper("facts", {
    method: "POST",
    body: JSON.stringify({ text_content, about_who }),
    headers: { "content-type": "application/json", authorization: `Bearer ${token}` },
  });
};

const deleteFactFromAPI = (id, token) => {
  return fetchHelper(`facts/${id}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` }
  })
}

export { login, signup, addFact , deleteFactFromAPI };

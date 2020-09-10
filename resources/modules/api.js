import fetchHelper from "./fetch-helper.js"

const login = (username, password) => {
    return fetchHelper("login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-type": "application/json" },
    });
}

// export const getUser = (token) => {
//     return fetchHelper("https://dogs-rest.herokuapp.com/v1/users/me/", {
//       headers: { authorization: `Bearer ${token}` },
//     });
//   }

export { login };
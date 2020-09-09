import h from "./modules/create-element.js";

const navBar = () => {
  const searchButton = h("button", {}, "search");

  const randomButton = h("button", {}, "random gossip");
  const allFactsButton = h("button", {}, "all the gossip");
  const searchInput = h("input", {}, "which bitch?", searchButton);
  const logoutButon = h("button", {onclick: logout()}, "logout");
  const addFactButton = h("button", {}, "+");

  return h(
    "nav",
    {},
    randomButton,
    allFactsButton,
    searchInput,
    searchButton,
    logoutButon,
    addFactButton
  );
};

const logout = () => {
    window.localStorage.removeItem("access_token")
    // remove HTML
    // load landing page
}

export default navBar;

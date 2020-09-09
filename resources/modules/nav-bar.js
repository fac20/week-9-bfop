import h from "./modules/create-element.js";

const navBar = () => {
  const searchButton = h("button", {}, "search");

  const randomButton = h("button", {}, "random gossip");
  const allFactsButton = h("button", {}, "all the gossip");
  const searchInput = h("input", {}, "which bitch?", searchButton);
  const logoutButon = h("button", {}, "logout");
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

export default navBar;
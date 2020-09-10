import h from "./modules/create-element.js";
import addFact from "./modules/add-fact.js";
import fetchHelper from "./modules/fetch-helper.js";

const navBar = () => {
  const searchButton = h(
    "button",
    { onclick: search(event.target.parentElement.value) },
    "search"
  );

  const randomButton = h("button", { onclick: randomFact() }, "random gossip");
  const allFactsButton = h("button", { onclick: allFacts() }, "all the gossip");
  const searchInput = h("input", {}, "which bitch?", searchButton);
  const logoutButton = h("button", { onclick: logout() }, "logout");
  const addFactButton = h("button", { onclick: addFact() }, "+");

  return h(
    "nav",
    {},
    randomButton,
    allFactsButton,
    searchInput,
    searchButton,
    logoutButton,
    addFactButton
  );
};

//----- Button functions -----
const search = (name) => {
  const factsArray = fetchHelper(`facts/name/${name}`, {});
  // Populate page with factsArray
};

const randomFact = () => {
  const fact = fetchHelper(`facts/random`, {});
  // Populate page with fact
};

const allFacts = () => {
  const factsArray = fetchHelper("facts/", {});
  // Populate page with factsArray
};

const logout = () => {
  window.localStorage.removeItem("access_token", {});
  // remove HTML
  // load landing page
};

export default navBar;

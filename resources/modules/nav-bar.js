import h from "./create-element.js";
// import addFact from "./modules/addFact.js";
import fetchHelper from "./fetch-helper.js";

const navBar = () => {
  const searchButton = h(
    "button",{ 
      onclick: () => {
        search(event.target.previousSibling.value)
      } 
    },
    "search"
  );

  const randomButton = h("button", { onclick: randomFact() }, "random gossip");
  const allFactsButton = h("button", { onclick: allFacts() }, "all the gossip");
  const searchInput = h("input", { placeholder: "which bitch?" }, searchButton);
  const logoutButton = h("button", { onclick: logout() }, "logout");
  const addFactButton = h("button", {
    // onclick: addFact()
   }, "+");

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
  // const factsArray = fetchHelper(`facts/name/${name}`, {});
  return fetchHelper(`facts/name/${name}`, {}).then(facts => console.log(facts));
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
  window.localStorage.removeItem("fetch-is-not-a-thing", {});
  location.reload();
};

export default navBar;

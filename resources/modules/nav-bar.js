import h from "./modules/create-element.js";
import addFact from "./modules/addFact.js";

const navBar = () => {
  const searchButton = h(
    "button",
    { onclick: search(event.target.parentElement.value) },
    "search"
  );

  const randomButton = h("button", { onclick: randomFact() }, "random gossip");
  const allFactsButton = h("button", { onclick: allFacts() }, "all the gossip");
  const searchInput = h("input", { placeholder: "which bitch?" }, searchButton);
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

const fetchHelper = (url) => {
  return fetch(`https://fun-facs-api.herokuapp.com/${url}`)
    .then((response) => {
      if (!response.ok) {
        const error = new Error("HTTP Error");
        error.status = response.status;
        throw error;
      } else {
        return response.json();
      }
    })
    .catch((error) => {
      console.error(error);
      // Draw a message to page to inform user of error
    });
};
//----- Button functions -----
const search = (name) => {
  const factsArray = fetchHelper(`facts/name/${name}`);
  // Populate page with factsArray
};

const randomFact = () => {
  const fact = fetchHelper(`facts/random`);
  // Populate page with fact
};

const allFacts = () => {
  const factsArray = fetchHelper("facts/");
  // Populate page with factsArray
};

const logout = () => {
  window.localStorage.removeItem("access_token");
  // remove HTML
  // load landing page
};

export default navBar;

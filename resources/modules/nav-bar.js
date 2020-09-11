import h from "./create-element.js";
import addFactForm from "./add-fact.js";
import fetchHelper from "./fetch-helper.js";
import drawFacts from "./draw-facts-to-page.js";

const navBar = () => {
  const searchButton = h(
    "button",
    {
      onclick: () => {
        search(event.target.previousSibling.value);
      },
    },
    "search"
  );

  const randomButton = h("button", { onclick: () => randomFact() }, "random gossip");
  const allFactsButton = h("button", { onclick: () => allFacts() }, "all the gossip");
  const searchInput = h("input", { placeholder: "which bitch?", type: "search" }, searchButton);
  const logoutButton = h("button", { onclick: () => logout() }, "logout");
  const addFactButton = h(
    "button",
    {
      onclick: () => {
        const addFactEl = addFactForm();
        const body = document.querySelector("body");
        body.append(addFactEl);
      },
    },
    "+"
  );

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
  //case sensitive - change in API if time permits
  fetchHelper(`facts/name/${name}`, {}).then((facts) => {
    drawFacts(facts);
  });
};

const randomFact = () => {
  fetchHelper(`facts/random`, {}).then((fact) => {
    drawFacts([fact]);
  });
  // Populate page with fact
};

const allFacts = () => {
  fetchHelper("facts/", {}).then((facts) => {
    drawFacts(facts);
  });
};

const logout = () => {
  window.localStorage.removeItem("fetch-is-not-a-thing", {});
  location.reload();
};

export default navBar;

import h from "./create-element.js";
import checkMain from "./check-main.js";
import checkToken from "./checkToken.js";
import { deleteFactFromAPI } from "./api.js";
import { allFacts } from "./nav-bar.js";

//this function uses what is returned from API and throws it on the page
const drawFacts = (array) => {
  const main = checkMain();
  const factContainer = h("section", {});
  array.forEach((fact) => {
    // name
    const name = h("h3", {}, fact.about_who);
    // fact
    const factText = h("p", {}, fact.text_content);
    // edit button
    const button_edit = h(
      "button",
      { class: "article__button--edit", "aria-label": "edit", onclick: () => editFact() },
      h("span", { "aria-hidden": true }, "✎")
    );
    // delete button
    const button_delete = h(
      "button",
      {
        class: "article__button--delete",
        "aria-label": "delete",
        id: `fact${fact.id}`,
        onclick: (event) => {
          deleteFact(event.target.parentElement.id);
        },
      },
      h("span", { "aria-hidden": true }, "☠")
    );
    factContainer.append(
      h(
        "article",
        {},
        name,
        factText,
        h("span", { class: "article__buttons" }, button_edit, button_delete)
      )
    );
  });
  main.append(factContainer);
};

const editFact = () => {
  //allow user to edit the fact. set innerHTML ???
  //get id of fact
  //send a put request to the API
  //make sure to include authorization header including our token
  //refresh our facts
};

const deleteFact = (id) => {
  const token = checkToken();
  const factID = id.replace("fact", "");
  deleteFactFromAPI(factID, token);
  allFacts();
};
//weird bug, where if deleting from add new post page, it still shows up in all Gossip

export default drawFacts;

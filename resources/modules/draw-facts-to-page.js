import h from "./create-element.js";

const checkMain = () => {
  const mainBody = document.querySelector("main");
  if (mainBody) {
    mainBody.innerHTML = "";
    return mainBody;
  } else {
    const mainCard = h("main", {});
    document.body.append(mainCard);
    return mainCard;
  }
};

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
      { "aria-label": "edit", onclick: () => editFact() },
      h("span", { "aria-hidden": true }, "✎")
    );
    // delete button
    const button_delete = h(
      "button",
      { "aria-label": "delete", onclick: () => deleteFact() },
      h("span", { "aria-hidden": true }, "☠")
    );
    factContainer.append(h("article", {}, name, factText, button_edit, button_delete));
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

const deleteFact = () => {
  //get id of fact
  //send a delete request to the API
  //make sure to include authorization header including our token
  //refresh our facts
};

export default drawFacts;

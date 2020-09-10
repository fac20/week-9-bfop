import h from "./create-element.js";

//this function uses what is returned from API and throws it on the page
const drawFacts = (array) => {
  const mainCard = h("main", {}); //queryselector if main is already there
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
  mainCard.append(factContainer);
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

/*
<main>
    <h2>Here are some facts!</h2>
    <section>
        <article id="fact${user.id}">
            <h3>${user.about_who}</h3>
            <p>${user.text_content}</p>
            <button aria-label="edit" onclick='editFunction()'><span aria-hidden='true'>✎</span></button>
            <button aria-label="delete" onclick="deleteFunction()"><span aria-hidden="true">☠</span></button>
        </article>
    </section>
</main>
*/

/* [
  {
    "id": 1,
    "owner_id": 1,
    "text_content": "She paints her black dots on",
    "about_who": "mrsladybug"
  },
  {
    "id": 2,
    "owner_id": 2,
    "text_content": "He wears a wig!",
    "about_who": "mrladybug"
  },
  ...
*/

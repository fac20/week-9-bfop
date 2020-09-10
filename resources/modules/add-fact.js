import h from "./create-element.js";
import checkMain from "./check-main.js";
import { addFact } from "./api.js";

const addFactForm = () => {
  const main = checkMain();
  console.log("here");
  // Image
  const img = h("img", { src: "./resources/images/burn-book.png" });
  // input with a label
  const nameLabel = h("label", { for: "name" }, "which bitch?");
  const name = h("input", { id: "name", class: "form__input--name", name: "name" });
  // input with a label
  const newFactLabel = h("label", { for: "new_fact" }, "what the fetch");
  const newFact = h("input", { id: "new_fact", class: "form__input--new_fact", name: "new_fact" });
  // submit button
  const submitButton = h("button", { type: "submit" }, "+");
  // form
  const form = h(
    "form",
    {
      onsubmit: (event) => {
        const name = event.target.elements.name.value;
        const factText = event.target.elements.new_fact.value;
        addFact(name, factText);
      },
    },
    nameLabel,
    name,
    newFactLabel,
    newFact,
    submitButton
  );

  main.append(img, form);
};

export default addFactForm;

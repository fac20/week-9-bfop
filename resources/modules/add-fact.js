import h from "./create-element.js";
import { addFact } from "./api.js";

const addFactForm = () => {
  // Image
  const img = h("img", { src: "./resources/images/burn-book.png", alt: "Burn book image" });
  // input with a label
  const nameLabel = h("label", { for: "name" }, "which bitch?");
  const name = h("input", { id: "name", class: "form__input--name", name: "name" });
  // input with a label
  const newFactLabel = h("label", { for: "new-fact" }, "what the fetch");
  const newFact = h("input", { id: "new-fact", class: "form__input--new-fact", name: "new-fact" });
  // submit button
  const submitButton = h("button", { type: "submit" }, "+");
  // form
  const form = h(
    "form",
    {
      onsubmit: () => {
        event.preventDefault();
        const token = localStorage.getItem("fetch-is-not-a-thing");
        const text_content = event.target.elements["new-fact"].value;
        const about_who = event.target.elements.name.value;

        addFact(text_content, about_who, token);
        // .then(data => direct user to facts page);
      },
    },
    nameLabel,
    name,
    newFactLabel,
    newFact,
    submitButton
  );

  return h("main", {}, img, form);
};

export default addFactForm;

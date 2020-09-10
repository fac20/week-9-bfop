import h from "./create-element.js";

const addFact = () => {
  // Image
  const img = h("img", { src: "./resources/images/burn-book.png" });
  // input with a label
  const nameLabel = h("label", { for: "name" }, "which bitch?");
  const name = h("input", { id: "name", class: "form__input--name", name: "name" });
  // input with a label
  const newFactLabel = h("label", { for: "new-fact" }, "what the fetch");
  const newFact = h("input", { id: "new-fact", class: "form__input--new-fact", name: "new-fact" });
  // submit button
  const submitButton = h("button", {}, "+");
  // form
  const form = h("form", {}, nameLabel, name, newFactLabel, newFact, submitButton);

  return h("main", {}, img, form);
};

export default addFact;

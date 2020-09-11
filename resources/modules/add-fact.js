import h from "./create-element.js";
import checkMain from "./check-main.js";
import checkToken from "./checkToken.js";
import { addFact } from "./api.js";
import drawFacts from "./draw-facts-to-page.js";

const addFactForm = () => {
  const main = checkMain();
  // Image
  const img = h("img", { src: "./resources/images/burn-book.png", alt: "Burn book image" });
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
        event.preventDefault();
        const token = checkToken();
        const text_content = event.target.elements.new_fact.value;
        const about_who = event.target.elements.name.value;

        addFact(text_content, about_who, token).then((fact) => {
          drawFacts([fact]);
        });
      },
    },
    nameLabel,
    name,
    newFactLabel,
    newFact,
    submitButton
  );
    const egg = h("marquee",{}, "She doesn't even go here!")
  main.append(img, form,egg);
  return main;
};

export default addFactForm;

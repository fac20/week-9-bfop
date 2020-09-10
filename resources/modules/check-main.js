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

export default checkMain;

const h = (tag, props, ...children) => {
    const el = document.createElement(tag);
    for (let name in props) {
      if (name in el) {
        el[name] = props[name];
      } else {
        el.setAttribute(name, props[name]);
      }
    }
    el.append(...children);
    return el;
}

export default h;
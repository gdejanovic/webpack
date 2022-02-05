export function component() {
  let element = document.createElement("div");
  let content = document.createTextNode("Just testing new webpack config");
  element.appendChild(content);

  return element;
}

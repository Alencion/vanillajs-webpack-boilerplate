import App from "./app.js";

window.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.querySelector("#root");
  rootEl.innerHTML = new App();
});

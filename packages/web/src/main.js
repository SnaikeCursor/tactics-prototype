import { renderChoice } from "./index.js";

const status = document.getElementById("status");

if (status) {
  status.textContent = `ok:${renderChoice(1, ["ready"])}`;
}

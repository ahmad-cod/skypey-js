import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App.jsx";
import "./index.css";
import store from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () => {
  fancyLog()
  return root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
render();

store.subscribe(render)

function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇", "background: purple; color: #FFF; font-size: 20px; font-weight: bold");
  console.log(store.getState());
}
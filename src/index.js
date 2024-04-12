import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById("root")
);

function print() {
  return <p> hello world</p>;
}
export default print;

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.render(<App />,document.getElementById("root"));

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);

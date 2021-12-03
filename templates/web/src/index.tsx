import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

export const test = (): string => "Hola";

ReactDOM.render(<App />, document.getElementById("root"));

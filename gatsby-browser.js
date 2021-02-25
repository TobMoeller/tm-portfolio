import React from "react";
import { ContextProvider } from "./src/components/Context/ContextProvider";
import "./src/utils/personal.css";

export function wrapPageElement({ element }) {
  return <ContextProvider>{element}</ContextProvider>;
}

// export function onRouteUpdate({ location }) {
//   console.log(location);
// }

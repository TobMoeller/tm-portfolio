import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTheme } from "../Context/ContextProvider";

export default function Layout({ children, sections }) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <div className={`themewrapper ${theme}`}>
        <Header sections={sections} />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

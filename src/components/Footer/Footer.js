import React from "react";
import "./Footer.css";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <React.Fragment>
      <footer style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <p>
            <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutz</Link>
          </p>
        </div>
        <h5>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </h5>
      </footer>
    </React.Fragment>
  );
}

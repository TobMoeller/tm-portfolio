import React from "react";
import { useLanguage } from "../Context/ContextProvider";
import "./NotFoundSection.css";

export default function NotFoundSection() {
  const language = useLanguage();
  return (
    <section id="notfound">
      <div className="content">
        <h2>{language === "de" ? "404 - Nicht gefunden!" : "404 - Not Found!"}</h2>
        <p>
          {language === "de"
            ? "Entschuldigung, wir konnten nicht finden, wonach Sie gesucht haben."
            : "Sorry, we couldn't find what you're looking for."}
        </p>
      </div>
    </section>
  );
}

import React, { useContext, useState } from "react";

const LanguageContext = React.createContext("en");
const LanguageUpdateContext = React.createContext();
const ThemeContext = React.createContext("darktheme");
const ThemeUpdateContext = React.createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageUpdate() {
  return useContext(LanguageUpdateContext);
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ContextProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("darktheme");
  const switchTheme = () => {
    setTheme(theme === "darktheme" ? "lighttheme" : "darktheme");
  };

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={setLanguage}>
        <ThemeContext.Provider value={theme}>
          <ThemeUpdateContext.Provider value={switchTheme}>{children}</ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
}

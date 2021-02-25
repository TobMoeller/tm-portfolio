import Typography from "typography";
import moragaTheme from "typography-theme-moraga";

const typography = new Typography({
  ...moragaTheme,
  bodyColor: "var(--main-obj-color)",
  headerColor: "var(--main-header-color)",
  overrideThemeStyles: () => ({
    a: {
      fontWeight: 400,
      color: "var(--main-link-color)", // #419eda
      textDecoration: "none",
      transition: "all ease 0.5s",
    },
    "a:hover": {
      color: "var(--main-link-color)", // #2a6496
      textDecoration: "underline",
    },
  }),
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;

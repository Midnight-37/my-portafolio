// useTheme.js
import { useContext } from "react";
import { ThemeContext } from "../controllers/theme_context";

export const useTheme = () => useContext(ThemeContext);

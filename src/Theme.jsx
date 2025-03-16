import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  return localStorage.getItem("theme") || "dark-theme";
};


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  // Toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark-theme", newTheme === "dark-theme");
  };

  // Apply theme when component mounts
  useEffect(() => {
    document.documentElement.className = theme; 
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

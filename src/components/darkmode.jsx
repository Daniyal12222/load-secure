import React from "react";
import { useState, useEffect } from "react";

function Switch({ toggleTheme: toggleThemeFromProps, currentTheme }) {
  const [theme, setTheme] = useState(currentTheme || localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [currentTheme]);

  const handleToggleTheme = () => {
    if (toggleThemeFromProps) {
      toggleThemeFromProps();
    } else {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="p-2 border rounded-full dark:!bg-amber-400 dark:!border-black border-amber-300"
    >
      {theme === "dark" ? "☀️" : "🌑"}
    </button>
  );
}

export default Switch;

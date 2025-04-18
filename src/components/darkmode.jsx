import React from "react";
import { useState, useEffect } from "react";

 function Switch() {
  const [theme, setTheme] = useState("light");
  const storedTheme = localStorage.getItem("theme");
  // dark mode
  useEffect(() => {
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
    console.log(storedTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="  !p-2 !border  dark:!bg-amber-400 top-4 right-2 "
    >
      {theme === "dark" ? "☀️" : "🌑"}
    </button>
  );
};

export default Switch;

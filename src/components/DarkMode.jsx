import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className=" shadow-none"
      variant="secondary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default DarkMode;

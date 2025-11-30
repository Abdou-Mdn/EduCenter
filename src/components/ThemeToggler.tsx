"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";


const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => setMounted(true), []);

    const handleClick = () => {
        if(theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    if(!mounted) return (
        <div className="bg-gray-300 rounded-full w-12 h-7 ring ring-border animate-pulse" />
    );
  
    return (
        <button 
            className="bg-background-200 rounded-full w-12 ring ring-border cursor-pointer"
            onClick={handleClick}
        >
            <div className={`rounded-full p-1 w-fit transition-all ${theme === "light" ? "ml-5 bg-accent" : "ml-0 bg-primary-200"}`}>
                { theme === "light" ? <Sun className="size-5" /> : <Moon className="size-5" /> }
            </div>
        </button>
    )
}

export default ThemeToggler
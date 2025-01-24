'use client';
import { DropdownMenu } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu"
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeToggle() {
  //const { setTheme } = useTheme();
  const { setTheme, theme } = useTheme();
    useEffect(()=>{
      console.log('ThemeToggle render : ' + theme)
    },[theme])

   return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"/>
                <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
            </Button>
        </DropdownMenuTrigger>  
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}> Light </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}> Dark </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}> System </DropdownMenuItem>
            <p className="text-red-600 font-semibold">Current theme: {theme}</p>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
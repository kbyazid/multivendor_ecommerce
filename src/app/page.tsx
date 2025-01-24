import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/themeToggle";
import { link } from "fs";
import Image from "next/image";

export default function Home() {
  return (  
    <div className="p-5">  
        <div className="w-100 flex justify-end ">
          <ThemeToggle/>
        </div>
        <div className="text-dark-500 font-bold text-3xl font-roboto">Welcome to the Course</div>
        <Button variant={"default"}>Click here </Button>
    </div>  
  );
}

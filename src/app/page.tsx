import { Button } from "@/components/ui/button";
import { UserButton } from '@clerk/nextjs'
import ThemeToggle from "@/components/shared/themeToggle";

export default function Home() {
  return (  
    <div className="p-5">  
        <div className="w-100 flex gap-x-5 justify-end ">
          <UserButton />
          <ThemeToggle/>
        </div>
        <div className="text-dark-500 font-bold text-3xl font-roboto">Home Page</div>
        {/* <Button variant={"default"}>Click here </Button> */}
    </div>  
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
    const { user } = useUser();

    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <img src="/empty.png" height={350} width={350} alt=""/>
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Nexa
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;
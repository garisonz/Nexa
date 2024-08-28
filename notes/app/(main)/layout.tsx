"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (!isAuthenticated) {
        return redirect("/")
    }
    return ( 
        <div className="h-full flex">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">
                {children}
            </main>
        </div>
     );
}
 
export default MainLayout;
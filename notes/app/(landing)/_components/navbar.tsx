"use client";

import { useConvexAuth } from "convex/react";
import { Logo } from "./logo";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className="flex items-center w-full p-6 bg-background z-50">
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex">
            {isLoading && (
                <p>Loading...</p>
            )}
            {!isAuthenticated && !isLoading && (
                <>
                    <SignInButton mode="modal">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </SignInButton>
                    <SignInButton mode="modal">
                        <Button size="sm">
                            Get Nexa Free
                        </Button>
                    </SignInButton>
                </>
            )}
            {isAuthenticated && !isLoading && (
                <>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/documents">
                            Enter Nexa
                        </Link>
                    </Button>
                    <UserButton
                        afterSignOutUrl="/"
                    />
                </>
            )}
            </div>
        </div>
    );
}
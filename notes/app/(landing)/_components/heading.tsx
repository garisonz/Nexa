"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Nexa</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Nexa is the connected space where <br />
                better, faster work happens.
            </h3>
            {isLoading && (
                <p>Loading ...</p>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Enter Nexa
                        <ArrowRight className="h-4 w-4 ml-1"/>
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get Nexa Free <ArrowRight className="h-4 w-4 ml-1"/>
                    </Button>
                </SignInButton>
            )}
        </div>
    );
}
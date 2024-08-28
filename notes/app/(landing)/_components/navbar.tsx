"use client";

import { Logo } from "./logo";

export const Navbar = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50">
            <Logo />
        </div>
    );
}
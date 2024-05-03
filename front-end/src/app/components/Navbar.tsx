"use client";

import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/"

function NavBar() {
    return <>
    </>
}

const items = [
    { label: "Dashboard", link: "/" },
    { label: "Transactions", link: "/transactions" },
    { label: "Manage", link: "/manage" }
];

function DesktopNavBar() {
    return <div className="hidden border-separate border-b bg-background md:block">
        <nav className="container flex items-center justify-between px-8">
            <div className="flex h-[80px] min-h-[60] items-center justify-between px-8">
                <Logo />
                <div className="flex h-full">
                    
                </div>
            </div>
        </nav>
    </div>
}

function NavBarItem({ link, label, onClick }: {link: string, label: string, onClick?: () => void}) {
    const pathname = usePathname();
    const isActive = pathname === link;

    return <div className="relative flex item-center">
        <Link 
            href={link}
            className={cn()}
        >
            {label}
        </Link>
    </div>
}

export default NavBar;
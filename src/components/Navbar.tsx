"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>

            <Link href="/" className="mx-7">
            <MenuItem item="Home" setActive={setActive} active={active}>
                
            </MenuItem>
            </Link>

            <Link href="/about-us" className="mx-7">
            <MenuItem item="About Us" setActive={setActive} active={active}>
                
            </MenuItem>
            </Link>

            <Link href="/contact-us" className="mx-7">
            <MenuItem item="Contact Us" setActive={setActive} active={active}>
                
            </MenuItem>
            </Link>

            <Link href="/repay" className="mx-7">
            <MenuItem item="Repay" setActive={setActive} active={active}>
                
            </MenuItem>
            </Link>
            

        </Menu>
    </div>
  )
}

export default Navbar
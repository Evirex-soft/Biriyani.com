"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
});

export const Navbar = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Scroll shrink effect detection
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // GSAP entry animation
    useGSAP(() => {
        if (navRef.current) {
            gsap.from(navRef.current, {
                y: -80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 
            ${isScrolled ? "py-2 md:py-3 backdrop-blur-[2px]" : "py-3 md:py-6"}`}
        >
            <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

                {/* Logo  */}
                <Link href="/" className="flex items-center gap-2 md:gap-3">
                    <Image
                        src="/images/logo1.svg"
                        alt="Biriyani Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                        className={`w-auto object-contain transition-all duration-300 ${isScrolled
                            ? "h-12 md:h-14"
                            : "h-16 md:h-20"}`}
                    />

                    <div className="flex flex-col leading-tight">
                        <span className="text-lg md:text-xl font-bold text-white">
                            Biriyani.com
                        </span>
                        <span
                            className={`${pacifico.className} text-[16px] md:text-[18px] text-[#cca43b]`}
                        >
                            Signature
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
                    {["Home", "Philosophy", "Menu", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-[#cca43b] transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cca43b] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <button className="ml-4 px-5 py-2 border border-white text-white rounded-full hover:bg-[#cca43b] hover:border-[#cca43b] hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-wider">
                        Reservations
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden flex flex-col gap-1.5 z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex items-center justify-center ${isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center gap-8 text-xl font-medium text-white px-6">
                    {["Home", "Philosophy", "Menu", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-[#cca43b] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <button className="mt-4 px-8 py-3 bg-[#cca43b] text-white rounded-full hover:bg-black transition shadow-lg">
                        Reservations
                    </button>
                </div>
            </div>

        </nav>
    );
};
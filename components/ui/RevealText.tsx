"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const RevealText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const el = useRef(null);

    useGSAP(() => {
        gsap.from(el.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            ScrollTrigger: {
                trigger: el.current,
                start: "top 90%"
            }
        });
    }, { scope: el });

    return (
        <div className="overflow-hidden">
            <div ref={el} className={className}>
                {children}
            </div>
        </div>
    )
}
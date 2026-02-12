"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const container = useRef(null);
    const imgRef = useRef(null);
    const textContainerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".animate-text", {
            yPercent: 120,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.6,
            stagger: 0.2,
        })
            .to(".animate-text", {
                filter: "blur(0px)",
                letterSpacing: "0px",
                duration: 1.2,
                stagger: 0.2,
            }, "<");
    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-50">
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div
                    ref={imgRef}
                    className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh]"
                >
                    <Image
                        src="/images/hero.png"
                        alt="Hero image"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-linear-to-b from-[#050505]/70 via-transparent to-[#050505]" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

            </div>

            {/* Content Layer */}
            <div
                ref={textContainerRef}
                className="relative z-10 flex flex-col items-center text-center text-white px-6 w-full max-w-5xl"
            >
                {/* Heading */}
                <div className="overflow-hidden mb-8 md:mb-12">
                    <h1 className="animate-text text-5xl md:text-8xl font-serif italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-linear-to-b from-white to-white/70">
                        Something Special <br /> Is Taking Shape
                    </h1>
                </div>

                {/* Decorative Line */}
                <div className="animate-text h-16 w-1px bg-linear-to-b from-transparent via-[#cca43b] to-transparent mb-8 md:mb-12 opacity-80" />

                {/* Body Text Group */}
                <div className="space-y-8 max-w-lg mx-auto">
                    <p className="animate-text text-base md:text-lg text-white/90 leading-relaxed font-light font-sans tracking-wide">
                        Great things deserve time, care, and attention to detail.
                        While our restaurant begins welcoming guests, our digital home is being thoughtfully crafted.
                    </p>

                    <p className="animate-text text-sm md:text-base text-[#cca43b] font-sans uppercase tracking-[0.2em] font-medium opacity-80">
                        We’re almost there. <br />
                        <span className="text-white/60 text-xs normal-case tracking-normal block mt-2">
                            Visit us in person — and return soon for the full online experience.
                        </span>
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-text absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-1px h-8 bg-linear-to-b from-white/30 to-transparent" />
            </div>
        </section>
    );
}
// app/page.tsx
"use client";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { OurStory } from "@/components/sections/OurStory";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  return (
    <div ref={container} className="bg-[#050505] text-[#e0e0e0] font-sans selection:bg-[#cca43b] selection:text-black">
      <Navbar />
      <Hero />

      {/* Philosophy */}
      <section id="philosophy" className="py-32 md:py-48 px-6 md:px-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Image with Parallax container */}
          <div className="relative aspect-3/4 md:aspect-4/5 overflow-hidden group">
            <div className="absolute inset-0 border border-[#cca43b]/20 z-10 m-4 transition-all duration-700 group-hover:m-0" />
            <Image
              src="/images/ext.jpg"
              alt="Chef Plating"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col justify-center items-start space-y-8 max-w-xl">

            <span className="text-[#cca43b] text-xs uppercase tracking-[0.3em] pl-3 border-l-2 border-[#cca43b]">
              Our Philosophy
            </span>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white">
              Where Heritage <br />
              <span className="italic text-white/50">
                Meets Mastery.
              </span>
            </h2>

            <p className="text-lg text-gray-400 font-light leading-relaxed">
              We believe exceptional cuisine is born at the crossroads of authentic tradition and refined craftsmanship.
              Every recipe we serve honors cultural roots while embracing contemporary technique.
              Our kitchen is not just a place of preparation — it is a space where passion, precision, and premium ingredients come together to create memorable dining experiences.
            </p>

            <a
              href="#story"
              className="text-xs uppercase tracking-[0.25em] border-b border-white/30 pb-2 hover:border-[#cca43b] hover:text-[#cca43b] transition-all"
            >
              Read Our Story
            </a>

          </div>

        </div>
      </section>

      {/* Our Story */}
      <OurStory />

      {/*  Featured Menu Item */}
      <section id="menu" className="py-20 border-y border-white/5 overflow-hidden relative">
        {/* Background decorative text */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
          <span className="text-[25vw] font-serif italic pr-10">Signature</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-5xl font-serif mb-6">
              The Kerala Biriyani Experience
            </h3>

            <div className="space-y-4">
              {[
                {
                  name: "Thalassery Chicken Biriyani",
                  desc: "Jeerakasala rice, fried onions, raisins"
                },
                {
                  name: "Kozhikode Beef Biriyani",
                  desc: "Malabar spices, ghee roast finish"
                },
                {
                  name: "Malabar Mutton Biriyani",
                  desc: "Slow-cooked, saffron, roasted cashews"
                },
                {
                  name: "Prawns Dum Biriyani",
                  desc: "Coastal spices, coconut essence"
                },
              ].map((dish, i) => (
                <div
                  key={i}
                  className="group flex justify-between items-baseline border-b border-white/10 py-4 hover:border-[#cca43b]/50 transition-colors cursor-pointer"
                >
                  <span className="text-xl font-serif group-hover:translate-x-2 transition-transform duration-300">
                    {dish.name}
                  </span>
                  <span className="text-xs text-gray-500 tracking-widest uppercase">
                    {dish.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="bg-[#cca43b] text-black px-8 py-4 text-xs uppercase tracking-widest hover:bg-white transition-colors">
                Explore Full Feast
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-162.5 h-87.5 md:h-125 relative mt-10 md:mt-0">
            <Image
              src="/images/int.jpg"
              alt="Kerala Biriyani"
              fill
              className="object-cover"
            />
          </div>


        </div>
      </section>


      {/* Interior*/}
      <section className="py-40 px-6">
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-6xl md:text-9xl font-serif italic text-white/20">The Space</h2>
            <p className="text-sm md:text-right max-w-xs text-gray-400 mt-4 md:mt-0">
              Designed to strip away the unnecessary, focusing the senses entirely on the plate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[80vh]">
            <div className="md:col-span-8 relative overflow-hidden group">
              <Image
                src="/images/ext1.jpg"
                alt="Interior" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="relative flex-1 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1663530761401-15eefb544889?q=80&w=880&auto=format&fit=crop"
                  alt="Detail" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
              <div className="bg-[#111] p-8 flex flex-col justify-center items-center text-center border border-white/5">
                <p className="font-serif italic text-2xl mb-4">"Authentic flavors, unforgettable moments."</p>
                <div className="w-8 h-px bg-[#cca43b]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/*  Grain Overlay  */}
      <div className="pointer-events-none fixed inset-0 z-9999 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  );
}
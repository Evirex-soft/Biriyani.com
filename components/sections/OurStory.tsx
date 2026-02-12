"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const OurStory = () => {
    const containerRef = useRef(null);
    const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            triggerRefs.current.forEach((el) => {
                if (!el) return;

                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !triggerRefs.current.includes(el)) {
            triggerRefs.current.push(el);
        }
    };

    return (
        <section ref={containerRef} id="story" className="py-32 px-6 md:px-20 bg-[#080808] border-t border-white/5">
            <div className="max-w-6xl mx-auto">

                {/* Intro Header */}
                <div className="mb-24 text-center max-w-3xl mx-auto space-y-8">
                    <span className="text-[#cca43b] text-xs uppercase tracking-[0.3em]">The Journey</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                        From Humble Fires to <br />
                        <span className="italic text-white/40">A Living Legacy</span>
                    </h2>
                    <div className="w-px h-16 bg-linear-to-b from-[#cca43b] to-transparent mx-auto opacity-50" />
                </div>

                {/* Narrative Grid */}
                <div className="space-y-32">

                    {/* Chapter 1: The Essence */}
                    <StoryBlock
                        refProp={addToRefs}
                        title="The Essence"
                        subtitle="Home, Heart, and Hospitality"
                    >
                        <p className="text-xl font-serif italic text-white/80 mb-6 leading-relaxed">
                            "Every meal begins the way it does at home — with love, patience, and care."
                        </p>
                        <p>
                            Our food is inspired by the kitchens we grew up in, where aromas filled the house,
                            recipes were shared across generations, and meals were meant to be enjoyed together.
                            From fragrant biriyanis and comforting chorru to fresh seafood, traditional breads,
                            and flavours touched by Arabic hospitality, each dish on our menu is prepared the
                            way we would serve our own family.
                        </p>
                        <p className="mt-4">
                            We believe good food doesn’t need to be complicated — it just needs honest ingredients,
                            time, and heart. That is what we strive to bring to your table every day.
                            Sit back, eat well, and feel at home.
                        </p>
                    </StoryBlock>

                    {/* Chapter 2: The Origin */}
                    <StoryBlock
                        refProp={addToRefs}
                        title="1984"
                        subtitle="The Fire and The Patience"
                    >
                        <p>
                            Long before there was a name, a signboard, or a restaurant, there was only fire,
                            patience, and a willingness to learn. In 1984, <strong className="text-[#cca43b]">Badarudeen</strong> stepped into the world of
                            cooking not with ambition, but with quiet dedication.
                        </p>
                        <p className="mt-4">
                            He began his life in kitchens where steam rose before dawn and vessels carried the
                            weight of honest labour. Standing beside the fire, he learned the language of food
                            the way our elders always did—by watching closely, listening carefully, and
                            remembering deeply.
                        </p>
                        <p className="mt-4">
                            From kitchens across India, he absorbed regional flavours, techniques, and traditions,
                            understanding that good food cannot be rushed. Over time, these experiences came
                            together as his own signature masala combinations, shaped not by written recipes,
                            but by instinct and years of practice.
                        </p>
                    </StoryBlock>

                    {/* Chapter 3: The Gathering */}
                    <StoryBlock
                        refProp={addToRefs}
                        title="The Gathering"
                        subtitle="Beyond Kitchen Doors"
                    >
                        <p>
                            Food was never meant to remain behind kitchen doors. It travelled into authentic
                            Kerala weddings, family gatherings, and festive occasions where large pots were
                            opened with care and everyone was served without measure.
                        </p>
                        <p className="mt-4">
                            These were meals prepared with responsibility, not performance—slow-cooked,
                            generously shared, and deeply familiar. These were not restaurant meals; they were
                            Kerala meals—served on banana leaves, carried by memory, and flavoured with the
                            warmth of elders and the comfort of home.
                        </p>
                    </StoryBlock>

                    {/* Chapter 4: The Legacy */}
                    <StoryBlock
                        refProp={addToRefs}
                        title="The Legacy"
                        subtitle="A Symbol of Gratitude"
                    >
                        <p>
                            A gentle yet defining change came when the younger generation of the family joined
                            the journey. They came with folded hands and open hearts to safeguard the soul of
                            the food that had shaped their home.
                        </p>
                        <p className="mt-4">
                            With humility and respect, the family gave form to a long-held dream and named it
                            <strong> Biriyani.com</strong>—a place where tradition was not recreated, but allowed to continue.
                        </p>
                        <p className="mt-4 pl-4 border-l-2 border-[#cca43b] text-gray-300 italic">
                            The logo carries the image of Mr. Badarudeen, not as a mark of ownership, but as a
                            symbol of gratitude from the younger generation to the man whose sacrifices,
                            discipline, and knowledge laid the foundation.
                        </p>
                    </StoryBlock>

                    {/* Chapter 5: The Evolution */}
                    <StoryBlock
                        refProp={addToRefs}
                        title="Today"
                        subtitle="Signature, Prime, & Express"
                    >
                        <p>
                            As trust grew, the journey widened. The family joined hands with like-minded well-wishers,
                            who became family by shared values. This togetherness led to the thoughtful evolution of
                            the brand into distinct expressions—<em>Signature, Prime, and Express</em>—each created to
                            serve different moments yet bound by the same culinary heart.
                        </p>
                        <p className="mt-4">
                            At <strong>Biriyani.com Signature</strong>, the journey finds its deepest meaning.
                            Every plate carries memory, discipline, and sincerity. This is not a story preserved
                            in words alone—it lives on wherever food is cooked with integrity and families find
                            a sense of home at the table.
                        </p>
                    </StoryBlock>

                </div>
            </div>
        </section>
    );
};

// Helper Sub-component for layout
const StoryBlock = ({
    title,
    subtitle,
    children,
    refProp
}: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    refProp: (el: HTMLDivElement | null) => void;
}) => (
    <div ref={refProp} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
        <div className="md:col-span-4 md:sticky md:top-32">
            <h3 className="text-5xl md:text-7xl font-serif text-[#cca43b]/50 mb-2">{title}</h3>
            <span className="text-white text-lg tracking-widest uppercase border-b border-[#cca43b] pb-2 inline-block">
                {subtitle}
            </span>
        </div>
        <div className="md:col-span-8 text-gray-400 font-light leading-relaxed text-lg">
            {children}
        </div>
    </div>
);
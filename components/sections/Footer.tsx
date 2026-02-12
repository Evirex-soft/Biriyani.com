import { ArrowRight } from 'lucide-react';
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
});

const Footer = () => {
    // CONFIGURATION DATA
    const siteConfig = {
        newsletter: {
            heading: (
                <>
                    Join the Inner Circle.
                </>
            ),
            placeholder: "Enter your email address",
        },
        columns: [
            {
                title: "Location",
                content: [
                    "Biriyani.Com Signature",
                    "NMG Tower",
                    "Vaikom Road",
                    "Kannankulangara",
                    "Tripunithura 682301"
                ],
            },
            {
                title: "Contact",
                content: [
                    "+91 7994537636",
                ],
            },
            {
                title: "Hours",
                content: [
                    "Mon - Sun",
                    "11:00 AM - 11:00 PM"
                ],
            },
            {
                title: "Socials",
                links: [
                    { label: "Instagram", href: "#" },
                    { label: "Twitter", href: "#" },
                    { label: "LinkedIn", href: "#" },
                ],
            },
        ],
        bottom: {
            copyright: "© 2026 Biriyani.com",
            tagline: "Designed for the Senses.",
        },
    };

    return (
        <footer id="contact" className="bg-[#cca43b] text-black pt-24 md:pt-32 pb-10 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24">

                {/* LEFT COLUMN: Newsletter */}
                <div className="w-full max-w-lg relative group">
                    <h3
                        className={`${pacifico.className} text-3xl md:text-5xl mb-12 leading-[0.9] tracking-tight`}
                    >
                        {siteConfig.newsletter.heading}
                    </h3>

                    <form className="relative flex items-center border-b border-black/30 py-4 transition-all duration-500 focus-within:border-black">
                        <input
                            type="email"
                            placeholder={siteConfig.newsletter.placeholder}
                            className="bg-transparent w-full placeholder:text-black/50 text-lg md:text-xl font-serif italic focus:outline-none focus:placeholder:opacity-0 transition-all"
                        />
                        <button
                            type="submit"
                            className="group/btn flex items-center gap-2 uppercase text-xs tracking-[0.2em] font-bold hover:opacity-70 transition-opacity"
                        >
                            Submit
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                    </form>
                </div>

                {/* RIGHT COLUMN: Information Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 w-full md:w-auto">
                    {siteConfig.columns.map((col, idx) => (
                        <div key={idx} className="flex flex-col">
                            <span className="mb-6 text-[10px] uppercase tracking-[0.25em] font-bold opacity-40">
                                {col.title}
                            </span>

                            {/* Render simple text content */}
                            {col.content && (
                                <div className="text-sm leading-6">
                                    {col.title === "Location" ? (
                                        <>
                                            <p className="text-sm md:text-base font-serif font-semibold mb-3 whitespace-nowrap">
                                                {col.content[0]}
                                            </p>

                                            <div className="text-black/70 space-y-1">
                                                {col.content.slice(1).map((line, i) => (
                                                    <p key={i}>{line}</p>
                                                ))}
                                            </div>
                                        </>
                                    ) : col.title === "Contact" ? (
                                        <a
                                            href={`tel:${col.content[0]}`}
                                            className="text-base font-medium tracking-wide hover:opacity-70 transition-opacity"
                                        >
                                            {col.content[0]}
                                        </a>
                                    ) : (
                                        col.content.map((line, i) => (
                                            <p key={i} className="text-black/70">
                                                {line}
                                            </p>
                                        ))
                                    )}
                                </div>
                            )}

                            {/* Render Links (Socials) */}
                            {col.links && (
                                <ul className="flex flex-col gap-2 text-sm uppercase tracking-widest font-medium">
                                    {col.links.map((link, i) => (
                                        <li key={i}>
                                            <a
                                                href={link.href}
                                                className="inline-block relative cursor-pointer hover:opacity-60 transition-opacity after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="mt-24 md:mt-32 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between md:items-center items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 text-center md:text-left">
                <p>{siteConfig.bottom.copyright}</p>

                <p>{siteConfig.bottom.tagline}</p>
            </div>
        </footer>
    );
};

export default Footer;
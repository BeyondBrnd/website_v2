'use client'
import Image from "next/image";
import React from "react";

export default function Footer() {
    return (
        <footer className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:min-h-0">
            <Image
                src="/bg_footer2.png"
                alt=""
                width={2074}
                height={536}
                className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-center lg:relative lg:h-auto"
                sizes="100vw"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#092e1d]/95 via-[#092e1d]/55 to-transparent pt-24">
                <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 pb-6 sm:px-6 md:flex-row md:items-center lg:px-8">
                    <div className="text-sm text-white/85">
                        © {new Date().getFullYear()} beyondbrnd • LinkedIn Growth & Personal Branding Agency
                    </div>
                    <a
                        href="https://www.linkedin.com/in/bhartichilkoti/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white transition-colors hover:text-[#a6f4c5]"
                    >
                        Connect with Bharti on LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}

"use client";
import Image from "next/image";

export default function LogoButton({src, alt, bg, link}) {
    const logobuttonstyle = "bg-[" + bg + "] p-2.5 rounded-xl mx-1"
    return ( 
        <a href={link} target="_blank">
            <Image 
                src={src}
                width={60}
                height={60}
                alt={alt}
                className={logobuttonstyle}
            />
        </a>
    );
  }
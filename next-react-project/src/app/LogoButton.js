"use client";
import Image from "next/image";

export default function LogoButton({src, alt, style, link}) {
    return ( 
        <a href={link} target="_blank">
            <Image 
                src={src}
                width={60}
                height={60}
                alt={alt}
                className={style}
            />
        </a>
    );
  }
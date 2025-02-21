"use client";
import Image from "next/image";

export default function LogoButton({src, alt, front_style, edge_style, link}) {
    return ( 
        <a href={link} target="_blank" className={edge_style}>
            <span className={front_style}>
                <Image 
                    src={src}
                    width={500}
                    height={500}
                    alt={alt}
                    className={"h-[40px]"}
                />
            </span>
        </a>
    );
  }
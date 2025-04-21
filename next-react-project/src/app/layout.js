import { Marvel } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import LogoButton from "./LogoButton";

const marvel = Marvel({ weight:'400', subsets: ["latin"] });

export const metadata = {
  title: "Elie Carlos",
  description: "Personal Website",
};

function Header() {
  return (
    <header className="py-1">
      <div className="container mx-auto px-4 w-50">
        <Nav />
        <div className="bg-green-700 p-5 shadow-[inset_0_4px_5px_rgba(0,0,0,0.6)]">
          <p className="text-[64px]">	&gt; eleanor "elie" carlos <span className="animate-blink">|</span></p>
        </div>
        <div className="flex items-center my-2">
          <LogoButtons />
          <Speaker />
        </div>
      </div>
    </header>
  );
}

function Nav(){
  const linkstyle = "block text-[#585858] text-[24px] font-bold bg-[#D9D9D9] py-2 px-3 will-change-transform transition duration-250 -translate-y-2 hover:-translate-y-1 active:translate-y-0";
  return (
    <nav className="flex items-center py-2.5">
      <div className="block flex-none items-center mx-2 bg-[#6E6E6E]">
        <Link href="/"><span className={linkstyle}>home</span></Link>
      </div>
      <div className="flex-none items-center mx-2 bg-[#6E6E6E]">
        <Link className={linkstyle} href="experience">experience</Link>
      </div>
      <div className="flex-none items-center mx-2 bg-[#6E6E6E]">
        <Link className={linkstyle} href="side_projects">side projects</Link>
      </div>
      <div className="flex-none items-center mx-2 bg-[#6E6E6E]">
        <Link className={linkstyle} href="contact_me">contact me</Link>
      </div>
    </nav>
  );
}

function LogoButtons(){
  return (
    <div className="flex items-center">
      <LogoButton 
        src="./LinkedIn_Logo_White.png" 
        alt="LinkedIn Logo" 
        front_style="block bg-[#0072B1] p-2.5 rounded-xl will-change-transform transition duration-250 -translate-y-2 hover:-translate-y-1 active:translate-y-0"
        edge_style="bg-[#005D90] w-[60px] h-[60px] rounded-xl mx-1"
        link="https://www.linkedin.com/in/eleanor-carlos/" 
      />
      <LogoButton 
        src="./GitHub_Logo_White.svg" 
        alt="GitHub Logo" 
        front_style="block bg-[#2DA44E] p-2.5 rounded-xl will-change-transform transition duration-250 -translate-y-2 hover:-translate-y-1 active:translate-y-0"
        edge_style="bg-[#227A3A] w-[60px] h-[60px] rounded-xl mx-1"
        link="https://github.com/saturdaaaaaaaay"
      />
      <LogoButton 
        src="./Itch_io_Logo_White.svg" 
        alt="Itch.io Logo" 
        front_style="block bg-[#FA5C5C] p-2.5 rounded-xl will-change-transform transition duration-250 -translate-y-2 hover:-translate-y-1 active:translate-y-0"
        edge_style="bg-[#B23E3E] w-[60px] h-[60px] rounded-xl mx-1"
        link="https://saturdaaaaaaaay.itch.io/" 
      />
    </div>
  );
}

function SpeakerHole() {
  return (
    <span className="w-[10px] h-[10px] bg-[#484B5B] rounded-full inline-block shadow-[inset_0_4px_4px_rgba(0,0,0,0.4)] m-[1.7px]"></span>
  );
}

function SpeakerRow() {
  return (
    <div className="text-[3px]">
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
      <SpeakerHole />
    </div>
  );
}

function Speaker() {
  return (
    <div>
      <SpeakerRow />
      <SpeakerRow />
      <SpeakerRow />
      <SpeakerRow />
      <SpeakerRow />
    </div>
  );
}

export default function RootLayout({ children }) {
  const style = "w-[585px] bg-[#515467] rounded-3xl -translate-y-3 " + marvel.className;
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-between container mx-auto">
          <div className="bg-[#454757] mx-auto w-[585px] m-10 rounded-3xl">
            <div className={style}>
              <br />
              <Header />
              {children}
              <br />
            </div>
          </div>
      </body>
    </html>
  );
}

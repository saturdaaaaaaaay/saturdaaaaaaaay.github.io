import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const style = "text-black text-[18px] ${inter.className}"
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between translate-y-4">
        <svg width="115" height="35">
          <rect width="115" height="35" fill="#E2F7FF" fillOpacity={0.8}/>
        </svg>
      </div>
      <div className="bg-[url('/recycled_paper_texture.jpg')] bg-[#FFF9FF] bg-repeat bg-contain bg-blend-multiply p-5 mx-5 shadow-xl">
        <p className={style}>Hello! My name is Elie Carlos, and I am a software engineer looking for work.</p>
        <p className={style}>I studied computer science at Northern Arizona University in Flagstaff, AZ and I worked as a technical director at DreamWorks Animation for 3 years. </p>
        <p className={style}>I also enjoy coding side projects, video games in particular. I have an itch.io where I post those games.</p>
      </div>
    </main>
  );
}
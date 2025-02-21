export default function Home() {
  const style = "text-black";
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="bg-[#FFF9FF] p-5">
        <p className={style}>Hello! My name is Elie Carlos, and I am a software engineer looking for work.</p>
        <p className={style}>I studied computer science at Northern Arizona University in Flagstaff, AZ and I worked as a technical director at DreamWorks Animation for 3 years. </p>
        <p className={style}>I also enjoy coding side projects, video games in particular. I have an itch.io where I post those games.</p>
      </div>
    </main>
  );
}
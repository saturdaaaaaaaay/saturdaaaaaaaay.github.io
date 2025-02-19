import { useState } from 'react'
import './App.css'
import Link from "next/link"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

function Header() {
  return (
    <header className="bg-slate-500 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">Home</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

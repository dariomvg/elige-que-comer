"use client";
import Link from 'next/link'
import "../styles/navbar.css"; 
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav className='navbar'>
        <Link href="/" className={`link-nav ${path === "/" ? "link-active" : ""}`}>Principal</Link>
        <Link href="/comidas" className={`link-nav ${path === "/comidas" ? "link-active" : ""}`}>Comidas</Link>
        <Link href="/lista" className={`link-nav ${path === "/lista" ? "link-active" : ""}`}>Tu lista</Link>
    </nav>
  )
}

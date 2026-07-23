import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-center py-6">

      <div></div>

      <div className="flex justify-center text-xl font-bold text-black gap-25">

        <Link href="/" className="text-black hover:text-cyan-500 transition-colors duration-300">HOME</Link>

        <Link href="/work " className="text-black hover:text-cyan-500 transition-colors duration-300">PROJECTS</Link>

        <Link href="/cv" className="text-black hover:text-cyan-500 transition-colors duration-300">CV</Link>

        <Link href="/contacts" className="text-black hover:text-cyan-500 transition-colors duration-300">CONTACTS</Link>
      </div>

    </nav>
  );
}
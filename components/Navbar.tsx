import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-center py-6">

      <div></div>

      <div className="flex justify-center text-xl font-bold text-black gap-25">
        <Link href="/">HOME</Link>

        <Link href="/work">PROJECTS</Link>

        <Link href="/cv">CV</Link>

        <Link href="/contacts">CONTACTS</Link>
      </div>

    </nav>
  );
}
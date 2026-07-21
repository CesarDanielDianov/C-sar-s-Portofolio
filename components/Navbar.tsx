import Link from "next/link";

export default function Navbar(){
    return(
        <header>
            <nav className="flex justify-center gap-30 py-6">
                <Link href="/" className="text-3xl font-bold text-black">
                    Home
                </Link>

                <Link href="/work" className="text-3xl font-bold text-black">
                    Work
                </Link>

                <Link href="/cv" className="text-3xl font-bold text-black">
                    Cv
                </Link>

                <Link href="/contacts" className="text-3xl font-bold text-black">
                    Contacts
                </Link>                
            </nav>
        </header>
    );
}
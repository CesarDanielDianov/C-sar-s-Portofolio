import Link from "next/link";

export default function work(){
    return(
        <section className="relative min-h-screen">
            <p className="mt-20 text-center text-5xl ">
                *My Projects*
            </p>
            
            <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">

                <Link href="https://github.com/CesarDanielDianov/PACMAN-SERVER"
                    className="block  h-60 rounded-xl border p-6 hover:shadow-lg transition mt-5"
                    >
                    <h2 className="text-2xl font-bold">
                        MULTI CLIENT PACMAN GAME
                    </h2>
                    <p className="mt-7">A C implementation of the Pacman Game ,built on a server-client achitecture</p>
                    <p className="mt-9">Linux • C</p>

                </Link>

                <Link href="https://github.com/CesarDanielDianov/LibraryManager"
                    className="block h-60 rounded-xl border p-6 hover:shadow-lg transition mt-5"
                    >
                    <h2 className="text-2xl font-bold">
                        LIBRARY MANAGMENT SYSTEM
                    </h2>
                    <p className="mt-7">A text based  Library Managment system written in java</p>
                    <p className="mt-9">Java</p>

                </Link>

                <Link href="https://github.com/CesarDanielDianov/C-sar-s-Portofolio"
                    className="block h-60 rounded-xl border p-6 hover:shadow-lg transition mt-5"
                    >
                    <h2 className="text-2xl font-bold">
                        PORTOFOLIO
                    </h2>
                    <p className="mt-7">A modern portfolio developed with Next.js and Tailwind CSS to showcase my work and technical background.</p>
                    <p className="mt-9">Next.js • React • TypeScript • Tailwind CSS</p>

                </Link>   
            </div>

        </section>
    );
}
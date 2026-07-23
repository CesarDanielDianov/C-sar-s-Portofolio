import Image from "next/image";

export default function Hero() {
  return (
  <section className="relative min-h-screen">

    <div  className="text-center">

      <h1 className="mt-20 text-7xl font-bold">
         *César Dianov*
      </h1>

    <p className="flex items-center pl-9 font-bold h-10 rounded-3xl border gap-3 w-120 mx-auto mt-6 mb-10 text-gray-600">
      Computer Science and Engineering Student @ IST
      
      <span className="relative flex h-3 w-3">
        <span className="absolute flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative flex h-3 w-3 rounded-full bg-green-500"></span>
      </span>
    </p>

      <Image  className="mx-auto mt-10 rounded-full shadow-2xl shadow-gray-600"
        src="/cesar1.png"
        alt="nome do cesar"
        width={240}
        height={240}
      />

      <p className="mx-auto mt-12 max-w-3xl px-4 text-left text-xl leading-relaxed"> 
        I am a Computer Science and Engineering student at Instituto Superior Técnico, currently preparing to begin the final year of my degree. Throughout my studies, I have developed a strong interest in software development, artificial intelligence, databases, and problem-solving.
        Through academic and personal projects, I have gained experience working with different programming languages, technologies, and development tools. I enjoy learning new concepts, building practical solutions, and improving both my technical and teamwork skills.
      </p>

      <p className="mx-auto mt-3 mb-20 max-w-3xl px-4 text-left text-xl leading-relaxed">
        I am currently looking for opportunities that allow me to apply what I have learned, gain professional experience, and continue growing as a software engineer.
      </p>

    </div> 
  </section>
  );
}
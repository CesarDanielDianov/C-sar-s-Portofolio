import Image from "next/image";

export default function Hero() {
  return (
  <section className="relative min-h-screen">

    <div  className="text-center">

      <h1 className="mt-50 text-7xl font-bold">
         *César Dianov*
      </h1>

      <p className="mt-4 text-2x1 font-bold">
        Computer Science and Engineering Student @ IST
      </p>

      <Image  className="mx-auto mt-10"
        src="/cesar1.png"
        alt="nome do cesar"
        width={200}
        height={200}
      />

      <p className="mx-auto mt-12 max-w-3xl px-4 text-left text-xl leading-relaxed"> 
        I am a Computer Science and Engineering student at Instituto Superior Técnico, currently preparing to begin the final year of my degree. Throughout my studies, I have developed a strong interest in software development, artificial intelligence, databases, and problem-solving.
        Through academic and personal projects, I have gained experience working with different programming languages, technologies, and development tools. I enjoy learning new concepts, building practical solutions, and improving both my technical and teamwork skills.
      </p>

      <p className="mx-auto max-w-3xl px-4 text-left text-xl leading-relaxed">
        I am currently looking for opportunities that allow me to apply what I have learned, gain professional experience, and continue growing as a software engineer.
      </p>

    </div> 
  </section>
  );
}
export default function Footer() {
  return (
    <footer className=" px-8 py-6 text-black bg-gray-500">
      
      <div className="flex justify-between">

        <p className="text-1xl">
          © {new Date().getFullYear()} César Dianov — All rights reserved.
        </p>

        <div className="flex gap-10">
          <a href="https://github.com/CesarDanielDianov" >
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/c%C3%A9sar-dianov-91b3993a0/" >
            LinkedIn
          </a>

          <a href="https://www.instagram.com/cesardianov9/">
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}
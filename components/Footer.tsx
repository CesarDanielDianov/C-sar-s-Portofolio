export default function Footer() {
  return (
    <footer className=" px-10 py-8 text-black">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-2xl">
          © {new Date().getFullYear()} César Dianov — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
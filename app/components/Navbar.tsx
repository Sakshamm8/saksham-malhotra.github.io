import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold">
          Saksham Malhotra
        </Link>

        <div className="flex gap-6 text-gray-300">
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/hackathons" className="hover:text-white">Hackathons</Link>
          <Link href="/research" className="hover:text-white">Research</Link>
          <Link href="/resume" className="hover:text-white">Resume</Link>
          <a
            href="https://www.linkedin.com/in/saksham-malhotra-uc/"
            target="_blank"
            className="hover:text-blue-400"

          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}

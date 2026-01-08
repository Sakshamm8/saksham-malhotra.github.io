export default function Resume() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-gray-400 mb-8">
          Click below to view or download my latest resume.
        </p>
        
        <a
          href="/Saksham_Malhotra_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all text-lg"
        >
          Download PDF
        </a>
      </div>
    </main>
  );
}
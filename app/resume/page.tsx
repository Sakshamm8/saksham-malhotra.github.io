export default function Resume() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Resume</h1>

        <p className="text-gray-300 mb-6">
          Download my full resume below.
        </p>

        <a
          href="/Saksham_Malhotra_Resume.pdf"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg inline-block"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}

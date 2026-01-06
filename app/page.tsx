"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-black blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Saksham Malhotra
          </h1>

          <p className="text-xl md:text-2xl text-gray-300">
            Computer Science @ University of Cincinnati | Deep Learning Researcher | Hackathon Enthusiast
          </p>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I build intelligent systems at the intersection of software,
            artificial intelligence, and healthcare with a strong focus on
            real-world impact.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/saksham-malhotra-uc/"
              target="_blank"
              className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
            >
              LinkedIn
            </a>
            <a
              href="/projects"
              className="px-8 py-4 border border-gray-600 rounded-xl hover:border-white transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-32 px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-20">Experience</h2>

          <ExperienceCard
            title="Deep Learning Research Co-op"
            org="Department of Biomedical Engineering, University of Cincinnati"
            time="Jan 2025 – Present"
            points={[
              "Assist in developing deep learning-based techniques to reduce radiation dose in pediatric PET imaging.",
              "Work under the supervision of Dr. Jing Tang in collaboration with the Emission Tomography Imaging Laboratory.",
              "Contribute to model experimentation, evaluation, and research documentation in a structured academic environment.",
            ]}
          />

          <ExperienceCard
            title="Data Science Intern"
            org="Healthsigns.ai"
            time="June 2025 – August 2025"
            points={[
              "Extracted and processed structured data from unstructured healthcare PDFs using spaCy, pdfplumber, and pytesseract, and preprocessed, trained, and evaluated Whisper speech-to-text models for Indic languages with Hugging Face datasets, improving information retrieval and transcription accuracy.",
              "Integrated and deployed advanced LLM solutions combining Whisper (speech recognition), OpenAI & Groq APIs (generative tasks), and Azure-hosted LLaMA (private inference).",
            ]}
          />

          <ExperienceCard
            title="Information technology risk assurance intern"
            org="PricewaterhouseCoopers (PwC) Middle east"
            time="May 2025 – June 2025"
            points={[
              "Assisted in documenting and evaluating IT controls as part of the ITRA team at PwC, identifying potential risks and control gaps across business processes and contributing to risk assessment reports.",
              "Explored applications of AI in auditing, gaining hands-on exposure to emerging technologies in risk assurance and understanding how automation and data analytics enhance audit accuracy and efficiency.",
            ]}
          />
        </div>
      </section>

      {/* ================= EDUCATION & JOURNEY ================= */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Education & Background</h2>

          <Timeline
            title="University of Cincinnati"
            text="Pursuing a B.S. in Computer Science (GPA 3.93). Actively involved in research, hackathons, teaching roles, and applied AI projects."
          />

          <Timeline
            title="Bright Riders School, Abu Dhabi"
            text="Built a strong foundation in science and technology, took on leadership roles, and developed an early interest in engineering, computing, and problem-solving."
          />

          <Timeline
            title="Builder Mindset"
            text="Regularly participate in hackathons, research projects, and team-based engineering challenges — focused on learning fast and building impactful systems."
          />
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ExperienceCard({
  title,
  org,
  time,
  points,
}: {
  title: string;
  org: string;
  time: string;
  points: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 border border-gray-800 rounded-2xl p-8 hover:border-blue-400 transition"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span className="text-gray-400 text-sm">{time}</span>
      </div>

      <p className="text-gray-400 mb-4">{org}</p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function Timeline({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="border-l-2 border-gray-700 pl-6 mb-12"
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 max-w-3xl">{text}</p>
    </motion.div>
  );
}

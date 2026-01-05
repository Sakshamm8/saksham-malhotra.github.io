
const experiences = [
  {
    company: "Department of Biomedical Engineering (UC)",
    role: "Deep Learning Research Co-op",
    period: "Jan 2026 – Present",
    description: "Developing deep learning-based techniques to reduce radiation dose in pediatric PET imaging. Working on NIfTI/DICOM data pipelines and CNN-based reconstruction under Dr. Jing Tang.",
    tech: ["Python", "PyTorch", "Medical Imaging", "Linux"]
  },
  {
    company: "Healthsigns.ai",
    role: "Data Science Intern",
    period: "Jun 2025 – Aug 2025",
    description: "Integrated LLM solutions combining Whisper, OpenAI, and Azure-hosted LLaMA. Processed unstructured healthcare PDFs using spaCy and OCR to improve information retrieval.",
    tech: ["Azure", "LLMs", "Whisper", "spaCy", "OCR"]
  },
  {
    company: "PwC Middle East",
    role: "ITRA Intern",
    period: "May 2025 – Jun 2025",
    description: "Evaluated IT controls and identified risk gaps across business processes. Explored AI applications in auditing to enhance data analytics efficiency.",
    tech: ["Data Analytics", "Risk Assurance", "Auditing AI"]
  }
];

export default function Experience() {
  return (
      <main className="max-w-4xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-12">Experience</h1>
        
        <div className="relative border-l border-gray-800 ml-3 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="mb-10 ml-8 relative group">
              {/* Timeline Dot */}
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-black bg-blue-500 group-hover:bg-white transition-colors"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
              </div>
              
              <p className="text-lg text-blue-200 mb-4">{exp.company}</p>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
  );
}
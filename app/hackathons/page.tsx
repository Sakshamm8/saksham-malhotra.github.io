"use client";
import { motion } from "framer-motion";

const hackathons = [
  {
    title: "SpinVision",
    event: "MakeUC 2025 – Winner (MLH Best Use of ARM)",
    desc: "Low-cost 3D scanning system using Raspberry Pi and AI-based reconstruction.",
    role: "Worked on hardware integration, automated image capture, and reconstruction workflows.",
    link: "https://devpost.com/software/spinvision",
  },
  {
    title: "Shani",
    event: "NASA Space Apps Challenge 2025 – Winner (Best Mission Concept)",
    desc: "Question-to-evidence engine for space biology using NASA bioscience datasets.",
    role: "Built the React frontend and PDF ingestion pipeline for RAG workflows.",
    link: "https://www.spaceappschallenge.org/2025/find-a-team/shani/?tab=project",
  },
  {
    title: "AlziE",
    event: "MakeOHI/O 2024",
    desc: "AI-powered voice assistant for Alzheimer’s and dementia support.",
    role: "Integrated speech recognition, NLP, and sentiment analysis.",
    link: "https://github.com/Viplav17/AlziE",
  },
  {
    title: "DoseWise",
    event: "RevolutionUC 2024",
    desc: "Insulin dosage calculator for Type 1 diabetics using fast-food nutrition data.",
    role: "Worked on backend logic and nutritional data processing.",
    link: "https://devpost.com/software/dosewise-woi94h",
  },
];

export default function Hackathons() {
  return (
    <main className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16">Hackathons</h1>

        <div className="space-y-12">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-800 rounded-2xl p-8 hover:border-purple-400 transition"
            >
              <h2 className="text-3xl font-semibold">{h.title}</h2>
              <p className="text-gray-400 italic mb-4">{h.event}</p>
              <p className="text-gray-300">{h.desc}</p>
              <p className="text-gray-400 mb-4">{h.role}</p>
              <a href={h.link} target="_blank" className="text-blue-400 hover:underline">
                View on Devpost →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

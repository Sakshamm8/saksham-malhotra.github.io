"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sepsis Prediction Model",
    desc: "Machine learning models to predict sepsis onset using ICU patient data (~1.5M records).",
    more: "Implemented Random Forest and XGBoost models with feature engineering, class imbalance handling, and SHAP-based explainability.",
    tech: ["Python", "XGBoost", "SHAP", "Healthcare ML"],
  },
  {
    title: "Smart Grocery Budget Tracker",
    desc: "OCR and NLP-based system to analyze grocery spending from scanned receipts.",
    more: "Built receipt parsing pipelines, integrated pricing APIs, and implemented spending summaries and alerts.",
    tech: ["OCR", "NLP", "spaCy", "APIs"],
  },
  {
    title: "Autonomous LEGO Mindstorms Robot (ENED 1200)",
    desc: "Designed and programmed an autonomous robot for navigation and object handling.",
    more: "Implemented line following, obstacle avoidance, and material-based sorting logic.",
    tech: ["Robotics", "Control Systems"],
  },
  {
    title: "Windmill for Water & Power (ENED 1100)",
    desc: "Engineering design project addressing water scarcity and energy access in Africa.",
    more: "Designed a windmill capable of pumping water and generating electricity, emphasizing sustainability and feasibility.",
    tech: ["Renewable Energy", "Prototyping"],
  },
  {
    title: "Supermarket Database System",
    desc: "Python and MySQL-based database system for managing supermarket operations.",
    more: "Designed efficient data storage, retrieval, and management workflows from scratch.",
    tech: ["Python", "MySQL", "Databases"],
  },
];

export default function Projects() {
  return (
    <main className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16">Projects</h1>

        <div className="grid gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-800 rounded-2xl p-8 hover:border-blue-400 transition"
            >
              <h2 className="text-3xl font-semibold mb-3">{p.title}</h2>
              <p className="text-gray-300 mb-2">{p.desc}</p>
              <p className="text-gray-400 mb-6">{p.more}</p>
              <div className="flex gap-3 flex-wrap">
                {p.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-sm bg-gray-800 rounded-full">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

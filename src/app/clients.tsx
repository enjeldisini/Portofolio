"use client";

import { Typography } from "@material-tailwind/react";

const TECH_STACK = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React.js", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Figma", icon: "🎯" },
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Teknologi yang Saya Kuasai
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-4xl">{tech.icon}</span>
              <Typography
                variant="small"
                className="font-medium text-gray-700"
              >
                {tech.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;

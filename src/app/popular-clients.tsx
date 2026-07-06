"use client";

import { Typography } from "@material-tailwind/react";

const TOOLS = [
  { name: "VS Code", emoji: "💻" },
  { name: "Git & GitHub", emoji: "🔧" },
  { name: "Chrome DevTools", emoji: "🔍" },
  { name: "Vercel", emoji: "▲" },
  { name: "npm / yarn", emoji: "📦" },
  { name: "Postman", emoji: "📬" },
];

export function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            Tools & Platform
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Tools yang Saya <br /> Gunakan Sehari-hari
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-2 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors min-w-[120px]"
            >
              <span className="text-3xl">{tool.emoji}</span>
              <Typography
                variant="small"
                className="font-medium text-gray-700"
              >
                {tool.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularClients;

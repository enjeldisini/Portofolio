"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
    children:
      "Membangun antarmuka web yang modern dan interaktif menggunakan React.js, Next.js, dan TypeScript. Fokus pada performa, aksesibilitas, dan pengalaman pengguna terbaik.",
  },
  {
    icon: SwatchIcon,
    title: "UI/UX & Design System",
    children:
      "Merancang antarmuka pengguna yang intuitif dan konsisten dengan Figma. Membangun design system dan komponen reusable untuk mempercepat pengembangan.",
  },
  {
    icon: HashtagIcon,
    title: "Responsive Web Design",
    children:
      "Mengembangkan website yang responsif dan mobile-first menggunakan CSS3, Tailwind CSS, dan teknik layout modern seperti Flexbox dan CSS Grid.",
  },
  {
    icon: EyeIcon,
    title: "Animasi & Interaksi",
    children:
      "Membuat micro-interactions dan animasi halus yang meningkatkan engagement pengguna menggunakan CSS animations, Framer Motion, dan JavaScript.",
  },
  {
    icon: DocumentTextIcon,
    title: "Clean Code & Best Practices",
    children:
      "Menulis kode yang bersih, terdokumentasi, dan mudah dipelihara. Mengikuti standar industri seperti ESLint, Prettier, dan pola desain komponen.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Version Control & Kolaborasi",
    children:
      "Berpengalaman menggunakan Git dan GitHub untuk version control, code review, dan kolaborasi tim dalam pengembangan proyek.",
  },
];

export function Skills() {
  return (
    <section className="px-8" id="skills">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Keahlian Saya
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Apa yang Saya Kerjakan
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Sebagai mahasiswa Teknik Informatika dengan fokus di frontend
          development, saya terus mengasah kemampuan untuk menciptakan
          pengalaman web yang luar biasa. Berikut adalah area keahlian saya.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

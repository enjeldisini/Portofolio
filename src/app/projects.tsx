"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Website Portofolio Pribadi",
    desc: "Website portofolio responsif yang dibangun dengan Next.js dan Tailwind CSS untuk menampilkan proyek dan keahlian saya sebagai frontend developer.",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Dashboard Manajemen Tugas",
    desc: "Aplikasi web dashboard untuk manajemen tugas kuliah dengan fitur drag-and-drop, filter, dan notifikasi menggunakan React.js dan TypeScript.",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Landing Page Startup",
    desc: "Landing page modern dan responsif untuk startup teknologi dengan animasi scroll, dark mode, dan optimasi SEO menggunakan Next.js.",
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "E-Commerce UI Clone",
    desc: "Clone antarmuka e-commerce populer dengan fitur keranjang belanja, pencarian produk, dan halaman detail produk menggunakan React.js dan Tailwind CSS.",
  },
  {
    img: `${getImagePrefix()}fashion-store/jacket.jpg`,
    title: "Fashion Store (Proyek Iseng)",
    desc: "Proyek iseng pembuatan antarmuka e-commerce sederhana untuk toko baju menggunakan HTML, CSS, dan JavaScript murni.",
    link: "/fashion-store/index.html",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Proyek Saya
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Berikut adalah beberapa proyek frontend yang telah saya kerjakan
          selama masa perkuliahan dan pengembangan diri. Setiap proyek
          mencerminkan passion saya dalam menciptakan antarmuka yang indah dan
          fungsional.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

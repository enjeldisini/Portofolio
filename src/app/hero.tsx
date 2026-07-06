"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hi, I&apos;m Angel Tesalonika 👋
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Seorang mahasiswa Teknik Informatika semester 6 dengan passion
            mendalam di pengembangan frontend. Saya menciptakan antarmuka web
            yang modern, responsif, dan berpusat pada pengalaman pengguna.
          </Typography>
          <div className="flex gap-3 mt-6">
            <a href="#projects">
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Lihat Proyek Saya
              </button>
            </a>
            <a href="#contact">
              <button className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Hubungi Saya
              </button>
            </a>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Typography variant="small" className="font-normal !text-gray-500">
              📧 angeltesa11@gmail.com
            </Typography>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="Angel Tesalonika - Frontend Developer"
          src={`${getImagePrefix()}image/image-7.svg`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: 0}} transition={{duration: 1}}>
      <div className="flex flex-col md:flex-row h-full gap-6 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-20">
        {/* --------------- Image Container --------------- */}
        <div className="flex-1 relative">
          <Image src="/hero.png" alt="hero" fill sizes="100" className="object-contain"/>
        </div>
        {/* --------------- Text Container --------------- */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          {/* ------ Title ------ */}
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Crafting Digital Experiences, Designing Tomorrow.</h1>
          {/* ------ Description ------ */}
          <p className="md:text-lg">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* ------ Buttons ------ */}
          <div className="flex gap-4 items-center">
            <button className="capitalize py-2 px-4 rounded ring-1 ring-black bg-black text-white">View my work</button>
            <button className="capitalize py-2 px-4 rounded ring-1 ring-black">Contact me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";
import { HireMeSVG } from "@/utils/SVGS";
import { projectItems } from "@/utils/constant";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PortfolioPage = () => {
  const elementRef = useRef<any>();
  const {scrollYProgress} = useScroll({target: elementRef});
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);  

  return (
    <motion.section className="h-full" initial={{y: "-200vh"}} animate={{y: 0}} transition={{duration: 1}}>
      <div className="h-[600vh] relative" ref={elementRef}>
        {/* ---- Header ---- */}
        <div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center">
          <h1 className="text-lg md:text-4xl lg:text-6xl text-center">My Works</h1>
        </div>
        {/* ---- Project Container ---- */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div className="flex" style={{x}}>
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-blue-100 "/>
            {
              projectItems.map(item => (
                <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} relative`} key={item.id}>
                  <div className="absolute inset-0 bg-gray-600 opacity-50"/>
                  <div className="flex flex-col gap-6 text-white z-10">
                    <h1 className="text-xl font-bold md:text-5xl">{item.title}</h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] lg:-h[420px]">
                      <Image src={item.img} alt={item.title} fill sizes="100%"/>
                    </div>
                    <p className="w-80 md:w-96 lg:text-lg lg:w-[500px] xl:w-[600px]">{item.desc}</p>
                    <Link href={item.link} className="flex justify-end items-center">
                      <button className="capitalize py-2 px-4 bg-white text-gray-600 font-semibold rounded-md">See demo</button>
                    </Link>
                  </div>
                </div>
              ))
            }
          </motion.div>
        </div>
      </div>
      {/* ---- Hire Me Container ---- */}
      <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center">
        {/* ------ Title ------ */}
        <h2 className="text-4xl md:text-6xl">Do you have a project?</h2>
        {/* ------ SVG ------ */}
        <div className="relative z-50">
          <HireMeSVG />
          <Link href="/contact" className="capitalize w-16 h-16 md:w-28 md:h-28 absolute inset-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire me</Link>
        </div>
      </div>
    </motion.section>
  )
}

export default PortfolioPage
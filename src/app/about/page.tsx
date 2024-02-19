"use client";
import Brain from "@/components/Brain";
import { ScrollSVG, SignatureSVG } from "@/utils/SVGS";
import {motion, useInView, useScroll} from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  // Reference the container and get the Y scroll
  const containerRef = useRef<any>();
  const {scrollYProgress} = useScroll({container: containerRef});
  // Reference the skills section
  const skillsRef = useRef<any>();
  const isSkillRefInView = useInView(skillsRef);

  // Reference the Experience section
  const experienceRef = useRef<any>();
  const isExperienceRefInView = useInView(experienceRef);

  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: 0}} transition={{duration: 1}}>
      {/* ------------ Container ------------ */}
      <div className="h-full lg:flex overflow-y-scroll gap-20" ref={containerRef}>
        {/* --------- Text Container --------- */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-24 flex flex-col gap-20 md:gap-24 lg:gap-32 xl:gap-48 lg:w-2/3 lg:pe-0 xl:flex-1">
          {/* ------ Biography ------ */}
          <div className="flex flex-col gap-8 justify-center">
            {/* Title */}
            <h1 className="font-bold text-2xl uppercase">BIOGRAPHY</h1>
            {/* Desc */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* Quote */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* Signateure */}
            <div className="self-end">
              <SignatureSVG />
            </div>
            {/* SVG icon */}
            <ScrollSVG />
          </div>
          {/* ------ Skills ------ */}
          <div className="flex flex-col gap-8 justify-center" ref={skillsRef}>
            {/* Title */}
            <motion.h1 initial={{x: "-300px"}} animate={isSkillRefInView ? {x: 0} : {}} transition={{delay: 0.2}} className="font-bold text-2xl uppercase">Skills</motion.h1>
            {/* Skills list */}
            <motion.div initial={{x: "-300px"}} animate={isSkillRefInView ? {x: 0} : {}} transition={{delay: 0.2}} className="flex items-center flex-wrap gap-2">
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScript</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SCSS</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PostgreSQL</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Nest.js</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Express.js</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Spring Boot</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">GraphQL</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Apollo</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Redux</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Three.js</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">WebGL</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Webpack</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Vite</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Docker</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">AWS</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Firebase</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
            </motion.div>
            {/* Scroll SVG */}
            <ScrollSVG />
          </div>
          {/* ------ Experience ------ */}
          <div className="flex flex-col gap-8 justify-center pb-12" ref={experienceRef}>
            {/* Title */}
            <motion.h1 initial={{x: "-300px"}} animate={isExperienceRefInView ? {x: 0} : {}} transition={{delay: 0.2}} className="font-bold text-2xl uppercase">Experience</motion.h1>
            {/* Experience List */}
            <motion.div initial={{x: "-300px"}} animate={isExperienceRefInView ? {x: 0} : {}} transition={{delay: 0.2}} >
              {/* Experience Item */}
              <div className="flex justify-between min-h-48">
                {/* Left */}
                <div className="w-5/12">
                  {/* Job Title */}
                  <h3 className="bg-white font-semibold rounded-s-md rounded-b-md py-2 px-3">Senior Javascript Engineer</h3>
                  {/* Job Desc */}
                  <p className="p-2 text-sm italic">My current employment. Way better than the position before!</p>
                  {/* Job Date */}
                  <p className="p-2 text-sm font-semibold text-red-400">2024 - Presnet</p>
                  {/* Job Company */}
                  <p className="p-2 text-gray-400 font-semibold text-sm rounded-md bg-white w-fit">Apple</p>
                </div>
                {/* Center */}
                <div className="w-1/12">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-3 h-3 -left-1 ring-4 ring-red-500 bg-white rounded-full"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-5/12"></div>
              </div>
              {/* Experience Item */}
              <div className="flex justify-between min-h-48">
                {/* Left */}
                <div className="w-5/12"></div>
                {/* Center */}
                <div className="w-1/12">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-3 h-3 -left-1 ring-4 ring-red-500 bg-white rounded-full"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-5/12">
                  {/* Job Title */}
                  <h3 className="bg-white font-semibold rounded-s-md rounded-b-md py-2 px-3">Senior Javascript Engineer</h3>
                  {/* Job Desc */}
                  <p className="p-2 text-sm italic">My current employment. Way better than the position before!</p>
                  {/* Job Date */}
                  <p className="p-2 text-sm font-semibold text-red-400">2024 - Presnet</p>
                  {/* Job Company */}
                  <p className="p-2 text-gray-400 font-semibold text-sm rounded-md bg-white w-fit">Apple</p>
                </div>
              </div>
              {/* Experience Item */}
              <div className="flex justify-between min-h-48">
                {/* Left */}
                <div className="w-5/12">
                  {/* Job Title */}
                  <h3 className="bg-white font-semibold rounded-s-md rounded-b-md py-2 px-3">Senior Javascript Engineer</h3>
                  {/* Job Desc */}
                  <p className="p-2 text-sm italic">My current employment. Way better than the position before!</p>
                  {/* Job Date */}
                  <p className="p-2 text-sm font-semibold text-red-400">2024 - Presnet</p>
                  {/* Job Company */}
                  <p className="p-2 text-gray-400 font-semibold text-sm rounded-md bg-white w-fit">Apple</p>
                </div>
                {/* Center */}
                <div className="w-1/12">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Circle */}
                    <div className="absolute w-3 h-3 -left-1 ring-4 ring-red-500 bg-white rounded-full"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-5/12"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* --------- SVG Container --------- */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:flex-1">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
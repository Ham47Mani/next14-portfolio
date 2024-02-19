"use client";
import {motion} from "framer-motion";
import { useState } from "react";

const ContactPage = () => { 
  const text = "Say Hello";

  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: 0}} transition={{duration: 1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* --------------- Text Container --------------- */}
        <div className="flex-1 flex justify-center items-center text-4xl">
          <h1>
            {text.split("").map((letter, i) => (
              <motion.span initial={{opacity: 1}} animate={{opacity: 0}} transition={{delay: i * 0.1 , duration: 3, repeat: Infinity}} key={i}>{letter}</motion.span>
            ))}
            <motion.span initial={{opacity: 1}} animate={{opacity: 0.7}} transition={{duration: 1, repeat: Infinity}} className="ms-2">😊</motion.span>
          </h1>
        </div>
        {/* --------------- Form Container --------------- */}
        <div className="flex-1 bg-red-50 rounded-lg text-lg flex flex-col gap-6 justify-center p-10 md:p-20">
          <span className="capitalize">Dear Spaider Tech,</span>
          <textarea rows={6} className="bg-transparent border-b-2 border-gray-300 outline-none resize-none"/>
          <span className="">My mail address is:</span>
          <input type="text" className="bg-transparent border-b-2 border-gray-300 outline-none"/>
          <span className="">Regards.</span>
          <button className="bg-purple-200 hover:bg-purple-400 rounded-md p-3 font-semibold text-gray-600 hover:text-white transition-all duration-300">Send</button>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage
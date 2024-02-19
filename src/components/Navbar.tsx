"use client";
import { navlinks } from "@/utils/constant"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react"
import NavLink from "./NavLink";
import {motion} from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);// Menu status

  // Framer motion variants
  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 40, x: "2px", y: "-2px", backgroundColor: "rgb(255, 255, 255)" }
  }
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 }
  }
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -40, backgroundColor: "rgb(255, 255, 255)" }
  }
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 }
  }

  return (
    <nav className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/* -------- LG menu list -------- */}
      <div className="hidden md:flex gap-4 items-center flex-1">
        {
          navlinks.map((link, i) => (
            <NavLink key={i} link={link}/>
          ))
        }
      </div>
      {/* -------- Logo -------- */}
      <div className="md:hidden lg:flex flex-1 items-center justify-center">
        <Link href="/" className="text-sm bg-black text-white rounded-md p-1 font-semibold flex items-center justify-center gap-1 w-fit">
          <span className="text-white">Spaider</span>
          <span className="w-12 h-8 rounded bg-white text-black p-1 flex items-center justify-center">.Tech</span>
        </Link>
      </div>
      {/* -------- Social Icons -------- */}
      <div className="hidden md:flex items-center justify-end gap-3 flex-1">
        <Link href="#">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" alt="dribbble" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="instagrame" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
      </div>
      {/* -------- Responsive Menu -------- */}
      <div className="md:hidden">
        {/* ------ Menu Button (Burger) ------ */}
        <button className="w-10 flex flex-col justify-between gap-2 z-50 relative" onClick={() => setOpen(!open)}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 rounded bg-black origin-left"/>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 rounded bg-black"/>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 rounded bg-black origin-left"/>
        </button>
        {/* ------ Menu List ------ */}
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute inset-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-6 z-40">
            {
              navlinks.map((link, i) => (
                <motion.div variants={listItemVariants} key={i}>
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))
            }
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
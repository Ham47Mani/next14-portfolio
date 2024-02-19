"use client";
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from "./Navbar"
import { usePathname } from 'next/navigation';

type Props = {}

const TransitionProvider = ({children}: {children: React.ReactNode}) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        {/* ------ Black Page go to bottom ------ */}
        <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40' 
          animate={{height: "0vh"}} 
          exit={{height: "140vh"}} 
          transition={{duration: 0.5, ease: "easeOut"}}
        />
        {/* ------ Showing the pathname ------ */}
        <motion.div className='m-auto fixed inset-0 text-white text-4xl md:text-6xl cursor-default z-50 w-fit h-fit'
          initial={{opacity: 1}} 
          animate={{opacity: 0}}
          exit={{opacity: 0}}
          transition={{duration: 0.8, ease: "easeOut"}}
        >{pathName.substring(1).toUpperCase()}</motion.div>
        {/* ------ Black Page go to top ------ */}
        <motion.div className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30' 
          initial={{height: "140vh"}} 
          animate= {{height: "0vh", transition: {delay: 0.5}}}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
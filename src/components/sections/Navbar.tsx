import { twMerge } from "tailwind-merge";
import { El_Messiri } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { Inter } from "next/font/google";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const elMessiri = El_Messiri({
    variable: '--font-messiri',
    weight: '400',
    subsets:['latin']
})
const ubuntu = Ubuntu({
    weight: '300',
    subsets:['latin']
})

const inter = Inter({
    variable: '--font-inter',
    subsets:['latin']
})
const navLinks = [
    {label: "Home", section: 'home'},
    {label: "Events", section: 'events'},
    {label: "Sponsors", section: 'sponsors'},
    {label: "Glimpses", section: 'glimpses'},
]
export const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <>
        <div className="hidden md:flex justify-center items-center fixed top-0 py-6 z-50 max-w-7xl left-1/2 transfrom -translate-x-1/2">
            <nav className="flex justify-between items-center gap-28 lg:gap-48 px-4 py-3 bg-white/5 rounded-full backdrop-blur sticky">
                <a className={twMerge('text-xl font-extralight px-4 cursor-pointer', elMessiri.className)}>Nexus</a>
                <div className="flex gap-10">
                {navLinks.map((link) => {
                   return( <a className={twMerge(ubuntu.className,'cursor-pointer')} key={link.label}>{link.label}</a> )
                })}
                </div>
                <a className={twMerge(inter.className, 'font-semibold bg-[#5F00FF] px-6 py-2 rounded-full text-sm  cursor-pointer')}>Contact</a>
            </nav>
        </div>

        <div className="md:hidden fixed flex flex-col top-4 px-4 justify-center w-full items-center z-40">
            <div className="flex justify-center items-center backdrop-blur gap-48 bg-white/5 rounded-full p-2">
            <div className="px-2">
                <span className={twMerge(elMessiri.className,'text-2xl')}>Nexus</span>
            </div>
            <div className="flex items-center px-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
              onClick={() => { setIsOpen(!isOpen); }}
            >
              <line x1="3" y1="12" x2="21" y2="12" className={twMerge(isOpen && 'opacity-0')}></line>
              <line x1="3" y1="6" x2="21" y2="6" className={twMerge('origin-left transition', isOpen && 'rotate-45 -translate-y-1')}></line>
              <line x1="3" y1="18" x2="21" y2="18" className={twMerge('origin-left transition', isOpen && '-rotate-45 translate-y-1')}></line>
            </svg>
          </div>
          </div>
        <div className='flex flex-col md:hidden w-full backdrop-blur rounded-2xl'>
          <div className={twMerge('z-10')}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className='flex flex-col items-center overflow-hidden pb-5'
            >
              {navLinks.map((link, index) =>
                link.label === 'SUPPORT US' ? (
                  <button
                    key={`${link.label}-${index}`}
                    className={twMerge('py-2 cursor-pointer')}
                  >
                    {link.label}
                  </button>
                ) : link.label === 'PARTNERS' ? (
                  <button
                    key={`${link.label}-${index}`}
                    className={twMerge('py-2 cursor-pointer')}
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={`${link.label}-${index}`}
                    className={twMerge('py-2')}
                  >
                    {link.label}
                  </a>
                )
              )}
              <a className={twMerge(inter.className, 'font-semibold bg-[#5F00FF] px-4 py-2 rounded-full text-sm cursor-pointer')}>Contact Us</a>
            </motion.div>
          )}
        </AnimatePresence>
         </div>
        </div>
        </div>
        </>
    );
}
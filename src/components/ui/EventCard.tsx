"use client"

import { Inter } from "next/font/google"
import Image, { type StaticImageData } from "next/image"
import { twMerge } from "tailwind-merge"
import { useRef, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "./button"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
})

interface Coordinator {
  name: string;
  contact: string;
}

interface EventCards {
  title: string
  tag1: string
  tag2: string
  description: string
  posterImg: StaticImageData
  explanation?: string
  googleLink?: string
  coordinators?: Coordinator[];
  eventRules?: string;
  className?: string;
}

export const EventCard = (props: EventCards) => {
  const { title, tag1, tag2, description, posterImg, explanation, googleLink, coordinators, eventRules, className } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mainRef, { once: true })

  return (
    <>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {opacity: 0}}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="pt-28 px-4"
      ref={mainRef} 
      onClick={() => setIsModalOpen(true)}>
        <div className="flex flex-col justify-center border-l border-r-2 border-b-2 border-white/50 rounded-3xl cursor-pointer transition-transform">
          <Image
            src={posterImg || "/placeholder.svg"}
            alt={title}
            className="h-[300px] md:h-[400px] md:w-full object-cover rounded-t-3xl"
          />
          <div
            className={twMerge(
              "flex flex-row justify-between gap-10 px-4 py-3 bg-white/5 backdrop-blur-xl rounded-b-3xl",
              inter.className,
            )}
          >
            <div className='w-full flex flex-col'>
              <span className="text-sm pt-4 font-extralight">Department of EnTC</span>
              <h2 className="text-2xl py-4 tracking-wide">{title}</h2>
              <div className="flex gap-4 w-full">
                <span className="px-2 py-1 bg-white/10 backdrop-blur rounded inline-flex justify-center text-xs font-light">
                  {tag1}
                </span>
                <span className="px-2 py-1 bg-white/10 backdrop-blur rounded inline-flex justify-center text-xs font-light">
                  {tag2}
                </span>
              </div>
              <div className={twMerge("py-4",className)}>
              <p className="text-sm font-light">{description}</p>
            </div>
            </div>
            <div className="flex justify-center items-center md:px-2">
              <ArrowRight className="size-8" />
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className={twMerge('rounded-2xl', inter.className)}>
          <div className="flex gap-10">
          <DialogHeader>
            <DialogTitle className="text-3xl">{title}</DialogTitle>
            <DialogDescription className="text-sm text-left py-4 flex flex-col gap-6 md:gap-28">
              <div>
              <span>{explanation || "No additional information available for this event."}</span>
              <div className="text-sm py-4">
                <span className="font-semibold">Coordinators :</span>
              {coordinators?.map(((coordinators,i) => 
                <>
                <span className="text-sm font-light block pt-2" key={i}>{coordinators.name}: {coordinators.contact}</span>
                </>
              ))}
              </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          {/* <div className="mt-4 gap-16 md:gap-20 items-right">
            <Image src={posterImg || "/placeholder.svg"} alt={title} className="size-60 aspect-square ob rounded-lg" />
          </div> */}
          </div>
          <div className="flex justify-between">
          <a target="__blank" href={eventRules} className="bg-neutral-600 py-2 px-4 text-center text-sm rounded-full">Event Rules</a>
          <a className="cursor-pointer" target="__blank" href={googleLink}>
          <Button className="bg-purple-600 rounded-2xl px-10 font-semibold">Register</Button>
          </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


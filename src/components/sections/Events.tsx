"use client"

import Image from "next/image"
import eventsDiv from "@/assets/eventsDiv.png"
import { Inter } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { EventCard } from "../ui/EventCard"
import soloNotSolo from "@/assets/solonotsolo.png"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export const Events = ({
  sectionRef
}:{
  sectionRef: React.RefObject<HTMLDivElement | null>
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section ref={sectionRef}>
      <motion.div
        className="relative flex justify-center items-center pt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={eventsDiv || "/placeholder.svg"}
          alt=""
          className="object-cover absolute rounded-3xl h-28 md:h-36 md:rounded-[3.5rem] my-4 -z-20 opacity-65 shadow-neon-purple"
        />
        <h2 className={twMerge("text-3xl font-semibold tracking-wide", inter.className)}>Events</h2>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row lg:px-44 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <EventCard
            description="We created a digital website for ABCD to help revolutionise the journey of tech solutions."
            tag1="Drone Making"
            tag2="Hands-on"
            title="Rotor X"
            posterImg={soloNotSolo}
            explanation="Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <EventCard
            description="We created a digital website for ABCD to help revolutionise the journey of tech solutions."
            tag1="Drone Making"
            tag2="Hands-on"
            title="Rotor X"
            posterImg={soloNotSolo}
            explanation="Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone."
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="pb-20 flex flex-col md:flex-row lg:px-44 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <EventCard
            description="We created a digital website for ABCD to help revolutionise the journey of tech solutions."
            tag1="Drone Making"
            tag2="Hands-on"
            title="Rotor X"
            posterImg={soloNotSolo}
            explanation="Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <EventCard
            description="We created a digital website for ABCD to help revolutionise the journey of tech solutions."
            tag1="Drone Making"
            tag2="Hands-on"
            title="Rotor X"
            posterImg={soloNotSolo}
            explanation="Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone."
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


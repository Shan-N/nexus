"use client"

import { Inter } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { EventCard } from "../ui/EventCard"
import soloNotSolo from "@/assets/solonotsolo.png"
import rotorX from '@/assets/rotorX.png';
import hardHack from '@/assets/hardHack.png';
import latentShow from '@/assets/latentShow.png';
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
        className="relative flex justify-center items-center pt-20 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <video
          src='https://res.cloudinary.com/dl4tccguh/video/upload/v1740218750/eventsBg.mp4'
          className="object-cover absolute rounded-3xl h-28 md:h-36 md:rounded-[3.5rem] w-[21rem] md:w-[65rem] mx-4 my-4 -z-20 opacity-85 shadow-[0_0_20px_10px_rgba(147,51,234,0.35)]"
          autoPlay
        />
        <h2 className={twMerge("text-3xl font-semibold tracking-wide", inter.className)}>Events</h2>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row lg:px-52 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <EventCard
            description="RotorX: A 2-day hands-on drone workshop covering flight basics, assembly, applications, and a final presentation."
            tag1="Drone Making"
            tag2="Tech"
            title="Rotor X"
            posterImg={rotorX}
            explanation="Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone."
            coordinators={["Harish Patil", "Ayush Benade" ,"Nimisha Halabe"]}
            googleLink="https://tinyurl.com/etsaRotor"
            eventRules="https://docs.google.com/document/d/1UWRYXnXxrhtgXI1EQcuFw5sHFDVxJEk6/edit?usp=sharing&ouid=117214772839008485950&rtpof=true&sd=true"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <EventCard
            description="RotorX: A 2-day hands-on drone workshop covering flight basics, assembly, applications, and a final presentation."
            tag1="Hardware"
            tag2="Tech"
            title="Hardware Hackathon"
            posterImg={hardHack}
            explanation="Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone."
            coordinators={["Mayank Gangrediwar", "Kaushal Lawande" ,"Harshal Lohokare"]}
            googleLink="https://yorbot.in/"
            eventRules="https://drive.google.com/file/d/1-97kJVScGKmMgLKPhH0H8p6b9JoZ6g8T/view?usp=sharing"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="pb-20 flex flex-col md:flex-row lg:px-52 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <EventCard
            description="Solo Not Solo: Start alone, get teamed up, tackle challenges, and finish strong together!"
            tag1="Matchmaking"
            tag2="Non-Tech"
            title="Solo Not Solo"
            posterImg={soloNotSolo}
            explanation='"Solo Not Solo" is a team-based challenge where participants register individually and are later grouped into teams. The event consists of three rounds designed to test problem-solving, communication, and teamwork.'
            coordinators={["Risha Chopra", "Arpita Sutar" ,"Eshal Shaikh"]}
            googleLink="https://tinyurl.com/etsaSNS"
            eventRules="https://drive.google.com/file/d/1nQFlhEDg9dURTulyeM0CEmtjmPcwOchE/view?usp=sharing"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <EventCard
            description="We created a digital website for ABCD to help revolutionise the journey of tech solutions."
            tag1="Brainrot"
            tag2="Non-Tech"
            title="PCCOE&apos;s Got Talent"
            posterImg={latentShow}
            explanation="Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone."
            coordinators={["Riddhi Kulkarni", "Shruti Badgujar" ,"Arya Gavasane"]}
            googleLink="https://tinyurl.com/etsaLatent"
            eventRules="https://docs.google.com/document/d/19vny6KmiIRENIj6muc715BhU38nLAG9g/edit?usp=sharing&ouid=117214772839008485950&rtpof=true&sd=true"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
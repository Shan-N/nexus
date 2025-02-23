"use client"

import { Inter } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { EventCard } from "../ui/EventCard"
import soloNotSolo from "@/assets/3.png"
import rotorX from '@/assets/1.png';
import hardHack from '@/assets/2.png';
import latentShow from '@/assets/4.png';
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
          src='https://res.cloudinary.com/dl4tccguh/video/upload/v1740309232/eventsBg_abjpbv.mp4'
          className="object-cover absolute rounded-3xl h-28 md:h-36 md:rounded-[3.5rem] w-[21rem] md:w-[65rem] mx-4 my-4 -z-20 opacity-85 shadow-[0_0_20px_10px_rgba(147,51,234,0.35)]"
          autoPlay
          loop
          muted
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
            description="Rotor X: A 2-day hands-on drone workshop covering flight basics, assembly, applications, and a final presentation."
            tag1="Drone Making"
            tag2="Tech"
            title="Rotor X"
            posterImg={rotorX}
            explanation="Rotor X is an exciting drone-making workshop where participants learn about the principles of flight, electronics, and robotics while building their own functional drone."
            coordinators={[{name:'Harish Patil', contact:'8767559134'}, {name:'Aayush Benade', contact:'8856927697'}, {name:'Nimisha Halabe', contact:'9028401706'}]}
            googleLink="https://tinyurl.com/etsaRotor"
            eventRules="https://docs.google.com/document/d/1UWRYXnXxrhtgXI1EQcuFw5sHFDVxJEk6/edit?usp=sharing&ouid=117214772839008485950&rtpof=true&sd=true"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <EventCard
            description="Hardware Hackathon: Innovate, build, and create groundbreaking robotic solutions to real-world challenges with skill, passion, and creativity!"
            tag1="Hardware"
            tag2="Tech"
            title="Hardware Hackathon"
            posterImg={hardHack}
            explanation="The Electronics and Telecommunication Students Association (ETSA), in collaboration with Yorbot, presents an exciting Hardware Hackathon at Pimpri Chinchwad College of Engineering on 7th March! Compete in teams of 3-5 members, showcase innovative robotics solutions, and win prizes worth ₹50,000. Get hands-on experience, expert guidance, and the opportunity to build and present your project. Register now and unleash your creativity! 💡🔥"
            coordinators={[{name:'Kaushal Lawande', contact:'7385139399'}, {name:'Mayank Gangrediwar', contact:'7276379674'}, {name:'Harshal Lohokare', contact:'9552451968'}]}
            googleLink="https://yorbot.in/"
            eventRules="https://drive.google.com/file/d/1-97kJVScGKmMgLKPhH0H8p6b9JoZ6g8T/view?usp=sharing"
            className=""
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
            coordinators={[{name:'Risha Chopra', contact:'8087115878'}, {name:'Arpita Sutar', contact:'9421449314'}, {name:'Eshal Shaikh', contact:'9325010694'}]}
            googleLink="https://tinyurl.com/etsaSNS"
            eventRules="https://drive.google.com/file/d/17yHs7XgW_Jk6g0YHhTG8gjmAqJTt9h3W/view?usp=sharing"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <EventCard
            description="Raw and Unfiltered: Perform anything, start solo or group up, and let your talent shine freely!"
            tag1="Brainrot"
            tag2="Non-Tech"
            title="Raw & Unfiltered"
            posterImg={latentShow}
            explanation="Pimpri Chinchwad College of Engineering (PCCOE) is proud to present Raw and 
            Unfiltered, an electrifying talent showcase! This event is a one-of-a-kind platform where 
            students from PCCOE and beyond can display their hidden talents, including singing, 
            dancing, magic, comedy, poetry, beat boxing, and much more!"
            coordinators={[{name:'Riddhi Kulkarni', contact:'7875029291'}, {name:'Shruti Badgujar', contact:'8459634766'}, {name:'Arya Gavsane', contact:'9356770591'}]}
            googleLink="https://tinyurl.com/etsaLatent"
            eventRules="https://drive.google.com/file/d/1h_LrQim4n7rgdFJ9_GsS6v8uFI4rOVr3/view?usp=sharing"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
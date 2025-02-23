import sponsorsDescription from "@/data/sponsorsEvent.json"
import Image from "next/image"
import { motion } from "framer-motion"
import { Fragment } from "react"

export const SponsorCTA = () => {
  const filteredSponsors = sponsorsDescription

  return (
    <div className="relative flex justify-center items-center pb-8 md:pb-16">
      <div className="bg-[#F4A0FF]/5 absolute backdrop-blur-sm rounded-t-full rounded-b-full rounded-r-full -z-30 px-36 py-10"></div>
      {/* Add overflow hidden wrapper */}
      <div className="overflow-hidden w-full">
        <motion.div
          animate={{ translateX: "-50%" }}
          transition={{
            duration: 10, // Slower duration for smoother movement
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-row gap-10 py-6 w-fit pr-10"
        >
            {Array.from({length:10}).map((_,i) => (
                <Fragment key={i}>
                        {filteredSponsors.map((item, index) => (
                        <a key={`original-${index}`} href={item.link} className="shrink-0">
                        <Image
                            src={item.Image || "/placeholder.svg"}
                            alt={item.name}
                            className="size-20 aspect-square object-contain"
                            width={300}
                            height={300}
                        />
                        </a>
                    ))}
                </Fragment>
            ))}
        </motion.div>
      </div>
    </div>
  )
}


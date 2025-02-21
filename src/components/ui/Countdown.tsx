'use client';
import { useEffect, useState } from "react"
import { CardContent } from "@/components/ui/card"
import { twMerge } from "tailwind-merge";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
    variable: "--font-league-spartan",
    weight: "400",
    subsets: ["latin"],
  });

const targetDate = new Date("2025-03-07T00:00:00").getTime()

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, []) // Removed calculateTimeLeft from dependencies

  return (
      <div className={twMerge("flex flex-col gap-10 justify-center items-center w-full px-4",leagueSpartan.className)}>
        <h2 className="text-2xl md:text-4xl font-semibold">NEXUS&apos;25</h2>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col">
                <span className="text-3xl md:text-5xl font-bold">{value}</span>
                <span className="text-sm md:text-base font-extralight uppercase">{unit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
  )
}


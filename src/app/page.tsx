'use client';
import { Events } from "@/components/sections/Events";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
// import { SponsorCTA } from "@/components/sections/SponsorCTA";
import Countdown from "@/components/ui/Countdown";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const glimpsesRef = useRef<HTMLDivElement>(null);
  return (
    <>
    <Navbar homeRef={homeRef} eventsRef={eventsRef} contactRef={footerRef} glimpsesRef={glimpsesRef}  />
    <Hero sectionRef={homeRef} />
    {/* <SponsorCTA /> */}
    <Events sectionRef={eventsRef} />
    <Countdown />
    <Footer sectionRef={footerRef} />
    </>
  );
}

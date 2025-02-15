'use client';
import { Events } from "@/components/sections/Events";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Events />
    <Footer />
    </>
  );
}

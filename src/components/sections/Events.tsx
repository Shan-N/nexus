import Image from "next/image";
import eventsDiv from '@/assets/eventsDiv.png';
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { EventCard } from "../ui/EventCard";
import soloNotSolo from '@/assets/solonotsolo.png';

const inter = Inter({ subsets: ['latin'] });
export const Events = () => {
    return (
        <section>
            <div className="relative flex justify-center items-center shadow">
                <Image src={eventsDiv} alt="" className="object-cover absolute rounded-3xl h-28 px-4 md:h-36 md:rounded-[3.5rem] md:px-10 py-4 -z-20 opacity-65 shadow-neon-purple" />
                <h2 className={twMerge("text-3xl font-semibold tracking-wide", inter.className)}>Events</h2>
            </div>
            <div className="flex flex-col md:flex-row md:px-10">
                <EventCard 
                description="We created a digital website for ABCD to help revolutionise the journey of tech solutions." 
                tag1="Drone Making" 
                tag2="Hands-on" 
                title="Rotor X" 
                posterImg={soloNotSolo} />
                <EventCard 
                description="We created a digital website for ABCD to help revolutionise the journey of tech solutions." 
                tag1="Drone Making" 
                tag2="Hands-on" 
                title="Rotor X" 
                posterImg={soloNotSolo} />
            </div>
            <div className="pb-96 flex flex-col md:flex-row md:px-10">
                <EventCard 
                description="We created a digital website for ABCD to help revolutionise the journey of tech solutions." 
                tag1="Drone Making" 
                tag2="Hands-on" 
                title="Rotor X" 
                posterImg={soloNotSolo} />
                <EventCard 
                description="We created a digital website for ABCD to help revolutionise the journey of tech solutions." 
                tag1="Drone Making" 
                tag2="Hands-on" 
                title="Rotor X" 
                posterImg={soloNotSolo} />
            </div>
        </section>
    );
}
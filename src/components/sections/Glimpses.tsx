import { twMerge } from "tailwind-merge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Inter } from "next/font/google";
import Image from "next/image";
import wholeTeam from '@/assets/festX2.jpg';
import clapTeam from '@/assets/festX3.jpg';
import autoExpo from '@/assets/festX4.jpg'
import teamInSuits from '@/assets/festX5.jpg'
import fareWell from '@/assets/festX6.jpg';
import festX from '@/assets/festX1.jpg'

const inter = Inter({
    subsets: ["latin"]
})
export const Glimpses = ({
    sectionRef
} : {
    sectionRef: React.RefObject<HTMLDivElement | null>
}) => {
    return (
        <section ref={sectionRef} className="flex flex-col justify-center items-center gap-5 pb-10 pt-4 overflow-hidden">
            <span className={twMerge('text-2xl md:text-4xl font-semibold tracking-wide',inter.className)}>Glimpes &apos;24</span>
            <Carousel>
                <div className="flex">
                <CarouselContent>
                    <CarouselItem><Image src={festX} alt="" className="size-60 md:size-[30rem] object-cover aspect-square" priority /></CarouselItem>
                    <CarouselItem><Image src={wholeTeam} alt="" className="size-60 md:size-[30rem] object-cover aspect-square" priority /></CarouselItem>
                    <CarouselItem><Image src={clapTeam} alt="" className="size-60 md:size-[30rem] object-cover aspect-square" priority /></CarouselItem>
                    <CarouselItem><Image src={autoExpo} alt="" className="size-60 md:size-[30rem] object-cover aspect-square" priority /></CarouselItem>
                    <CarouselItem><Image src={fareWell} alt="" className="size-60 md:size-[30rem] object-cover aspect-square" priority /></CarouselItem>
                    <CarouselItem><Image src={teamInSuits} alt="" className="size-60 md:size-[30rem] object-cover aspect-square" priority /></CarouselItem>
                </CarouselContent>
                </div>
                <div className="flex justify-center items-center gap-6 md:gap-16 pt-10 md:pt-20">
                <CarouselPrevious />
                <CarouselNext />
                </div>
            </Carousel>
        </section>
    );
}
import { Inter } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

const inter = Inter({
    subsets:['latin']
})

interface EventCards {
    title : string;
    tag1 : string;
    tag2 : string;
    description : string;
    posterImg: StaticImageData;
}
export const EventCard = (props:EventCards) => {
    const { title, tag1, tag2, description, posterImg } = props;
    return (
        <div className="pt-28 px-4">
            <div className="flex flex-col justify-center border-l border-r-2 border-b-2 border-white/50 rounded-3xl lg:">
            <Image src={posterImg} alt={title} className="h-full md:h-[500px] object-cover rounded-t-3xl" />
            <div className={twMerge("flex flex-row justify-between gap-10 px-4 py-3 bg-white/5 backdrop-blur-xl rounded-b-3xl", inter.className)}>
            <div>
            <span className="text-sm pt-4 font-extralight">Department of EnTC</span>
            <h2 className="text-2xl py-4 tracking-wide">{title}</h2>
            <div className="flex gap-4">
                <span className="px-2 py-1 bg-white/10 backdrop-blur rounded inline-flex justify-center text-xs font-light">{tag1}</span>
                <span className="px-2 py-1 bg-white/10 backdrop-blur rounded inline-flex justify-center text-xs font-light">{tag2}</span>
            </div>
            </div>
            <div className="flex justify-center items-end">
            <p className="text-sm font-light">{description}</p>
            </div>
            </div>
            </div>
        </div>
    );
}
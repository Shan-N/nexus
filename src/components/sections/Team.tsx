import { twMerge } from "tailwind-merge";
import { Badge } from "../ui/badge"
import { Inter } from "next/font/google";
import { Github, Instagram, Linkedin } from "lucide-react";


interface teamMem {
    name: string;
    insta: string;
    git: string;
    linkd: string;
}

const inter = Inter({
    subsets: ["latin"],
 });
const teamMembers = [
    {name:'Shantanu Neve', insta:'https://instagram.com/nhk_shannn', git:'https://github.com/Shan-N', linkd:'https://linkedin.com/in/shantanu-neve'},
    {name:'Omkar Kumbhar', insta:'#', git:'#', linkd:'#' }
]

const TeamMem = ({name,insta,git,linkd}:teamMem) => {
    return(
        <>
        <span className="text-sm font-extralight px-2">{name}</span>
        <a href={insta} target="__blank"><Instagram className="size-4 text-gray-600 mx-2" /></a>
        <a href={git} target="__blank"><Github className="size-4 text-gray-600 mx-2" /></a>
        <a href={linkd} target="__blank"><Linkedin className="size-4 text-gray-600 mx-2" /></a>
        </>
    );
}

export const Team = ({
    sectionRef
}: {
    sectionRef: React.RefObject<HTMLDivElement | null>
}) => {
    return(
    <section ref={sectionRef}>
        <div className="flex flex-col px-4 md:px-6">
            <span className={twMerge('text-2xl font-semibold', inter.className)}>Developer Credits</span>
            <div className="flex flex-col md:flex-row py-4 gap-2 w-56 md:w-[30rem]">
            {teamMembers.map((member,i) => 
            <Badge key={i} className="px-1 bg-gray-600/40 py-2 rounded-full max-w-md"><TeamMem name={member.name} insta={member.insta} git={member.git} linkd={member.linkd} /></Badge>
            )}
            </div>
        </div>
    </section>
    );
}
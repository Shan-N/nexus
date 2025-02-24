import { Instagram, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <main className="flex flex-col justify-center items-center h-screen gap-10">
            <section className="flex flex-col justify-center items-center">
                <h2>For website related queries contact at {" "} <a href="mailto:shantanu.neve23@pccoepune.org">shantanu.neve23@pccoepune.org</a></h2>
                <h2>For Overall queries contact at{" "}<a href="mailto:nexusetsa@gmail.com">etsaietepccoe1@gmail.com / nexusetsa@gmail.com</a></h2>
            </section>
            <section className="flex flex-col justify-center items-center gap-5 pt-10">
                <div className="flex flex-col justify-center items-center">
                    Socials
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                <a href="https://www.instagram.com/etsapccoe/" target="__blank"><Instagram className="size-10 text-gray-500" /></a>
                <a href="https://www.linkedin.com/company/iete-pccoe-students-forum" target="__blank"><Linkedin className="size-10 text-gray-500"/></a>
                </div>
            </section>
        </main>
    );
}
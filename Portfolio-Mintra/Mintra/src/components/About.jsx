import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            About Me 😊
                        </Highlighter>
                    </h2>
        </div>  
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="my-12"
          textClassName="font-sans text-base sm:text-lg md:text-xl"
        >
        Hello! I'm Mintra, a passionate technology enthusiast currently pursuing a degree in Digital Industry Integration (DII) at the College of Arts, Media and Technology (CAMT), Chiang Mai University. My academic journey has equipped me with a diverse and well-rounded skill set, ranging from UX/UI design and Full-Stack web development (Front-end & Back-end) to Business strategy and Web3 technologies. Currently, I am expanding my technical expertise as an AI Developer Intern. I enjoy bridging the gap between business needs, user-centric design, and advanced technology to create impactful digital solutions.
        </ScrollReveal>
      </div>
    </section>
  );
}
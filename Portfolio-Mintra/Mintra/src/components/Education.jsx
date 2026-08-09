import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Highlighter } from "@/components/ui/highlighter";

export default function Education() {
  return (
    <section id="education" className="w-full bg-white text-black pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Qualifications
              </Highlighter>
            </h2>
          </div>
          <div className="relative flex max-w-lg mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
            <Tree
  initialExpandedItems={["Education", "CMU", "WP", "Experience", "Certifications", "Projects"]}
>
  <Folder element="My Education" value="Education">
    <Folder element="Chiang Mai University" value="CMU">
      <File value="CMU-DII">
        <p>Digital Industry Integration (2025 – 2026)</p>
      </File>
    </Folder>
    <Folder element="Wattanothaipayap School" value="WP">
      <File value="WP-CRE">
        <p>Computer and Robotics Engineering (2022 – 2024)</p>
      </File>
    </Folder>
  </Folder>

  <Folder element="My Experience" value="Experience">
    <Folder element="Zygen" value="Zygen">
      <File value="Zygen-Intro">
        <p>AI Developer Intern (IA Team)</p>
      </File>
    </Folder>
    <Folder element="Multi-Flooring" value="Multi-Flooring">
      <File value="Multi-Flooring-Intro">
        <p>Project Coordinator (2024 – Present)</p>
      </File>
    </Folder>
    <Folder element="Northern Digital Enterprise Association" value="NDEA">
      <File value="NDEA-Intro">
        <p>Consultant - Multi-Flooring Project at Central Chiangmai</p>
      </File>
    </Folder>
  </Folder>

  <Folder element="My Bootcamps & Certifications" value="Certifications">
    <Folder element="ETHChiangmai Hackathon" value="ETHChiangmai">
      <File value="ETH-DecentralMind">
        <p>Participant & Developer - Decentral Mind Project</p>
      </File>
    </Folder>
    <Folder element="DevCommu Org" value="DevCommu">
      <File value="DevCommu-Bootcamp">
        <p>Web Development Bootcamp</p>
      </File>
    </Folder>
    <Folder element="FutureSkill" value="FutureSkill">
      <File value="FutureSkill-Courses">
        <p>Training Courses Completion</p>
      </File>
    </Folder>
  </Folder>

  <Folder element="My Projects" value="Projects">
    <Folder element="Chiang Mai Global Digital City" value="DigitalCity">
      <File value="DigitalCity-Prototype">
        <p>Digital Prototype Developer</p>
      </File>
    </Folder>
    <Folder element="Hardware & IoT" value="Hardware-IoT">
      <File value="IoT-SmartGreenHouse">
        <p>Smart Green House Project</p>
      </File>
    </Folder>
  </Folder>
</Tree>
          </div>
        </div>
      </div>
    </section>
  );
}
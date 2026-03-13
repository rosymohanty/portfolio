import React from 'react'

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiRender,
  SiTypescript,
  SiMysql,
} from "react-icons/si";

export const Skills = () => {
  const technologies = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Render", icon: <SiRender /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center
              transition-all duration-300
              hover:scale-110 hover:shadow-[0_0_25px_rgba(32,178,166,0.6)]
              hover:border hover:border-primary/40"
            >
              <div className="text-4xl text-primary mb-3 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(32,178,166,0.9)]">
                {tech.icon}
              </div>

              <p className="text-sm font-medium text-muted-foreground">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
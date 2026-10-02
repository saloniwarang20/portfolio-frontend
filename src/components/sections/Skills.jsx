import { motion } from "motion/react";
import java from "../../assets/icons/Java.png"
import javascript from "../../assets/icons/JavaScript.png"
import spring from "../../assets/icons/Spring.png"
import hibernate from "../../assets/icons/Hibernate.png"
import node from "../../assets/icons/Node.js.png"
import express from "../../assets/icons/Express.png"
import react from "../../assets/icons/React.png"
import tailwind from "../../assets/icons/Tailwind CSS.png"
import bootstrap from "../../assets/icons/Bootstrap.png"
import sql from "../../assets/icons/MySQL.png"
import mongodb from "../../assets/icons/MongoDB.png"
import aws from "../../assets/icons/AWS.png"
import docker from "../../assets/icons/Docker.png"
import git from "../../assets/icons/Git.png"
import github from "../../assets/icons/GitHub.png"
import html from "../../assets/icons/HTML5.png"
import css from "../../assets/icons/css.png"
import postman from "../../assets/icons/Postman.png"

const Skills = () => {
  const skills = [
    { name: "Java", icon: java },
    { name: "JavaScript", icon: javascript },
    { name: "Spring Boot", icon: spring },
    { name: "JPA / Hibernate", icon: hibernate },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: "React.js", icon: react },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Bootstrap", icon: bootstrap },
    { name: "MySQL", icon: sql },
    { name: "MongoDB", icon: mongodb },
    { name: "AWS", icon: aws },
    { name: "Docker", icon: docker },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Postman", icon: postman },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },

  ];

  return (
    <section
      id="skills"
      className="bg-zinc-950 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-zinc-500 mb-3">
            02
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-white">
            Skills
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-white mt-5"
          />
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="flex flex-wrap gap-3 max-w-5xl"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                flex items-center gap-2
                px-5 py-4
                border border-white/10
                bg-zinc-900/40
                text-zinc-400
                hover:text-white
                hover:border-white/30
                transition-colors duration-300
              "
            >
              {skill.icon && (
                <img 
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 object-contain"/>
              )}

              <span className="font-mono text-xs">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
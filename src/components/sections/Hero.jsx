import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Hero = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/saloni-uday-warang/",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      href: "https://github.com/saloniwarang20",
    },
    {
      name: "Email",
      icon: <IoIosMail size={22} />,
      href: "mailto:saloniwarang20@email.com",
    },
  ];

  const [displayName, setDisplayName] = useState("");

  const fullName = "Saloni Warang";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayName(fullName.slice(0, index+1));
      index++;

      if(index === fullName.length){
        clearInterval(interval);
      }
    },120);

    return () => clearInterval(interval);
  },[]);

  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-950 flex items-center justify-center"
    >
      <div className="w-full px-8">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col items-center text-center"
        >

          {/* Hi, I'm */}
          <motion.p
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
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="font-mono text-sm text-zinc-500 mb-5"
          >
            Hi, I'm
          </motion.p>


          {/* Name */}
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="font-serif text-6xl md:text-8xl font-semibold tracking-wider text-white"
          >
            {displayName}

            <motion.span
              animate={{
                opacity:[1,0,1],
              }}
              transition={{
                duration: 0.8,
                repeat:Infinity,
                ease:"easeInOut",
              }}
              className="ml-2 text-zinc-400">
              |
            </motion.span>
          </motion.h1>


          {/* Role */}
          <motion.h2
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
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-5 text-1xl md:text-3xl font-mono text-zinc-300"
          >
            Full Stack Developer
          </motion.h2>


          {/* Description */}
          <motion.p
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
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="font-mono mt-5 max-w-xl text-sm md:text-base leading-7 text-zinc-500"
          >
            I build modern web applications using Java,
            Spring Boot, React and SQL.
          </motion.p>


          {/* Social links */}
          <motion.div
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
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="flex items-center gap-8 mt-9"
          >

            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={
                  social.name !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300"
              >
                {social.icon}

                <span className="font-mono text-xs">
                  {social.name}
                </span>
              </motion.a>
            ))}

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
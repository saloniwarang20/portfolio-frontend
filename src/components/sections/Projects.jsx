import { motion } from "motion/react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import eventraImage from "../../assets/images/Eventra.png"
import ecomImage from "../../assets/images/Ecom.png"
import showhopImage from "../../assets/images/ShowHop.png"

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "E-Commerce Fashion Platform",
      description:
        "A full-stack fashion e-commerce platform with product catalogue, categories, brands, variants, cart, wishlist, reviews, search, checkout and order management.",
      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "JPA / Hibernate",
        "Spring Security",
        "JWT",
      ],
      image: ecomImage,
      githubLinks: [
        {
          label: "Frontend",
          url: "https://github.com/saloniwarang20/ecom-fashion-frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/saloniwarang20/ecom-fashion-backend",
        },
      ],
      live: "https://ecom-fashion-frontend.vercel.app/",
    },
    {
      number: "02",
      title: "ShowHop — Movie Booking Platform",
      description:
        "A full-stack movie ticket booking platform featuring movie discovery, search, reviews, theatre and showtime listings, interactive seat selection, secure authentication, and booking management with a countdown timer.",
      technologies: [
        "Java", "Spring Boot", "React.js", "PostgreSQL", "Spring Data JPA", "Spring Security", "JWT", "Tailwind CSS",
      ],
      image: showhopImage,
      githubLinks: [
        {
          label: "Frontend",
          url: "https://github.com/saloniwarang20/showhop-frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/saloniwarang20/showhop-backend",
        },
      ],
      live: "https://showhop-frontend.vercel.app/",
    },
    {
      number: "03",
      title: "Eventra",
      description:
        "A collaborative event management platform for creating and managing events, coordinating volunteers, communicating with participants and tracking tasks.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      image: eventraImage,
      githubLinks: [
        {
          label: "GitHub",
          url: "https://github.com/saloniwarang20/Eventra",
        },
      ],
      live: "https://eventra-sage-ten.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-zinc-950 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-zinc-500 mb-3">
            03
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-white">
            Projects
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-white mt-5"
          />
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group"
            >

              <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden border border-white/10 bg-zinc-900"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      aspect-video
                      object-contain
                      opacity-80
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>

                {/* Project Information */}
                <div>

                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-xs text-zinc-600">
                      {project.number}
                    </span>

                    <div className="h-px w-10 bg-white/10" />
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl text-white">
                    {project.title}
                  </h3>

                  <p className="font-mono text-sm text-zinc-500 leading-7 mt-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-7">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          font-mono
                          text-[11px]
                          text-zinc-400
                          border
                          border-white/10
                          px-3
                          py-2
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 mt-8">

                    {project.githubLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          font-mono
                          text-xs
                          text-zinc-500
                          hover:text-white
                          transition-colors
                        "
                      >
                        <FaGithub size={15} />
                        {link.label}
                      </a>
                    ))}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        font-mono
                        text-xs
                        text-zinc-500
                        hover:text-white
                        transition-colors
                      "
                    >
                      <FaArrowUpRightFromSquare size={13} />
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
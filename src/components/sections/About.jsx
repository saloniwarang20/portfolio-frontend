import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-950 flex items-center justify-center border-t border-white/10"
    >
      <div className="w-full max-w-6xl px-8 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-zinc-500 mb-3">
            01
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-white">
            About Me
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-white mt-5"
          />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-lg text-zinc-300 leading-8">
              I'm a Java Full Stack Developer who enjoys building
              modern, responsive and scalable web applications.
            </p>

            <p className="font-mono text-sm md:text-base text-zinc-500 leading-7 mt-6">
              I enjoy working on both the frontend and backend,
              turning ideas into complete applications and
              understanding how each part of a system works
              together.
            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Quote */}
            <div className="border-l border-white/20 pl-8">

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif text-3xl md:text-4xl text-zinc-200 leading-tight"
              >
                "Build. Learn.
                <br />
                Improve.
                <br />
                Repeat."
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="font-mono text-xs text-zinc-500 mt-8"
              >
                — My approach to development
              </motion.p>

            </div>

            {/* Small animated line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeInOut",
              }}
              className="h-px bg-white/10 mt-12"
            />

            {/* Developer mindset */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-between mt-5 font-mono text-xs text-zinc-600"
            >
              <span>CURIOUS</span>
              <span>BUILDING</span>
              <span>LEARNING</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
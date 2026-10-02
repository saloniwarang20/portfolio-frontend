import { motion } from "motion/react";

const Experience = () => {
  const journey = [
    {
      year: "2026",
      title: "Bachelor of Science in Computer Science",
      description:
        "Graduated from Mumbai University with a CGPA of 9.66.",
    },
    {
      year: "2026",
      title: "Full Stack Web Development",
      description:
        "Completed a Full Stack Web Development certification and continued building full-stack applications.",
    },
    {
      year: "Present",
      title: "Learning & Improving",
      description:
        "Continuously improving my development skills while practicing Data Structures and Algorithms using Java.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-zinc-950 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-8 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-zinc-500 mb-3">
            04
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-white">
            My Journey
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-white mt-5"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="
              absolute
              left-1.75
              top-0
              w-px
              bg-white/10
            "
          />

          <div className="space-y-12">

            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative pl-12"
              >

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.15 + 0.2,
                  }}
                  className="
                    absolute
                    left-0
                    top-1
                    w-3.75
                    h-3.75
                    rounded-full
                    bg-zinc-950
                    border
                    border-white/40
                  "
                />

                {/* Year */}
                <p className="font-mono text-xs text-zinc-600 mb-2">
                  {item.year}
                </p>

                {/* Title */}
                <h3 className="font-serif text-2xl text-zinc-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="
                  font-mono
                  text-sm
                  text-zinc-500
                  leading-7
                  mt-3
                  max-w-2xl
                ">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
import { motion } from "motion/react";

const Navbar = () => {

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >

      <div className="font-mono mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-sm uppercase tracking-wider text-white"
        >
          SALONI
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (

            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial="rest"
              whileHover="hover"
              className="relative text-xs text-gray-400 hover:text-white uppercase tracking-wide transition-colors duration-300 py-2"
            >

              {item.name}

              {/* Animated underline */}
              <motion.span
                variants={{
                  rest: {
                    width: "0%",
                    opacity: 0,
                  },
                  hover: {
                    width: "100%",
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute left-0 bottom-0 h-px bg-white"
              />

            </motion.a>

          ))}

        </div>

      </div>

    </motion.nav>
  );
};

export default Navbar;
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-zinc-400">
              @Saloni Warang
            </p>

            <p className="text-xs text-zinc-600 mt-1">
              Java Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            <motion.a
              href="https://github.com/saloniwarang20"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/saloni-uday-warang/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <FaLinkedinIn size={18} />
            </motion.a>

            <motion.a
              href="mailto:saloniwarang20@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <MdEmail size={20} />
            </motion.a>

          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Saloni Warang
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
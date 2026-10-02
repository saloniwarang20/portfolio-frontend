import { useState } from "react";
import { motion } from "motion/react";
import { sendMessage } from "../../services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await sendMessage(formData);

      if (response.success) {
        setStatus("Message sent successfully.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-white/10 bg-zinc-950"
      >
        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Heading */}
          <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-zinc-500 mb-3">
            05
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-white">
            Contact
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-white mt-5"
          />

          

        </motion.div>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
            
                <div className="">
                    <h2 className="font-mono text-xl md:text-2xl font-semibold text-white">
                        Let's connect.
                    </h2>

                    <p className="mt-4 text-zinc-400 max-w-xl">
                    Have a project, opportunity, or just want to say hello?
                    Feel free to send me a message.
                    </p>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/30 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/30 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-white/30 transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.90 }}
                transition={{ duration: 0.15 }}
                className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {status && (
                <p className="text-sm text-zinc-400">
                  {status}
                </p>
              )}

            </motion.form>

          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;
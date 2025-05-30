import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="bg-[#1f2937] rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center text-sm text-blue-400 hover:text-blue-200 transition"
    >
      View Project <FaExternalLinkAlt className="ml-2 text-xs" />
    </a>
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111827] text-white font-sans scroll-smooth">
      <nav className="w-full fixed top-0 left-0 bg-[#111827] border-b border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-white font-semibold text-lg">Kavitha</span>
          <div className="space-x-6 text-sm text-gray-400">
            <a href="#intro" className="hover:text-white transition">Intro</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#blog" className="hover:text-white transition">Blog</a>
            {/* <a href="#contact" className="hover:text-white transition">Contact</a> */}
          </div>
        </div>
      </nav>

      <section id="intro" className="flex flex-col items-center justify-center px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/profile.jpg"
            alt="Kavitha's photo"
            width={120}
            height={120}
            className="rounded-full border border-gray-700 mb-6"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Kavitha Chauhan</h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-base md:text-lg mb-4 max-w-2xl"
          >
            I’m a Software Development Engineer at Amazon. Previously, I worked as a Data Scientist at Global Payments and as a Machine Learning Analyst at NVIDIA’s graphics division.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg mb-4 max-w-2xl"
          >
            I’m passionate about designing intelligent systems, and in my free time I enjoy video creation and storytelling.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 my-6">
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">Python</span>
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">JavaScript</span>
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">C++</span>
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">Machine Learning Models</span>
            <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">Next.js</span>
          </div>
          <div className="flex gap-6 text-gray-400 text-xl mb-4">
            <a href="https://github.com/Chkavitha" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/KavithaChauhan" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="mailto:kavithachauhan21@gmail.com" className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>

        </motion.div>
      </section>

      <section id="projects" className="py-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
          
            <ProjectCard
              title="Weather App"
              description="React app using OpenWeather API to show live weather updates."
              link="https://github.com/ChKavitha/GenAI-Weather-Project"
            />
        
            <ProjectCard
              title="Blog Posts"
              description="Tech thoughts and tutorials shared on Medium."
              link="https://medium.com/@kavithachauhan21"
            />
          </div>
        </motion.div>
      </section>

      {/* <section id="contact" className="py-24 px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Contact</h2>
          <p className="text-gray-400 text-center mb-6">
            Feel free to reach out for collaborations, project ideas, or just to say hi!
          </p>
          <div className="flex justify-center gap-8 text-2xl">
            <a href="mailto:kavithachauhan21@gmail.com" className="hover:text-blue-400 transition" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/ChKavitha" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/KavithaChauhan" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </section> */}

      <footer className="text-center text-sm text-gray-500 py-8 border-t border-gray-800">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Chkavitha" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/KavithaChauhan/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="mailto:kavithachauhan21@gmail.com" className="hover:text-white transition">
            <FaEnvelope className="text-xl" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Kavitha Chauhan. All rights reserved.</p>
      </footer>
    </main>
  );
}

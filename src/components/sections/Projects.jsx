import {RevealOnScroll} from "../Reveal"
import { FaGithub } from "react-icons/fa";


export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
  <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)]">
    <h3 className="text-xl font-bold mb-3">Market-Place</h3>
    <p className="text-gray-400 mb-4">
        A market place to store,review,edit the items of your choice, with advanced features 
        as bot detection and rate-limiting. 
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["React", "Node.js", "express.js", "Postgresql","Tailwind CSS"].map((tech, index) => (
        <span 
          key={index}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_5px_10px_rgba(59,130,246,0.4)]"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
    <a
       target="blank" href="https://github.com/bikash451/Market-Place"
        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
    > <FaGithub className="ml-5"/>

        View Project →                 
    </a>
</div>


  </div>

    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)]">
    <h3 className="text-xl font-bold mb-3">Email Scraper</h3>
    <p className="text-gray-400 mb-4">
      Chrome extension that extracts email addresses from webpage
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["React", "Node.js", "AWS", "Docker"].map((tech, index) => (
        <span 
          key={index}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_5px_10px_rgba(59,130,246,0.4)]"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
    <a
        href="https://github.com/bikash451/Email-Scraper.git"
        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
    > <FaGithub className="ml-5"/>
        View Project →
    </a>
</div>
  </div>

      <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)]">
    <h3 className="text-xl font-bold mb-3">pocketMoney</h3>
    <p className="text-gray-400 mb-4">
PocketMoney is a modern personal finance tracking application that helps users manage and keep track of their daily financial activity    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["React", "Node.js", "AWS", "Docker"].map((tech, index) => (
        <span 
          key={index}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_5px_10px_rgba(59,130,246,0.4)]"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
    <a
        href="https://github.com/bikash451/pocketMoney.git"
        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
    >  <FaGithub className="ml-5"/>
        View Project →
    </a>
</div>
  </div>


</div>
            </div>

            </RevealOnScroll>
        </section>

    );
};
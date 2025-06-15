import { RevealOnScroll } from "../Reveal";

export const About = () => {
    const frontendSkills = [
        "HTML",
        "CSS",
        "React",
        "Tailwind CSS",
    ];

    const backendSkills = [
        "Node.js",
        "Express.js",
        "SQL",
        "PostgreSQL",
    ];

    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >

        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)] mb-8">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Frontend Skills */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10 hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)]">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                              hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                                              transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10 hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)]">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm 
                                              hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(126,58,242,0.2)] 
                                              transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)]">
    <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>
        <strong>B.Tech Computer Science and Engineering</strong> - Thapar Institute of Engineering and Technology (2022-2026)
      </li>
    </ul>
  </div>
</div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
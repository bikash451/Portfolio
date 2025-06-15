import { RevealOnScroll } from "../Reveal";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-tight">
                    Hi, I'm Bikash
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a full-stack developer who loves crafting clean, scalable web
                    applications. My goal is to build solutions that offer both
                    exceptional performance and a great user experience.
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-2">
                    <a
                        href="#projects"
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium
                                duration-300 ease-out relative overflow-hidden 
                                hover:-translate-y-1 transition-all hover:shadow-[0_5px_20px_rgba(59,130,246,0.5)]
                                active:translate-y-0 active:shadow-none"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-lg font-medium 
                                transition-all duration-300 ease-out
                                hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)]
                                hover:bg-blue-500/20 hover:border-blue-600
                                active:translate-y-0 active:shadow-none"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>

        </section>
    );
};
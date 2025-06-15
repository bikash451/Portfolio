import { useState } from "react";
import { RevealOnScroll } from "../Reveal";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                alert("Oops! Something went wrong. Please try again.");
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-12 md:py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full md:w-150">
                    <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 md:py-3 text-white 
                                        transition-all duration-300 ease-in-out
                                        hover:bg-white/10 hover:border-white/20
                                        focus:outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/30"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 md:py-3 text-white 
                                        transition-all duration-300 ease-in-out
                                        hover:bg-white/10 hover:border-white/20
                                        focus:outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/30"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 md:py-3 text-white 
                                        transition-all duration-300 ease-in-out
                                        hover:bg-white/10 hover:border-white/20
                                        focus:outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/30"
                                placeholder="Type your message here"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 md:py-3 px-6 rounded-lg font-medium 
                                    transition-all duration-300 ease-in-out relative overflow-hidden
                                    hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg
                                    active:bg-blue-800 active:translate-y-0 active:shadow-none"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
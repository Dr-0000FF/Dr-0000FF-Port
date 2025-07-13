import { useState } from "react";
import { Menu, Linkedin, Github } from "lucide-react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-4 left-4 right-4 flex items-start justify-between z-50 px-6">
            {/* Logo (far left) */}
            <div className="text-white font-bold text-xl select-none whitespace-nowrap">
                Dr.0000FF
            </div>

            {/* Nav bar dropdown (center) */}
            <nav
                className={`
                    flex justify-center space-x-12
                    bg-black/30 backdrop-blur-md
                    rounded-lg shadow-md
                    px-10 py-3
                    transition-all duration-300 ease-in-out
                    overflow-hidden
                    flex-shrink-0
                    ${isOpen ? "max-w-[700px] opacity-100 pointer-events-auto" : "max-w-0 opacity-0 pointer-events-none"}
                `}
                style={{ transitionProperty: "max-width, opacity" }}
            >
                <a href="/" className="text-white uppercase font-semibold tracking-wide hover:text-gray-300 hover:underline underline-offset-4 transition">Home</a>
                <a href="/about" className="text-white uppercase font-semibold tracking-wide hover:text-gray-300 hover:underline underline-offset-4 transition">About</a>
                <a href="/projects" className="text-white uppercase font-semibold tracking-wide hover:text-gray-300 hover:underline underline-offset-4 transition">Projects</a>
                <a href="/contact" className="text-white uppercase font-semibold tracking-wide hover:text-gray-300 hover:underline underline-offset-4 transition">Contact</a>
            </nav>

            {/* Toggle button + Social icons (far right) */}
            <div className="flex flex-col items-end space-y-2">
                <button
                    className="p-2 bg-black/50 rounded-md text-white backdrop-blur-sm hover:bg-black/70 transition"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <Menu />
                </button>

                {/* Social Icons */}
                <div
                    className={`
                        flex flex-col items-center space-y-2 transition-all duration-300 ease-in-out
                        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                        ml-[-8px]
                    `}
                >
                    <a href="https://www.linkedin.com/in/m-saygbeiii/" target="_blank" rel="noopener noreferrer" className="text- hover:text-blue-400 transition hover:scale-125 text-shadow-lg/30">
                        <Linkedin className="w-10 h-10" />
                    </a>
                    <a href="https://github.com/Dr-0000FF" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-gray-900 transition hover:scale-125 text-shadow-lg/30">
                        <Github className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nav;

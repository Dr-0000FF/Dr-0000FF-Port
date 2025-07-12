import { useState } from "react";
import { Menu } from "lucide-react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-4 left-4 right-4 flex items-center justify-between z-50 px-6">
            {/* Logo (far left) */}
            <div className="text-white font-bold text-xl select-none whitespace-nowrap">
                Dr.0000FF
            </div>

            {/* Nav bar dropdown */}
            <nav
                className={`
          flex justify-center space-x-12
          bg-black/30 backdrop-blur-md
          rounded-lg shadow-md
          px-10 py-3
          transition-all duration-300 ease-in-out
          overflow-hidden
          flex-shrink-0
          ${isOpen
                        ? "max-w-[700px] opacity-100 pointer-events-auto"
                        : "max-w-0 opacity-0 pointer-events-none"
                    }
        `}
                style={{ transitionProperty: "max-width, opacity" }}
            >
                <a
                    href="/"
                    className="text-white uppercase font-semibold tracking-wide hover:text-gray-300 hover:underline underline-offset-4 transition"
                >
                    Home
                </a>
                <a
                    href="/about"
                    className="text-white uppercase font-semibold tracking-wide hover:text-gray-300 hover:underline underline-offset-4 transition"
                >
                    About
                </a>
                <a
                    href="/contact"
                    className="text-white uppercase font-semibold tracking-wide hover:text-gray-300 hover:underline underline-offset-4 transition"
                >
                    Contact
                </a>
            </nav>

            {/* Toggle Button (far right) */}
            <button
                className="p-2 bg-black/50 rounded-md text-white backdrop-blur-sm hover:bg-black/70 transition"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <Menu />
            </button>
        </div>
    );
};

export default Nav;

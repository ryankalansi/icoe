import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ backgroundColor = "#E8E8E8" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="relative flex justify-between items-center px-4 sm:px-8 py-6 z-50"
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Logo */}
      <a href="/" className="text-3xl font-bold" style={{ color: "#0052b0" }}>
        1C0E_
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex space-x-8">
          <a
            href="/"
            className="text-lg font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#0052b0" }}
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="text-lg font-medium hover:opacity-80 transition-opacity"
            style={{ color: "#0052b0" }}
          >
            CONTACT
          </a>
        </div>
        <div className="flex space-x-2 ml-4">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(true)}>
          <Menu size={28} style={{ color: "#0052b0" }} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden"
          style={{ backgroundColor: backgroundColor }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-7 right-4"
          >
            <X size={32} style={{ color: "#0052b0" }} />
          </button>
          <div className="flex flex-col items-center space-y-8">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium"
              style={{ color: "#0052b0" }}
            >
              ABOUT
            </a>
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium"
              style={{ color: "#0052b0" }}
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

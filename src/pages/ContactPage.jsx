import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactPage = () => {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar backgroundColor="#FFFFFF" />

      {/* Main Content */}
      <main className="px-4 sm:px-8 py-12 md:py-20" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left"
            style={{ color: "#0052b0", fontFamily: "Fira Code" }}
          >
            CONTACT US
          </h1>

          {/* Contact Form */}
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  id="full_name"
                  className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer pt-4"
                  placeholder=" "
                  style={{ color: "#0052b0" }}
                />
                <label
                  htmlFor="full_name"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                  style={{ fontFamily: "Fira Code" }}
                >
                  FULL NAME
                </label>
              </div>

              {/* Email Address */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer pt-4"
                  placeholder=" "
                  style={{ color: "#0052b0" }}
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                  style={{ fontFamily: "Fira Code" }}
                >
                  EMAIL ADDRESS
                </label>
              </div>
            </div>

            {/* Message Subject */}
            <div className="relative pt-4">
              <input
                type="text"
                id="subject"
                className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer pt-4"
                placeholder=" "
                style={{ color: "#0052b0" }}
              />
              <label
                htmlFor="subject"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                style={{ fontFamily: "Fira Code" }}
              >
                MESSAGE SUBJECT
              </label>
            </div>

            {/* Message */}
            <div className="relative pt-4">
              <textarea
                id="message"
                rows="3"
                className="block w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer pt-4"
                placeholder=" "
                style={{ color: "#0052b0" }}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                style={{ fontFamily: "Fira Code" }}
              >
                MESSAGE
              </label>
            </div>

            {/* Send Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-2 border-2 border-gray-400 hover:bg-gray-200 transition-colors cursor-pointer"
                style={{ fontFamily: "Fira Code", color: "#6b7280" }}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0052B0] text-white py-10" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left justify-items-center">
          {/* Address */}
          <div>
            <h3 className="font-bold mb-3">ADDRESS</h3>
            <div className="flex flex-col gap-2 items-start">
              <span className="bg-white text-[#0052B0] px-2 py-1 inline-block">
                Gg. Jatikarya, RT.004/RW.005,
              </span>
              <span className="bg-white text-[#0052B0] px-2 py-1 inline-block">
                Jatimurni, Kec. Pd. Melati,
              </span>
              <span className="bg-white text-[#0052B0] px-2 py-1 inline-block">
                Kota Bks, Jawa Barat 17431
              </span>
            </div>
          </div>

          {/* Phones */}
          <div>
            <h3 className="font-bold mb-3">PHONES</h3>
            <span className="bg-white text-[#0052B0] px-2 py-1 inline-block">
              +62 812 1190 3580
            </span>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <a
                href="https://wa.me/6281211903580"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 flex items-center justify-center w-10 h-10"
              >
                <FaWhatsapp className="text-[#0052B0] text-xl" />
              </a>
              <a
                href="https://instagram.com/icoe___"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 flex items-center justify-center w-10 h-10"
              >
                <FaInstagram className="text-[#0052B0] text-xl" />
              </a>
              <a
                href="https://tiktok.com/@rootslab "
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 flex items-center justify-center w-10 h-10"
              >
                <FaTiktok className="text-[#0052B0] text-xl" />
              </a>
            </div>
          </div>

          {/* Work Schedule */}
          <div>
            <h3 className="font-bold mb-3">WORK SCHEDULE</h3>
            <div className="flex flex-col gap-2 items-start">
              <span className="bg-white text-[#0052B0] px-2 py-1 inline-block">
                MONDAY - FRIDAY
              </span>
              <span className="bg-white text-[#0052B0] px-2 py-1 inline-block">
                08:00 - 17:00
              </span>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-xs text-center mt-10 tracking-wider">
          WE'D LIKE TO HEAR FROM YOU SOON
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;

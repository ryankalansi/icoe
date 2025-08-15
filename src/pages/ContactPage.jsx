import { Instagram, MessageSquare, Music } from "lucide-react";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Navbar with #FFFFFF background */}
      <Navbar backgroundColor="#FFFFFF" />

      {/* Main Content Area */}
      <main className="px-4 sm:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left"
            style={{ color: "#0052b0", fontFamily: "monospace" }}
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
                  style={{ fontFamily: "monospace" }}
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
                  style={{ fontFamily: "monospace" }}
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
                style={{ fontFamily: "monospace" }}
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
                style={{ fontFamily: "monospace" }}
              >
                MESSAGE
              </label>
            </div>

            {/* Send Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-2 border-2 border-gray-400 hover:bg-gray-200 transition-colors cursor-pointer"
                style={{ fontFamily: "monospace", color: "#6b7280" }}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer Section */}
      <footer style={{ backgroundColor: "#0052b0" }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Address */}
            <div>
              <h3
                className="font-bold text-lg mb-4"
                style={{ fontFamily: "monospace" }}
              >
                ADDRESS
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontFamily: "monospace" }}
              >
                GG. Jatikarya, RT.004/RW.005, Jatimurni, Kec. Pd. Melati, Kota
                Bks, Jawa Barat 17431
              </p>
            </div>

            {/* Phones */}
            <div>
              <h3
                className="font-bold text-lg mb-4"
                style={{ fontFamily: "monospace" }}
              >
                PHONES
              </h3>
              <p className="mb-4" style={{ fontFamily: "monospace" }}>
                +62 812 1190 3580
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="hover:opacity-75">
                  <MessageSquare size={24} />
                </a>
                <a href="#" className="hover:opacity-75">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:opacity-75">
                  <Music size={24} />
                </a>
              </div>
            </div>

            {/* Work Schedule */}
            <div>
              <h3
                className="font-bold text-lg mb-4"
                style={{ fontFamily: "monospace" }}
              >
                WORK SCHEDULE
              </h3>
              <p style={{ fontFamily: "monospace" }}>MONDAY - FRIDAY</p>
              <p style={{ fontFamily: "monospace" }}>08:00 - 17:00</p>
            </div>
          </div>
        </div>
        <div className="text-center py-6 border-t border-blue-500">
          <p className="text-sm" style={{ fontFamily: "monospace" }}>
            WE'D LIKE TO HEAR FROM YOU SOON
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;

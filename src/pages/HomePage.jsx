import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  // Ubah dari single state ke array untuk multiple FAQ
  const [openFaqs, setOpenFaqs] = useState([]);
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const folders = [
    {
      name: "1C0E_CABINET_01",
      items: "2 ITEMS",
      path: "/icoe-cabinet-01",
      hasContent: true,
    },
    {
      name: "1C0E_CABINET_02",
      items: "0 ITEMS",
      path: "/icoe-cabinet-02",
      hasContent: false,
    },
    {
      name: "1C0E_CHAIR_01",
      items: "0 ITEMS",
      path: "/icoe-chair-01",
      hasContent: false,
    },
    {
      name: "COMING_SOON",
      items: "",
      path: null,
      hasContent: false,
    },
  ];

  const faqs = [
    "WHAT PAYMENT METHOD WE ACCEPT?",
    "HOW CAN I ORDER A CUSTOM PRODUCT?",
    "CAN I VISIT YOUR WORKSHOP?",
    "DO YOU SHIP WORLDWIDE?",
    "HOW LONG DOES IT TAKE TO MAKE A CUSTOM PRODUCT?",
  ];

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => {
      if (prev.includes(index)) {
        // Jika sudah terbuka, tutup
        return prev.filter((i) => i !== index);
      } else {
        // Jika belum terbuka, buka
        return [...prev, index];
      }
    });
  };

  const handleFolderClick = (folder) => {
    if (folder.hasContent && folder.path) {
      navigate(folder.path);
    }
  };

  return (
    <div style={{ backgroundColor: "#E8E8E8", minHeight: "100vh" }}>
      {/* Navbar with #E8E8E8 background */}
      <Navbar backgroundColor="#E8E8E8" />

      <main className="px-4 sm:px-8 py-8">
        {/* Folders Section - Full viewport height */}
        <div className="flex justify-center mb-12 min-h-[80vh] items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl">
            {folders.map((folder, index) => (
              <div
                key={index}
                onClick={() => handleFolderClick(folder)}
                className="flex flex-col items-center cursor-pointer transition-all duration-200 p-4 rounded-lg hover:bg-white hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative mb-3">
                  <svg
                    width="100"
                    height="80"
                    viewBox="0 0 100 80"
                    className="drop-shadow-sm"
                  >
                    <path
                      d="M8 15 L8 70 L92 70 L92 25 L35 25 L30 15 Z"
                      fill="none"
                      stroke="#0052b0"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 15 L30 15 L35 25 L50 25"
                      fill="none"
                      stroke="#0052b0"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3
                  className="text-sm font-medium text-center mb-1"
                  style={{ color: "#0052b0" }}
                >
                  {folder.name}
                </h3>
                {folder.items && (
                  <p className="text-xs" style={{ color: "#0052b0" }}>
                    {folder.items}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section - Starts after viewport height */}
        <div className="max-w-4xl mx-auto mt-20">
          <div
            className="flex justify-between items-center mb-6"
            data-aos="fade-up"
          >
            <h2
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#0052b0" }}
            >
              FAQS
            </h2>
            <span className="text-lg font-mono" style={{ color: "#0052b0" }}>
              [05]
            </span>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-4 text-left border-b border-gray-300 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <span
                    className="text-xs sm:text-sm font-medium text-white px-3 py-1"
                    style={{ backgroundColor: "#0052b0" }}
                  >
                    {faq}
                  </span>
                  <IoAdd
                    className={`w-5 h-5 transition-transform flex-shrink-0 ml-2 ${
                      openFaqs.includes(index) ? "rotate-45" : ""
                    }`}
                    style={{ color: "#0052b0" }}
                  />
                </button>
                {openFaqs.includes(index) && (
                  <div
                    className="py-4 pl-4"
                    data-aos="fade-down"
                    data-aos-duration="300"
                  >
                    <p style={{ color: "#0052b0" }}>
                      Answer content for "{faq}" would go here...
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

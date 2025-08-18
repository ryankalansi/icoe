// src/pages/FolderContents.jsx

import Navbar from "../../components/Navbar";

// Import gambar-gambar yang akan digunakan
import braudCabinet from "/BRAUD_CABINET_1C0E_01.png";
import finsCabinet from "/FINS_CABINET_1C0E_02.png";
import comingSoon from "/coming-soon-1.png";
import comingSoon2 from "/coming-soon-2.png";

const FolderContents = () => {
  // Data untuk item-item di dalam folder, sesuai dengan Figma
  const cabinetItems = [
    {
      id: "01",
      name: "BRAUD_CABINET_1C0E_01",
      year: "2025",
      image: braudCabinet,
    },
    {
      id: "02",
      name: "FIN'S_CABINET_1C0E_02",
      year: "2025",
      image: finsCabinet,
    },
    {
      id: "",
      name: "COMING SOON",
      year: "1970",
      image: comingSoon2,
    },
    {
      id: "",
      name: "COMING SOON",
      year: "1970",
      image: comingSoon2,
    },
    {
      id: "",
      name: "COMING SOON",
      year: "1970",
      image: comingSoon,
    },
    {
      id: "",
      name: "COMING SOON",
      year: "1970",
      image: comingSoon2,
    },
  ];

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Navbar dengan latar belakang yang sama */}
      <Navbar backgroundColor="#FFFFFF" />

      <main className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Judul Halaman */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
            style={{ color: "#0052b0" }}
          >
            1C0E_
          </h1>
          <h2
            className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12"
            style={{ color: "#0052b0" }}
          >
            1C0E_CABINET_01
          </h2>

          {/* Grid untuk konten folder - 3 kolom sesuai Figma dengan ukuran tetap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
            {cabinetItems.map((item, index) => (
              <div key={index} className="flex flex-col w-full max-w-sm">
                {/* Kontainer gambar dengan ukuran tetap */}
                <div
                  className="relative border-2 flex items-center justify-center bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  style={{
                    borderColor: "#0052b0",
                    width: "100%",
                    height: "280px", // Fixed height untuk konsistensi
                    minHeight: "280px",
                    maxWidth: "373px", // Max width sesuai container
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain"
                    style={{
                      maxHeight: "240px", // Sedikit lebih kecil dari container
                      maxWidth: "320px", // Sedikit lebih kecil dari container
                      width: "auto",
                      height: "auto",
                    }}
                  />
                  {/* Tampilkan nomor ID jika ada */}
                  {item.id && (
                    <span
                      className="absolute bottom-3 right-3 text-base md:text-lg font-mono font-medium"
                      style={{ color: "#0052b0" }}
                    >
                      {item.id}
                    </span>
                  )}
                </div>

                {/* Teks di bawah gambar */}
                <div className="mt-3">
                  <h3
                    className="text-sm md:text-base font-medium tracking-wide uppercase"
                    style={{ color: "#0052b0" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-xs md:text-sm mt-1"
                    style={{ color: "#0052b0" }}
                  >
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FolderContents;

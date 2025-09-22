// src/pages/icoe-cabinet-01/BraudCabinet.jsx

import Navbar from "../../components/Navbar";

// Import gambar-gambar yang akan digunakan
import braudMain1 from "/braud-main-1.png";
import braudMain2 from "/braud-main-2.png";
import braudDetail1 from "/braud-details-1.png";
import braudDetail2 from "/braud-details-2.png";
import braudDetail3 from "/braud-details-3.png";
import braudDetail4 from "/braud-details-4.png";
import braudDetail5 from "/braud-details-5.png";
import braudDetail6 from "/braud-details-6.png";
import braudDetail7 from "/braud-details-7.png";

const BraudCabinet = () => {
  // Data untuk baris pertama spesifikasi (3 item)
  const specificationsRow1 = [
    {
      title: "BRAUD'S LABEL",
      size: "SIZE",
      material: "MATERIAL",
      image: braudDetail1,
    },
    {
      title: "ROOTSLAB AND BRAUD WATERMARK",
      size: "SIZE",
      material: "MATERIAL",
      image: braudDetail2,
    },
    {
      title: "LUBANG",
      size: "SIZE",
      material: "MATERIAL",
      image: braudDetail3,
    },
  ];

  // Data untuk baris kedua spesifikasi (4 item)
  const specificationsRow2 = [
    {
      title: "TUTUP BUKAAN",
      size: "SIZE",
      material: "MATERIAL",
      image: braudDetail4,
    },
    {
      title: "TEMPAT PEMBUANGAN AMPAS",
      size: "SIZE",
      material: "MATERIAL",
      image: braudDetail5,
    },
    {
      title: "SKRUP BAUT",
      size: "SIZE",
      material: "MATERIAL",
      image: braudDetail6,
    },
    {
      title: "RODA",
      size: "SIZE",
      material: "MATERIAL",
      image: braudDetail7,
    },
  ];

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Navbar backgroundColor="#FFFFFF" />

      <main className="px-4 sm:px-8 py-6 text-[#0052b0]">
        <hr className="mb-4 border-[#0052b0]" />

        {/* Product Title Section */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
          <h2 className="text-2xl md:text-4xl font-bold">
            BRAUD_CABINET_1C0E_01
          </h2>
          <span className="text-2xl md:text-4xl">PRODUCT</span>
        </div>
        <hr className="mt-4 mb-6 border-[#0052b0]" />

        {/* Product Number */}
        <div className="mb-8">
          <p className="text-xl md:text-4xl ">01</p>
        </div>

        {/* Main Product Images */}
        <div className="flex flex-col items-center gap-12 mb-12">
          <div className="w-full max-w-md lg:max-w-2xl">
            <img
              src={braudMain1}
              alt="BRAUD Cabinet Main View 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-md lg:max-w-2xl">
            <img
              src={braudMain2}
              alt="BRAUD Cabinet Main View 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Product Description */}
        <div>
          <div className="flex justify-end mb-4">
            <div className="text-right text-base md:text-xl font-bold">
              <p>1C0E, 2025</p>
            </div>
          </div>
          <hr className="mt-4 mb-6 border-[#0052b0]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-8">
            <div>
              <p className="text-base lg:text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, nullam
                interdum quis massa a finibus. Praesent dignissim eros quis
                egestas lacinia. Phasellus nec molestua orci. Maecenas tellus
                arcu, fermentum ut elit eu, lobortis pharetra nibh. Donec augue
                massa, dignissim non mauris eu, congue eleifend augue. Nunc sed
                nisl lacus.
              </p>
            </div>
            <div>
              <div className="space-y-6 text-base lg:text-xl">
                <div className="flex justify-between border-b border-[#0052b0] pb-2">
                  <span className="font-medium">MODEL: CABINET</span>
                </div>
                <div className="flex justify-between border-b border-[#0052b0] pb-2">
                  <span className="font-medium">YEAR: 2025</span>
                </div>
                <div className="flex justify-between border-b border-[#0052b0] pb-2">
                  <span className="font-medium">TYPE: CUSTOM COFFEE TABLE</span>
                </div>
                <div className="flex justify-between border-b border-[#0052b0] pb-2">
                  <span className="font-medium">MATERIAL: ALUMINIUM</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-medium">SIZE: 88 X 88 X 88</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-4 mb-6 border-[#0052b0]" />
        </div>

        {/* Specifications Section (RESPONSIVE DENGAN 2 BARIS) */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <h3 className="text-2xl md:text-4xl font-bold">
              BRAUD_CABINET_1C0E_01
            </h3>
            <span className="text-2xl md:text-4xl">SPECS</span>
          </div>
          <hr className="mt-6 mb-8 border-[#0052b0]" />

          {/* === BARIS PERTAMA: 3 KOLOM DI DESKTOP === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-16">
            {specificationsRow1.map((spec, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <h4 className="text-xl font-normal">• {spec.title}</h4>
                <div className="text-sm">
                  <div className="flex justify-between border-b border-[#0052b0] py-2">
                    <span className="font-medium">SIZE</span>
                    <span className="font-medium">{spec.size}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#0052b0] py-2">
                    <span className="font-medium">MATERIAL</span>
                    <span className="font-medium">{spec.material}</span>
                  </div>
                </div>
                <div className="w-full aspect-square">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* === BARIS KEDUA: 4 KOLOM DI DESKTOP === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {specificationsRow2.map((spec, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <h4 className="text-xl font-normal">• {spec.title}</h4>
                <div className="text-sm">
                  <div className="flex justify-between border-b border-[#0052b0] py-2">
                    <span className="font-medium">SIZE</span>
                    <span className="font-medium">{spec.size}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#0052b0] py-2">
                    <span className="font-medium">MATERIAL</span>
                    <span className="font-medium">{spec.material}</span>
                  </div>
                </div>
                <div className="w-full aspect-square">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BraudCabinet;

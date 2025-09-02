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
  const detailImages = [
    { src: braudDetail1, label: "" },
    { src: braudDetail2, label: "" },
    { src: braudDetail3, label: "" },
    { src: braudDetail4, label: "" },
    { src: braudDetail5, label: "" },
    { src: braudDetail6, label: "" },
    { src: braudDetail7, label: "" },
  ];

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar backgroundColor="#FFFFFF" />

      <main className="px-4 sm:px-8 py-6">
        {/* Divider Line */}
        <hr className="mb-4" style={{ color: "#0052b0" }} />

        {/* Product Title Section */}
        <div className="flex justify-between items-center">
          <h2
            className="text-4xl md:text-2xl font-bold"
            style={{ color: "#0052b0" }}
          >
            BRAUD_CABINET_1C0E_01
          </h2>
          <span
            className="text-4xl md:text-2xl font-medium"
            style={{ color: "#0052b0" }}
          >
            PRODUCT
          </span>
        </div>
        <hr className="mt-4 mb-6" style={{ color: "#0052b0" }} />

        {/* Product Number */}
        <div className="mb-8">
          <p
            className="text-4xl md:text-2xl font-medium"
            style={{ color: "#0052b0" }}
          >
            01
          </p>
        </div>

        {/* Main Product Images */}
        <div className="flex flex-col items-center gap-12 mb-12">
          <div className="w-full max-w-md">
            <img
              src={braudMain1}
              alt="BRAUD Cabinet Main View 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-md">
            <img
              src={braudMain2}
              alt="BRAUD Cabinet Main View 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right aligned info and Product Description */}
        <div className="">
          <div className="flex justify-end mb-4">
            <div
              className="text-right text-xl font-bold"
              style={{ color: "#0052b0" }}
            >
              <p>1C0E, 2025</p>
            </div>
          </div>
          <hr className="mt-4 mb-6" style={{ color: "#0052b0" }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-8">
            <div>
              <p
                className="sm:text-xs lg:text-xl leading-relaxed mb-6"
                style={{ color: "#0052b0" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, nullam
                interdum quis massa a finibus. Praesent dignissim eros quis
                egestas lacinia. Phasellus nec molestua orci. Maecenas tellus
                arcu, fermentum ut elit eu, lobortis pharetra nibh. Donec augue
                massa, dignissim non mauris eu, congue eleifend augue. Nunc sed
                nisl lacus.
              </p>
            </div>
            <div>
              <div
                className="space-y-8 sm:text-xs xl:text-xl"
                style={{ color: "#0052b0" }}
              >
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium ">MODEL: CABINET</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">YEAR: 2025</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">TYPE: CUSTOM COFFEE TABLE</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">MATERIAL: ALUMINIUM</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-medium">SIZE: 88 X 88 X 88</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-4 mb-6" style={{ color: "#0052b0" }} />
        </div>

        {/* Specifications Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: "#0052b0" }}
            >
              BRAUD_CABINET_1C0E_01
            </h3>
            <span className="text-xl md:text-2xl " style={{ color: "#0052b0" }}>
              SPECS
            </span>
          </div>
          <hr className="mt-6" style={{ color: "#0052b0" }} />

          {/* Spec Categories */}
          <div
            className="grid grid-cols-3 gap-8 text-xl mt-4 mb-6"
            style={{ color: "#0052b0" }}
          >
            <div className="font-normal">• BRAUD'S LABEL</div>
            <div className="font-normal">• ROOTSLAB AND BRAUD WATERMARK</div>
            <div className="font-normal">• LUBANG</div>
          </div>

          {/* Spec Table  */}
          <div className="mb-8">
            <div
              className="grid grid-cols-3 gap-8 text-xs"
              style={{ color: "#0052b0" }}
            >
              {/* Column 1 */}
              <div>
                <div className="grid grid-cols-2 gap-0">
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2  text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b  p-2  text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                  <div
                    className="border-b  p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <div className="grid grid-cols-2 gap-0">
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <div className="grid grid-cols-2 gap-0">
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detail Images - Row 1 dengan 3 images */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {detailImages.slice(0, 3).map((image, index) => (
                <div key={index} className="text-center">
                  <div className="w-full h-64 mb-4">
                    <img
                      src={image.src}
                      alt={image.label || `Detail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {image.label && (
                    <div
                      className="text-xs font-medium border-b border-blue-600 pb-2"
                      style={{ color: "#0052b0" }}
                    >
                      • {image.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Specs Grid - sesuai design */}
          {/* Spec Categories */}
          <div
            className="grid grid-cols-4 gap-8 text-xl mt-4 mb-6"
            style={{ color: "#0052b0" }}
          >
            <div className="font-normal">• TUTUP BUKAAN</div>
            <div className="font-normal">• TEMPAT PEMBUANGAN AMPAS</div>
            <div className="font-normal">• SKRUP BAUT</div>
            <div className="font-normal">• RODA</div>
          </div>

          {/* Spec Table  */}
          <div className="mb-8">
            <div
              className="grid grid-cols-4 gap-8 text-xs"
              style={{ color: "#0052b0" }}
            >
              {/* Column 1 */}
              <div>
                <div className="grid grid-cols-2 gap-0">
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2  text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b  p-2  text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                  <div
                    className="border-b  p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <div className="grid grid-cols-2 gap-0">
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <div className="grid grid-cols-2 gap-0">
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div>
                <div className="grid grid-cols-2 gap-0">
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    SIZE
                  </div>
                  <div
                    className="border-b p-2 text-left font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                  <div
                    className="border-b p-2 text-right font-medium"
                    style={{ color: "#0052b0" }}
                  >
                    MATERIAL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detail Images - Row 2 dengan 4 images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {detailImages.slice(3, 7).map((image, index) => (
              <div key={index + 3} className="text-center">
                <div className="w-full h-48">
                  <img
                    src={image.src}
                    alt={image.label || `Detail ${index + 4}`}
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

import React, { useState, useEffect } from "react";

const desktopLogoPositions = [
  { top: "10%", left: "5%" },
  { top: "15%", right: "10%" },
  { top: "60%", left: "8%" },
  { top: "70%", right: "15%" },
  { top: "25%", left: "15%" },
  { top: "45%", right: "5%" },
];
const mobileLogoPositions = [
  { top: "15%", left: "8%" },
  { top: "20%", right: "12%" },
  { top: "65%", left: "10%" },
  { top: "75%", right: "18%" },
  { top: "30%", left: "20%" },
  { top: "50%", right: "8%" },
];

const Footer = () => {
  const [logoPositions, setLogoPositions] = useState(desktopLogoPositions);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logoTexts, setLogoTexts] = useState(Array(6).fill(""));

  const text = "PRESS ANY KEY TO CONTINUE_";
  const logoText = "1C0E_";

  // Effect to switch logo positions based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogoPositions(mobileLogoPositions);
      } else {
        setLogoPositions(desktopLogoPositions);
      }
    };
    handleResize(); // Set initial positions
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Main typewriter effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, text]);

  // Scattered logo typewriter effect
  useEffect(() => {
    const allTimers = [];
    const startAnimationCycle = (index) => {
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= logoText.length) {
          setLogoTexts((prev) => {
            const newTexts = [...prev];
            newTexts[index] = logoText.substring(0, charIndex);
            return newTexts;
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          const eraseTimer = setTimeout(() => {
            setLogoTexts((prev) => {
              const newTexts = [...prev];
              newTexts[index] = "";
              return newTexts;
            });
            const restartTimer = setTimeout(() => {
              startAnimationCycle(index);
            }, 1000 + Math.random() * 2000);
            allTimers.push(restartTimer);
          }, 3000);
          allTimers.push(eraseTimer);
        }
      }, 120);
      allTimers.push(typeInterval);
    };

    logoPositions.forEach((_, index) => {
      const startDelay = setTimeout(() => {
        startAnimationCycle(index);
      }, index * 800);
      allTimers.push(startDelay);
    });

    return () => {
      allTimers.forEach((id) => clearInterval(id));
    };
  }, [logoText, logoPositions]); // Re-run if positions change

  return (
    <footer
      className="relative h-48 flex items-center justify-center overflow-hidden px-4"
      style={{ backgroundColor: "#0052b0" }}
    >
      {logoPositions.map((position, index) => (
        <div
          key={index}
          className="absolute text-base sm:text-lg font-mono opacity-30"
          style={{
            color: "#E8E8E8",
            ...position,
            animation: `float ${3 + index * 0.5}s ease-in-out infinite ${
              index * 0.3
            }s`,
          }}
        >
          {logoTexts[index]}
          {logoTexts[index].length > 0 &&
            logoTexts[index].length < logoText.length && (
              <span
                className="inline-block w-2 h-4 ml-1"
                style={{
                  backgroundColor: "#E8E8E8",
                  animation: "blink 1s infinite",
                }}
              />
            )}
        </div>
      ))}
      <div className="relative z-10 text-center">
        <h2
          className="text-lg sm:text-xl font-mono tracking-wider"
          style={{ color: "#E8E8E8" }}
        >
          {displayedText}
        </h2>
      </div>
      <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); opacity: 0.2; }
                    50% { transform: translateY(-10px); opacity: 0.4; }
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `}</style>
    </footer>
  );
};

export default Footer;

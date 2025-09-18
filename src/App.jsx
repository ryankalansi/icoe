import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FolderContents from "./pages/icoe-cabinet-01/FolderContents";
import BraudCabinet from "./pages/icoe-cabinet-01/BraudCabinet";
import FinsCabinet from "./pages/icoe-cabinet-01/FinsCabinet";
import useScrollSound from "./hooks/useScrollSound";
import useHoverSound from "./hooks/useHoverSound";
import BlackBoard from "./pages/icoe-cabinet-01/blackboard";

function App() {
  // Initialize scroll sound for the entire app
  useScrollSound("/sounds/rachet-scrolldown.mp3", {
    volume: 0.25, // Adjust volume (0.0 to 1.0)
    throttleDelay: 120, // Minimum time between sounds in ms
    scrollThreshold: 40, // Minimum scroll distance to trigger sound
    playbackRate: 1.1, // Speed of sound playback
  });

  // Initialize hover sound for the entire app
  useHoverSound("/sounds/hover-sound.mp3", {
    volume: 0.15, // Lower volume for hover sounds
    throttleDelay: 120, // Prevent sound spam
    playbackRate: 1.2,
    // Custom selectors based on your components
    selectors: [
      // Navigation elements
      "nav a", // Navbar links
      "nav button", // Mobile menu button

      // HomePage elements
      ".cursor-pointer", // Folder items in HomePage
      "button", // FAQ toggle buttons

      // ContactPage elements
      "input", // Form inputs
      "textarea", // Form textarea
      'button[type="submit"]', // Send button
      "footer a", // Social media links

      // FolderContents elements
      "[onClick]", // Items with onClick handlers

      // BraudCabinet elements - images and interactive elements
      'img[src*="braud"]', // Product images

      // General interactive elements
      ".hover-sound", // Custom class you can add
      ".interactive", // Custom class
      "a", // All links
      ".folder-item", // Custom folder item class
      ".cabinet-item", // Custom cabinet item class
      ".social-link", // Social media links
      '[role="button"]', // Elements with button role
    ],
  });

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/icoe-cabinet-01" element={<FolderContents />} />
          <Route path="/braud-cabinet-1c0e-01" element={<BraudCabinet />} />
          <Route path="/fins-cabinet-1c0e-02" element={<FinsCabinet />} />
          <Route path="/blackboard" element={<BlackBoard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

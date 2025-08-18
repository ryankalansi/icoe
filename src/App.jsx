import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FolderContents from "./pages/icoe-cabinet-01/FolderContents";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/icoe-cabinet-01" element={<FolderContents />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

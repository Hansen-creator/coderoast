import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Halaman (Pastikan path ini sesuai dengan struktur folder kamu)
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Recommendation from "./pages/Recommendation";

export default function App() {
  
  useEffect(() => {
    // 1. Set Judul Tab Secara Global
    document.title = "CodeRoast";

    // 2. Fungsi untuk Menghapus Icon Lama (Favicon Standard)
    const removeExistingFavicon = () => {
      const existingIcons = document.querySelectorAll("link[rel~='icon']");
      existingIcons.forEach(icon => icon.parentNode?.removeChild(icon));
    };

    // 3. Fungsi untuk Set SVG Favicon Dinamis
    const setSVGFavicon = () => {
      removeExistingFavicon(); // Bersihkan dulu

      // Membuat Link baru untuk SVG
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/svg+xml'; // Format SVG
      
      // Data URI: SVG Inline Modern
      // Warna Kuning #FBBF24 (Senada dengan badge kamu)
      // Ikon: Bentuk Biji Kopi + Inisial C-R
      const svgLogo = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#1e293b"/>
          
          <path d="M75.2 26.3C66.5 17.6 52.4 17.6 43.7 26.3C35 35 35 49.1 43.7 57.8C52.4 66.5 66.5 66.5 75.2 57.8C83.9 49.1 83.9 35 75.2 26.3ZM59.5 50.1C55.7 50.1 52.6 47 52.6 43.2C52.6 39.4 55.7 36.3 59.5 36.3C63.3 36.3 66.4 39.4 66.4 43.2C66.4 47 63.3 50.1 59.5 50.1Z" fill="#FBBF24"/>
          
          <text x="25" y="70" font-family="Arial, sans-serif" font-weight="black" font-size="40" fill="white">C</text>
          <text x="60" y="78" font-family="Arial, sans-serif" font-weight="black" font-size="30" fill="white">R</text>
        </svg>
      `;

      // Konversi SVG ke Data URI
      link.href = `data:image/svg+xml,${encodeURIComponent(svgLogo)}`;
      document.getElementsByTagName('head')[0].appendChild(link);
    };

    // Jalankan Fungsi Set Favicon
    setSVGFavicon();

  }, []); // [] memastikan logika ini hanya jalan sekali saat aplikasi dimuat

  return (
    <Router>
      <div 
        style={{ 
          background: "radial-gradient(circle at center, #1e293b 0%, #000 100%)",
          color: "white", 
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundAttachment: "fixed" 
        }}
      >
        <Navbar />

        <main className="flex-grow-1 pt-5 mt-4"> 
          <div className="container pb-5"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/recommendation" element={<Recommendation />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Ref untuk mengakses elemen collapse Bootstrap
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk menutup menu collapse secara manual (untuk mobile)
  const closeMenu = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
      // Menggunakan data-bs-toggle/collapse target untuk memicu penutupan via Bootstrap
      const bCollapse = window.bootstrap?.Collapse.getInstance(navbarCollapseRef.current);
      if (bCollapse) {
        bCollapse.hide();
      } else {
        // Fallback jika instance belum tercipta
        navbarCollapseRef.current.classList.remove("show");
      }
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Reviews", path: "/testimonials" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-500 ${
        isScrolled 
          ? "navbar-dark bg-black bg-opacity-90 shadow-lg py-2" 
          : "navbar-dark bg-transparent py-4"
      }`}
      style={{ 
        backdropFilter: isScrolled ? "blur(15px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none"
      }}
    >
      <div className="container">
        
        {/* BRAND / LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <span className="fs-3 fw-black text-uppercase tracking-tighter">
            Coderoast
            <span className="text-warning">.</span>
          </span>
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION MENU */}
        <div 
          className="collapse navbar-collapse" 
          id="navMenu" 
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item mx-lg-2" key={link.path}>
                <Link
                  className={`nav-link text-uppercase fs-7 fw-medium letter-spacing-1 position-relative nav-hover-effect ${
                    location.pathname === link.path 
                      ? "text-warning active" 
                      : "text-white opacity-75"
                  }`}
                  to={link.path}
                  onClick={closeMenu} // Tutup menu saat link diklik
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ACTIONS / CART */}
          <div className="d-flex align-items-center justify-content-lg-end">
            <Link 
              to="/cart" 
              className="btn btn-outline-warning rounded-0 px-4 py-2 fw-bold d-flex align-items-center gap-2 transition-all hover-fill w-100 w-lg-auto text-center justify-content-center"
              onClick={closeMenu} // Tutup menu saat cart diklik
            >
              <span className="text-uppercase small letter-spacing-2">Cart</span>
              
              {totalItems > 0 && (
                <span className="badge rounded-circle bg-warning text-dark ms-1">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-all { transition: all 0.4s ease-in-out; }
        .letter-spacing-1 { letter-spacing: 1px; }
        .letter-spacing-2 { letter-spacing: 2px; }
        .fs-7 { font-size: 0.85rem; }
        .fw-black { font-weight: 900; }
        
        .nav-hover-effect::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #ffc107;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-hover-effect:hover::after,
        .nav-hover-effect.active::after {
          width: 70%;
        }

        .nav-hover-effect:hover {
          color: #ffc107 !important;
          opacity: 1 !important;
        }

        .hover-fill:hover {
          background-color: #ffc107;
          color: #000 !important;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(0, 0, 0, 0.98);
            padding: 2rem;
            margin-top: 1rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .nav-item {
            margin-bottom: 1rem;
            text-align: center;
          }

          .nav-hover-effect::after {
            display: none; /* Sembunyikan underline di mobile agar lebih clean */
          }
        }
      `}</style>
    </nav>
  );
}
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <section 
        className="hero-section d-flex align-items-center justify-content-center position-relative overflow-hidden"
      >
        {/* Dekorasi Cahaya Dinamis */}
        <div className="light-blob-1"></div>
        <div className="light-blob-2"></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              
              <div className="badge-container mb-4">
                <span className="badge rounded-pill border border-warning text-warning px-4 py-2 fw-bold text-uppercase tracking-widest animate-fade-in">
                  Crafting Code & Caffeine
                </span>
              </div>

              <h1 className="hero-title fw-black text-white mb-4">
                Coffee Meets <br className="d-md-none" />
                <span className="text-warning italic-text accent-line">Code</span>
              </h1>

              <p className="hero-description text-secondary mb-5 mx-auto opacity-75">
                "Ngoding tanpa kopi itu bug." Tingkatkan produktivitasmu dengan biji kopi pilihan yang diproses secara presisi untuk para pengembang masa kini.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                <Link to="/products" className="btn btn-warning btn-lg px-5 py-3 fw-bold rounded-0 shadow-lg transition-transform hover-scale">
                  EXPLORE MENU
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg px-5 py-3 rounded-0 transition-all hover-bg-white text-uppercase fw-bold small">
                  Our Story
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h2 className="stat-number">100%</h2>
              <p className="stat-label">Arabica Beans</p>
            </div>
            <div className="stat-card border-start-custom">
              <h2 className="stat-number">FRESH</h2>
              <p className="stat-label">Daily Roasted</p>
            </div>
            <div className="stat-card border-start-custom">
              <h2 className="stat-number">FAST</h2>
              <p className="stat-label">Direct to Desk</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Setup */
        .hero-section {
          min-height: 90vh;
          padding-top: 100px; /* Jarak aman dari Navbar */
          padding-bottom: 50px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 6rem); /* Responsive font size */
          line-height: 0.9;
          letter-spacing: -2px;
        }

        .hero-description {
          max-width: 700px;
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.6;
        }

        /* Blobs */
        .light-blob-1 {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: rgba(255, 193, 7, 0.15);
          filter: blur(120px);
          border-radius: 50%;
          z-index: 1;
        }

        .light-blob-2 {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: rgba(255, 100, 0, 0.1);
          filter: blur(150px);
          border-radius: 50%;
          z-index: 1;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
          .border-start-custom { border-left: 1px solid rgba(255, 255, 255, 0.1); }
        }

        .stat-number {
          font-weight: 900;
          color: #ffc107;
          margin-bottom: 0.2rem;
        }

        .stat-label {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.75rem;
          color: #888;
        }

        /* Accents & Animations */
        .italic-text { font-style: italic; font-family: serif; }
        
        .hover-scale:hover {
          transform: translateY(-5px);
        }

        .hover-bg-white:hover {
          background-color: white;
          color: black !important;
        }

        .tracking-widest { letter-spacing: 4px; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}
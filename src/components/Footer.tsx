import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container bg-black text-light pt-5 pb-4 mt-auto border-top border-secondary border-opacity-10">
      <div className="container">
        <div className="row gy-5 justify-content-between">
          
          {/* BRAND AREA */}
          <div className="col-lg-4 col-md-12 text-center text-lg-start">
            <h4 className="fw-black text-uppercase tracking-widest mb-3">
              Coderoast<span className="text-warning">.</span>
            </h4>
            <p className="text-secondary small lh-lg mb-4 opacity-75">
              Menyediakan kurasi biji kopi pilihan untuk mendukung fokus dan produktivitas para pengembang perangkat lunak. Karena setiap baris kode yang hebat dimulai dari satu cangkir kopi yang sempurna.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#" className="social-link-minimal"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link-minimal"><i className="fab fa-github"></i></a>
              <a href="#" className="social-link-minimal"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link-minimal"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="footer-title text-uppercase fw-bold mb-4">Explore</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="footer-link">Home</Link></li>
              <li className="mb-2"><Link to="/products" className="footer-link">Product Menu</Link></li>
              <li className="mb-2"><Link to="/testimonials" className="footer-link">Reviews</Link></li>
            </ul>
          </div>

          {/* SUPPORT LINKS */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="footer-title text-uppercase fw-bold mb-4">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="footer-link">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link">Contact</Link></li>
              <li className="mb-2"><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-lg-3 col-md-4 col-12 text-center text-md-start">
            <h6 className="footer-title text-uppercase fw-bold mb-4">Newsletter</h6>
            <div className="newsletter-wrapper position-relative mb-3">
              <input 
                type="email" 
                className="form-control-minimal" 
                placeholder="Enter your email" 
              />
              <button className="btn-newsletter-submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-secondary extra-small opacity-50">Dapatkan update berkala mengenai rilisan biji kopi terbaru kami.</p>
          </div>

        </div>

        <div className="footer-divider my-5"></div>

        {/* COPYRIGHT AREA */}
        <div className="row align-items-center gy-3">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary small mb-0 opacity-50 text-uppercase tracking-wider">
              © 2026 Coderoast. Developed by <span className="text-white">Hansen Pratama</span>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex gap-4 justify-content-center justify-content-md-end opacity-50">
              <span className="small footer-status"><i className="fas fa-circle text-success me-2"></i>System Operational</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fw-black { font-weight: 900; }
        .tracking-widest { letter-spacing: 0.3em; }
        .tracking-wider { letter-spacing: 0.1em; }
        .extra-small { font-size: 0.7rem; }

        .footer-title {
          font-size: 0.85rem;
          letter-spacing: 2px;
          color: #ffc107;
        }

        .footer-link {
          color: #888;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #fff;
          padding-left: 5px;
        }

        .social-link-minimal {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          color: #666;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .social-link-minimal:hover {
          background: #ffc107;
          color: #000;
          transform: translateY(-3px);
        }

        .form-control-minimal {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0;
          color: #fff;
          padding: 10px 40px 10px 0;
          width: 100%;
          outline: none;
          font-size: 0.9rem;
        }

        .form-control-minimal:focus {
          border-bottom-color: #ffc107;
        }

        .btn-newsletter-submit {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #ffc107;
          transition: all 0.3s ease;
        }

        .btn-newsletter-submit:hover {
          color: #fff;
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05), transparent);
        }

        .footer-status {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 991px) {
          .footer-container { text-align: center; }
        }
      `}</style>
    </footer>
  );
}
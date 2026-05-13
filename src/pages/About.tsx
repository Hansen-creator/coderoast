import React from "react";

export default function About() {
  const milestones = [
    {
      year: "2021",
      title: "Initial Development",
      desc: "Berawal dari riset mendalam mengenai kebutuhan kafein bagi pengembang perangkat lunak. Eksperimen roasting pertama dilakukan untuk menciptakan profil rasa yang meningkatkan fokus.",
      tag: "Research"
    },
    {
      year: "2023",
      title: "Precision Optimization",
      desc: "Mengintegrasikan sistem otomasi pada proses pemanggangan untuk memastikan konsistensi profil rasa berdasarkan variabel kelembapan dan kepadatan biji kopi.",
      tag: "Technology"
    },
    {
      year: "2025",
      title: "CodeRoast Ecosystem",
      desc: "Peluncuran resmi sebagai platform penyedia kopi yang didedikasikan sepenuhnya untuk mendukung produktivitas komunitas teknologi di Indonesia.",
      tag: "Deployment"
    }
  ];

  return (
    <div className="about-container py-5 overflow-hidden">
      {/* HERO SECTION */}
      <section className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h6 className="text-warning text-uppercase fw-black tracking-widest mb-3 animate-fade-in">
              About Our Roastery
            </h6>
            <h2 className="display-3 fw-black text-white mb-4 animate-up">
              Behind the Brew
            </h2>
            <div className="divider-gold mx-auto mb-5"></div>
            <p className="lead text-secondary opacity-75 animate-up-delay">
              Kami percaya bahwa setiap baris kode yang hebat lahir dari konsentrasi yang tak terganggu. 
              CodeRoast hadir untuk menjembatani antara presisi logika dan seni menyeduh kopi berkualitas tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="container py-5">
        <div className="row g-0 border-custom-container animate-up-delay-2">
          <div className="col-md-4 border-end-custom p-5 text-center transition-hover">
            <h5 className="text-warning text-uppercase fw-bold mb-3 tracking-wider">Precision</h5>
            <p className="text-secondary small mb-0">Setiap biji kopi melalui proses seleksi ketat untuk meminimalisir anomali rasa dan memastikan kualitas tertinggi.</p>
          </div>
          <div className="col-md-4 border-end-custom p-5 text-center transition-hover">
            <h5 className="text-warning text-uppercase fw-bold mb-3 tracking-wider">Stability</h5>
            <p className="text-secondary small mb-0">Rantai pasokan yang terintegrasi menjamin ketersediaan kafein tanpa adanya gangguan waktu tunggu yang lama.</p>
          </div>
          <div className="col-md-4 p-5 text-center transition-hover">
            <h5 className="text-warning text-uppercase fw-bold mb-3 tracking-wider">Iteration</h5>
            <p className="text-secondary small mb-0">Kami terus melakukan penyempurnaan profil sangrai berdasarkan masukan teknis dari komunitas kami.</p>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="container py-5">
        <h3 className="text-center text-white fw-black text-uppercase tracking-widest mb-5">Our Journey</h3>
        <div className="timeline-wrapper position-relative py-4">
          <div className="timeline-line d-none d-md-block"></div>

          {milestones.map((item, index) => (
            <div key={index} className={`row mb-5 g-0 timeline-row ${index % 2 === 0 ? "" : "flex-md-row-reverse"}`}>
              <div className="col-md-6 p-3">
                <div className="milestone-card p-4 animate-scroll">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="milestone-year fw-black">{item.year}</span>
                    <span className="milestone-tag">{item.tag}</span>
                  </div>
                  <h4 className="text-white text-uppercase fw-bold mb-3">{item.title}</h4>
                  <p className="text-secondary small mb-0 lh-lg">{item.desc}</p>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="container mt-5">
        <div className="quote-box text-center p-5 position-relative">
          <div className="quote-accent top-0 start-50 translate-middle"></div>
          <p className="h4 text-white fw-light fst-italic mb-4 opacity-90">
            "Code is temporary, Coffee is eternal."
          </p>
          <div className="d-flex justify-content-center gap-2">
            {['Architecture', 'Stability', 'Performance'].map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .fw-black { font-weight: 900; }
        .tracking-widest { letter-spacing: 0.4em; }
        .tracking-wider { letter-spacing: 0.15em; }

        .divider-gold {
          width: 50px;
          height: 2px;
          background-color: #ffc107;
        }

        .border-custom-container {
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
        }

        .border-end-custom {
          border-right: 1px solid rgba(255, 255, 255, 0.05);
        }

        .transition-hover {
          transition: background 0.3s ease;
        }

        .transition-hover:hover {
          background: rgba(255, 193, 7, 0.03);
        }

        /* Timeline */
        .timeline-line {
          position: absolute;
          left: 50%;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(255, 193, 7, 0.5), transparent);
          transform: translateX(-50%);
        }

        .milestone-card {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: border-color 0.3s ease;
        }

        .milestone-card:hover {
          border-color: #ffc107;
        }

        .milestone-year {
          font-size: 1.5rem;
          color: #ffc107;
        }

        .milestone-tag {
          font-size: 0.65rem;
          color: #888;
          text-transform: uppercase;
          border: 1px solid #444;
          padding: 2px 10px;
          letter-spacing: 1px;
        }

        /* Quote Box */
        .quote-box {
          background: radial-gradient(circle at center, rgba(255, 193, 7, 0.05) 0%, transparent 70%);
          border-top: 1px solid rgba(255, 193, 7, 0.2);
        }

        .quote-accent {
          width: 30px;
          height: 2px;
          background: #ffc107;
        }

        .tech-badge {
          font-size: 0.7rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-up-delay { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-up-delay-2 { animation: fadeInUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }

        @media (max-width: 767px) {
          .border-end-custom { border-right: none; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
          .display-3 { font-size: 2.5rem; }
          .milestone-card { text-align: center; }
        }
      `}</style>
    </div>
  );
}
interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 1,
      name: "Hansen Pratama",
      role: "Fullstack Developer",
      comment: "Kualitas biji kopinya sangat membantu konsentrasi saat proses debugging panjang. Intensitas rasa yang konsisten menjadikannya pilihan utama bagi pengembang profesional.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=hansen"
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Backend Engineer",
      comment: "Profil roasting yang sangat presisi. Memberikan dorongan energi yang stabil tanpa mengganggu fokus kerja. Salah satu kurasi terbaik yang pernah saya coba.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=budi"
    },
    {
      id: 3,
      name: "Siska Amelia",
      role: "UI/UX Designer",
      comment: "Matcha Latte memiliki tekstur yang sangat halus. Desain kemasannya sangat minimalis dan elegan, selaras dengan estetika ruang kerja modern.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?u=siska"
    },
    {
      id: 4,
      name: "Andi Wijaya",
      role: "Data Scientist",
      comment: "Biji kopi single origin yang disediakan memiliki karakteristik rasa yang jelas dan bersih. Sangat merekomendasikan varian Gayo untuk pecinta manual brew.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=andi"
    },
    {
      id: 5,
      name: "Rina Putri",
      role: "Tech Content Creator",
      comment: "Layanan pengiriman sangat efisien dan produk tiba dalam keadaan segar. Aroma kopi tetap terjaga dengan baik berkat kemasan kedap udara yang berkualitas.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=rina"
    },
    {
      id: 6,
      name: "Kevin Ardiansyah",
      role: "Mobile Developer",
      comment: "House blend yang sangat seimbang. Memberikan kenyamanan di setiap tegukan saat menghadapi jadwal rilis aplikasi yang padat.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?u=kevin"
    }
  ];

  return (
    <div className="testimonials-container py-5">
      {/* HEADER SECTION */}
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h6 className="text-warning text-uppercase fw-black tracking-widest mb-3 animate-up">
              User Experiences
            </h6>
            <h2 className="display-4 fw-black text-white mb-4 animate-up-delay">
              Community Voices
            </h2>
            <div className="divider-line mx-auto mb-4"></div>
            <p className="text-secondary opacity-75 animate-up-delay-2">
              Bergabunglah dengan ribuan profesional teknologi yang telah mengintegrasikan kurasi kopi kami ke dalam alur kerja harian mereka.
            </p>
          </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="row g-4 overflow-hidden">
          {reviews.map((rev, index) => (
            <div 
              className="col-md-6 col-lg-4 d-flex animate-card" 
              key={rev.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-card w-100 p-4 d-flex flex-column">
                {/* RATING */}
                <div className="d-flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`rating-dot ${i < rev.rating ? "bg-warning" : "bg-dark"}`}
                    ></div>
                  ))}
                </div>

                {/* CONTENT */}
                <p className="testimonial-text flex-grow-1 text-light opacity-90 mb-4 fs-6">
                  "{rev.comment}"
                </p>

                {/* USER PROFILE */}
                <div className="d-flex align-items-center pt-4 border-top border-secondary border-opacity-10">
                  <div className="avatar-wrapper">
                    <img 
                      src={rev.avatar} 
                      alt={rev.name} 
                      className="rounded-0 grayscale-img"
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0 fw-bold text-white text-uppercase small tracking-wider">
                      {rev.name}
                    </h6>
                    <span className="text-warning small text-uppercase fw-semibold" style={{ fontSize: '0.7rem' }}>
                      {rev.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="text-center mt-5 pt-5 animate-up-delay-2">
          <button className="btn-cta-review">
            SUBMIT YOUR EXPERIENCE
          </button>
        </div>
      </div>

      <style>{`
        .fw-black { font-weight: 900; }
        .tracking-widest { letter-spacing: 0.3em; }
        .tracking-wider { letter-spacing: 0.15em; }

        .divider-line {
          width: 60px;
          height: 3px;
          background-color: #ffc107;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .testimonial-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 193, 7, 0.3);
          transform: translateY(-8px);
        }

        .rating-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .testimonial-text {
          line-height: 1.8;
          font-weight: 300;
        }

        .avatar-wrapper {
          width: 45px;
          height: 45px;
          overflow: hidden;
          background: #333;
        }

        .grayscale-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .testimonial-card:hover .grayscale-img {
          filter: grayscale(0%);
        }

        .btn-cta-review {
          background: none;
          border: none;
          border-bottom: 2px solid #ffc107;
          color: #ffc107;
          padding: 10px 0;
          font-weight: 900;
          font-size: 0.85rem;
          letter-spacing: 2px;
          transition: all 0.3s ease;
        }

        .btn-cta-review:hover {
          letter-spacing: 4px;
          opacity: 0.8;
        }

        /* ANIMATIONS */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-up { animation: slideUp 0.8s ease forwards; }
        .animate-up-delay { animation: slideUp 0.8s ease 0.2s forwards; opacity: 0; }
        .animate-up-delay-2 { animation: slideUp 0.8s ease 0.4s forwards; opacity: 0; }
        
        .animate-card {
          opacity: 0;
          animation: slideUp 0.8s ease forwards;
        }

        @media (max-width: 768px) {
          .display-4 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}

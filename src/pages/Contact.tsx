import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please ensure your email format is correct.',
        background: '#0f172a',
        color: '#fff',
        confirmButtonColor: '#ffc107'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent',
      text: `Thank you ${formData.name}, your message has been received and will be processed by our team.`,
      background: '#0f172a',
      color: '#fff',
      confirmButtonColor: '#ffc107',
      timer: 4000
    });

    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
  };

  return (
    <div className="contact-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="contact-card overflow-hidden animate-fade-in">
              <div className="row g-0">
                
                {/* INFO SECTION */}
                <div className="col-md-5 info-panel p-5 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="text-dark text-uppercase fw-black tracking-widest mb-3">Contact Us</h6>
                    <h2 className="fw-black mb-4 text-dark display-6">Let's Connect</h2>
                    <p className="text-dark opacity-75 mb-5">
                      Memiliki pertanyaan mengenai kurasi biji kopi kami atau tertarik untuk kolaborasi teknis? Tim kami siap membantu Anda.
                    </p>

                    <div className="contact-info-list">
                      <div className="d-flex align-items-center mb-4 text-dark">
                        <div className="info-icon-box me-3">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                          <small className="d-block text-uppercase fw-bold opacity-50">Location</small>
                          <span className="fw-bold">Jakarta, Indonesia</span>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-4 text-dark">
                        <div className="info-icon-box me-3">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                          <small className="d-block text-uppercase fw-bold opacity-50">Email</small>
                          <span className="fw-bold">hello@coderoast.id</span>
                        </div>
                      </div>

                      <div className="d-flex align-items-center text-dark">
                        <div className="info-icon-box me-3">
                          <i className="fas fa-clock"></i>
                        </div>
                        <div>
                          <small className="d-block text-uppercase fw-bold opacity-50">Operating Hours</small>
                          <span className="fw-bold">09:00 - 21:00 WIB</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="social-links d-flex gap-3 mt-5">
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>

                {/* FORM SECTION */}
                <div className="col-md-7 form-panel p-5">
                  <h3 className="text-white fw-black text-uppercase tracking-wider mb-4">Send Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-group-custom">
                          <label className="text-warning small text-uppercase fw-bold mb-2 tracking-wider">Full Name</label>
                          <input 
                            type="text" 
                            name="name"
                            className="form-control-custom" 
                            placeholder="Hansen Pratama"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group-custom">
                          <label className="text-warning small text-uppercase fw-bold mb-2 tracking-wider">Email Address</label>
                          <input 
                            type="email" 
                            name="email"
                            className="form-control-custom" 
                            placeholder="hansen@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group-custom">
                          <label className="text-warning small text-uppercase fw-bold mb-2 tracking-wider">Subject</label>
                          <select 
                            name="subject"
                            className="form-control-custom select-custom"
                            value={formData.subject}
                            onChange={handleChange}
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Order Support">Order Support</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Tech Feedback">Tech Feedback</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group-custom">
                          <label className="text-warning small text-uppercase fw-bold mb-2 tracking-wider">Message</label>
                          <textarea 
                            name="message"
                            className="form-control-custom" 
                            rows={4}
                            placeholder="Describe your inquiry..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 mt-5">
                        <button type="submit" className="btn-submit-custom">
                          Dispatch Message <i className="fas fa-paper-plane ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fw-black { font-weight: 900; }
        .tracking-widest { letter-spacing: 0.3em; }
        .tracking-wider { letter-spacing: 0.1em; }

        .contact-card {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .info-panel {
          background: #ffc107;
          position: relative;
        }

        .info-icon-box {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          font-size: 1rem;
        }

        .social-icon {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.2);
          color: #000;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: #000;
          color: #ffc107;
        }

        .form-panel {
          background: #0f172a;
        }

        .form-control-custom {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 0;
          color: #fff;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .form-control-custom:focus {
          border-color: #ffc107;
        }

        .select-custom {
          appearance: none;
          cursor: pointer;
        }

        .select-custom option {
          background: #0f172a;
          color: #fff;
        }

        .btn-submit-custom {
          width: 100%;
          background: #ffc107;
          color: #000;
          border: none;
          padding: 15px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .btn-submit-custom:hover {
          background: #fff;
          transform: translateY(-3px);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @media (max-width: 768px) {
          .info-panel { padding: 40px 30px !important; }
          .form-panel { padding: 40px 30px !important; }
        }
      `}</style>
    </div>
  );
}

import React, { useState } from "react";
import Swal from "sweetalert2";

// 1. Struktur Data yang Konsisten
interface CoffeeRecommendation {
  name: string;
  intensity: string;
  mood: string;
  description: string;
  icon: string;
  image: string;
}

export default function Recommendation() {
  const [selectedVibe, setSelectedVibe] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [result, setResult] = useState<CoffeeRecommendation | null>(null);

  // 2. Mapping Table: Input A + Input B = Hasil yang Selalu Sama
  const coffeeDatabase: Record<string, CoffeeRecommendation> = {
    "Pagi-Produktif": {
      name: "Double Shot Espresso",
      intensity: "95%",
      mood: "High Energy ⚡",
      description: "Tendangan kafein murni untuk memulai hari dengan ledakan energi.",
      icon: "☕",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=300&h=300&fit=crop"
    },
    "Pagi-Santai": {
      name: "Hot Cafe Latte",
      intensity: "50%",
      mood: "Cozy Morning ☁️",
      description: "Tekstur lembut susu yang dipadukan dengan kopi pilihan, cocok untuk memulai hari tanpa terburu-buru.",
      icon: "🥛",
      image: "https://images.unsplash.com/photo-1570968865863-946613a71e75?q=80&w=300&h=300&fit=crop"
    },
    "Siang-Produktif": {
      name: "Iced Americano",
      intensity: "75%",
      mood: "Stay Sharp 🧊",
      description: "Dingin dan kuat. Menjaga fokusmu tetap tajam di tengah teriknya matahari dan tumpukan tugas.",
      icon: "🧊",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=300&h=300&fit=crop"
    },
    "Siang-Santai": {
      name: "Iced Caramel Macchiato",
      intensity: "60%",
      mood: "Sweet Break 🍯",
      description: "Perpaduan manis caramel dan kopi dingin untuk mood booster di siang hari.",
      icon: "🍯",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=300&h=300&fit=crop"
    },
    "Malam-Produktif": {
      name: "Cold Brew Black",
      intensity: "85%",
      mood: "Night Owl 🦉",
      description: "Ekstraksi dingin yang kuat untuk menemanimu terjaga menyelesaikan hal-hal penting.",
      icon: "🌑",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=300&h=300&fit=crop"
    },
    "Malam-Santai": {
      name: "Decaf Flat White",
      intensity: "10%",
      mood: "Deep Relax 🧘",
      description: "Rasa kopi yang kaya namun rendah kafein, sempurna untuk menutup hari dengan tenang.",
      icon: "🌙",
      image: "https://images.unsplash.com/photo-1461023233367-308ea98d455e?q=80&w=300&h=300&fit=crop"
    }
  };

  const findMyCoffee = () => {
    if (!selectedVibe || !selectedGoal) {
      Swal.fire({
        icon: 'info',
        title: 'Lengkapi Pilihanmu',
        text: 'Pilih waktu dan suasana hati kamu dulu ya!',
        background: '#0f172a',
        color: '#fff',
        confirmButtonColor: '#ffc107'
      });
      return;
    }

    const key = `${selectedVibe}-${selectedGoal}`;
    const match = coffeeDatabase[key] || coffeeDatabase["Pagi-Santai"];
    setResult(match);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-warning">Personal Coffee Guide ☕</h2>
        <p className="text-secondary">Temukan kopi yang paling cocok dengan momenmu saat ini.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg p-4 p-md-5" 
               style={{ backgroundColor: "rgba(30, 41, 59, 0.6)", backdropFilter: "blur(20px)", borderRadius: "30px" }}>
            
            {/* STEP 1: WAKTU */}
            <div className="mb-4">
              <label className="text-warning small fw-bold mb-3 d-block">1. KAPAN KAMU AKAN MEMINUMNYA?</label>
              <div className="d-flex flex-wrap gap-2">
                {["Pagi", "Siang", "Malam"].map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedVibe(time)}
                    className={`btn rounded-pill px-4 py-2 transition-all ${selectedVibe === time ? 'btn-warning fw-bold' : 'btn-outline-secondary text-white'}`}
                  >
                    {time === "Pagi" ? "☀️ Pagi" : time === "Siang" ? "☀️ Siang" : "🌙 Malam"}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: TUJUAN */}
            <div className="mb-5">
              <label className="text-warning small fw-bold mb-3 d-block">2. APA RENCANAMU SEKARANG?</label>
              <div className="d-flex flex-wrap gap-2">
                {["Produktif", "Santai"].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    className={`btn rounded-pill px-4 py-2 transition-all ${selectedGoal === goal ? 'btn-warning fw-bold' : 'btn-outline-secondary text-white'}`}
                  >
                    {goal === "Produktif" ? "🚀 Fokus Kerja/Belajar" : "☕ Chill & Santai"}
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="btn btn-warning w-100 py-3 fw-bold rounded-pill shadow-lg mb-4"
              onClick={findMyCoffee}
            >
              CARI KOPI SAYA →
            </button>

            {/* HASIL REKOMENDASI */}
            {result && (
              <div className="mt-4 p-4 rounded-4 animate-fade-in shadow-inner" 
                   style={{ backgroundColor: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,193,7,0.3)" }}>
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-3 mb-md-0">
                    <img 
                      src={result.image} 
                      alt={result.name} 
                      className="img-fluid rounded-4 shadow-sm"
                      style={{ width: "100%", height: "150px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="badge bg-warning text-dark mb-2">{result.mood}</div>
                    <h3 className="text-white fw-bold mb-2">{result.name}</h3>
                    <p className="text-secondary small mb-3">{result.description}</p>
                    
                    <div className="d-flex align-items-center gap-3">
                      <span className="small text-secondary fw-bold">Intensity</span>
                      <div className="progress flex-grow-1 bg-dark" style={{ height: "6px" }}>
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: result.intensity }}></div>
                      </div>
                      <span className="text-warning fw-bold small">{result.intensity}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
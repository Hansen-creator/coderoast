export default function Hero() {
  return (
    <section className="text-center d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "linear-gradient(to right, black, #1e293b)" }}
    >
      <div>
        <h1 className="display-3 fw-bold mb-4">
          Coffee Meets <span className="text-warning">Code</span>
        </h1>
        <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: "600px" }}>
          Nikmati kopi premium sambil ngoding. Teman terbaik untuk bug dan deadline ☕💻
        </p>
        <button className="btn btn-warning btn-lg fw-semibold">
          Explore Menu
        </button>
      </div>
    </section>
  );
}
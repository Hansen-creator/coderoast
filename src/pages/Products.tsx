import { useState, useMemo } from "react";
import { useCart } from "../context/CartContext";

// 1. Definisi Tipe Data yang lebih ketat
interface CoffeeProduct {
  id: number;
  name: string;
  category: "Coffee" | "Non-Coffee" | "Beans";
  price: number;
  image: string;
  desc: string;
}

export default function Products() {
  const { addToCart, cart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const coffees: CoffeeProduct[] = [
    { id: 1, name: "Espresso", category: "Coffee", price: 18000, desc: "Intense & Bold", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
    { id: 2, name: "Latte", category: "Coffee", price: 27000, desc: "Creamy & Smooth", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { id: 3, name: "Cappuccino", category: "Coffee", price: 25000, desc: "Perfectly Frothy", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096" },
    { id: 4, name: "Matcha Latte", category: "Non-Coffee", price: 30000, desc: "Pure Japanese Matcha", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7" },
    { id: 5, name: "House Blend Beans", category: "Beans", price: 85000, desc: "Arabica & Robusta Mix", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e" },
    { id: 6, name: "Cold Brew", category: "Coffee", price: 28000, desc: "12-hour Slow Steeped", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c" },
    { id: 7, name: "Choco Hazelnut", category: "Non-Coffee", price: 32000, desc: "Rich Dark Chocolate", image: "https://images.unsplash.com/photo-1544787210-2213d242650a" },
    { id: 8, name: "Single Origin Gayo", category: "Beans", price: 120000, desc: "Premium Aceh Gayo", image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780" },
  ];

  const filteredProducts = useMemo(() => {
    return coffees.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  // 2. Gunakan tipe data dari cart daripada 'any'
  const getQty = (name: string) => {
    const item = cart.find((i) => i.name === name);
    return item ? item.qty : 0;
  };

  return (
    <div className="products-container py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h6 className="text-warning text-uppercase fw-bold tracking-widest mb-3">Our Menu</h6>
            <h2 className="display-4 fw-black text-white mb-4">The Roastery Selection</h2>
            
            <div className="search-wrapper position-relative mx-auto mt-4" style={{ maxWidth: "500px" }}>
              <input
                type="text"
                className="form-control bg-transparent text-white border-warning border-opacity-25 rounded-pill py-3 px-4 shadow-none search-input"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {["All", "Coffee", "Non-Coffee", "Beans"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn px-4 py-2 rounded-0 text-uppercase fw-bold fs-7 transition-all ${
                activeCategory === cat ? "btn-warning" : "btn-outline-light opacity-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="row g-4 justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const qty = getQty(product.name);
              return (
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex" key={product.id}>
                  <div className="product-card w-100 flex-column overflow-hidden">
                    <div className="image-container position-relative">
                      <div className="category-overlay text-uppercase small px-3 py-1 fw-bold">
                        {product.category}
                      </div>
                      <img
                        src={product.image}
                        className="product-image"
                        alt={product.name}
                      />
                    </div>

                    <div className="product-info p-4 flex-grow-1 d-flex flex-column">
                      <h5 className="text-white fw-bold mb-1">{product.name}</h5>
                      <p className="text-secondary small flex-grow-1">{product.desc}</p>
                      
                      <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
                        <span className="h5 mb-0 text-warning fw-black">
                          IDR {product.price / 1000}K
                        </span>
                        {qty > 0 && (
                          <div className="qty-indicator">
                            Ordered: <span className="text-white fw-bold">{qty}</span>
                          </div>
                        )}
                      </div>

                      <button
                        className={`btn w-100 py-3 rounded-0 fw-black text-uppercase tracking-wider transition-all ${
                          qty >= 5 
                            ? "btn-dark border border-secondary text-secondary" 
                            : "btn-warning"
                        }`}
                        onClick={() => addToCart(product)}
                        disabled={qty >= 5}
                      >
                        {qty >= 5 ? "Stock Limit" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-secondary fs-5">No products matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .fw-black { font-weight: 900; }
        .fs-7 { font-size: 0.8rem; }
        .tracking-widest { letter-spacing: 0.2em; }
        .tracking-wider { letter-spacing: 0.1em; }

        .search-input {
          backdrop-filter: blur(2px);
          transition: all 0.3s ease;
        }
        .search-input:focus {
          border-color: #ffc107 !important;
          background: rgba(255, 255, 255, 0.05) !important;
        }

        .product-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .product-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 193, 7, 0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .image-container {
          height: 250px;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        .category-overlay {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #ffc107;
          color: #000;
          z-index: 2;
          font-size: 0.65rem;
          letter-spacing: 1px;
        }

        .qty-indicator {
          font-size: 0.75rem;
          color: #666;
          text-transform: uppercase;
        }

        @media (max-width: 576px) {
          .display-4 { font-size: 2.2rem; }
          .image-container { height: 200px; }
        }
      `}</style>
    </div>
  );
}

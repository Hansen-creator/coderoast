import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, totalPrice, checkout } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center py-5 shadow-lg empty-cart-box">
            <div className="empty-cart-icon mb-4">
              <i className="fas fa-shopping-basket"></i>
            </div>
            <h2 className="text-white fw-black text-uppercase tracking-wider">Your Cart is Empty</h2>
            <p className="text-secondary mb-5 opacity-75">
              Sepertinya Anda belum memilih kurasi kopi untuk hari ini.
            </p>
            <Link to="/products" className="btn btn-warning px-5 py-3 fw-bold rounded-0 text-uppercase tracking-widest">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container py-5">
      <div className="container">
        <div className="d-flex align-items-center mb-5 animate-fade-in">
          <i className="fas fa-shopping-cart text-warning fs-3 me-3"></i>
          <h2 className="text-white fw-black text-uppercase mb-0 tracking-wider">Order Summary</h2>
        </div>

        <div className="row g-4">
          {/* LIST ITEM */}
          <div className="col-lg-8">
            <div className="cart-items-wrapper">
              {cart.map((item, index) => (
                <div key={index} className="cart-item-card mb-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="card-body p-3">
                    <div className="row align-items-center g-3">
                      <div className="col-auto">
                        <img src={item.image} alt={item.name} className="product-thumb" />
                      </div>
                      <div className="col">
                        <h5 className="text-white mb-1 fw-bold text-uppercase fs-6 tracking-tight">{item.name}</h5>
                        <p className="text-warning mb-0 small fw-bold">IDR {item.price.toLocaleString("id-ID")}</p>
                      </div>
                      <div className="col-auto">
                        <div className="qty-control d-flex align-items-center">
                          <button onClick={() => decreaseQty(item.name)} className="qty-btn">
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className="qty-value px-3">{item.qty}</span>
                          <button onClick={() => increaseQty(item.name)} className="qty-btn">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-auto text-end d-none d-sm-block" style={{ minWidth: '100px' }}>
                        <p className="text-white mb-0 fw-black">
                          {(item.price * item.qty).toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 animate-fade-in">
              <Link to="/products" className="text-warning text-decoration-none small fw-bold text-uppercase tracking-widest">
                <i className="fas fa-arrow-left me-2"></i> Continue Shopping
              </Link>
            </div>
          </div>

          {/* CHECKOUT BOX */}
          <div className="col-lg-4">
            <div className="checkout-sticky-wrapper animate-fade-in">
              <div className="checkout-card p-4">
                <h4 className="fw-black text-white text-uppercase tracking-wider mb-4 fs-5">Checkout Detail</h4>
                
                <div className="price-row d-flex justify-content-between mb-2 opacity-75">
                  <span className="text-uppercase small tracking-wider text-white">Subtotal</span>
                  <span className="text-white">IDR {totalPrice.toLocaleString("id-ID")}</span>
                </div>
                <div className="price-row d-flex justify-content-between mb-4 opacity-75">
                  <span className="text-uppercase small tracking-wider text-white">Tax (0%)</span>
                  <span className="text-success small fw-bold uppercase">Included</span>
                </div>
                
                <div className="total-divider mb-4"></div>
                
                <div className="total-row d-flex justify-content-between align-items-end mb-4">
                  <span className="fw-black text-white text-uppercase tracking-widest">Total</span>
                  <span className="fw-black fs-4 text-warning">IDR {totalPrice.toLocaleString("id-ID")}</span>
                </div>

                <button onClick={() => checkout(navigate)} className="btn-checkout-primary w-100 py-3 mb-3">
                  COMPLETE ORDER <i className="fas fa-check-circle ms-2"></i>
                </button>
                
                <div className="info-box-minimal p-3">
                  <i className="fas fa-info-circle text-warning me-2"></i>
                  <span className="text-secondary small">Table number will be assigned automatically after payment.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fw-black { font-weight: 900; }
        .tracking-wider { letter-spacing: 0.15em; }
        .tracking-widest { letter-spacing: 0.25em; }
        .tracking-tight { letter-spacing: -0.5px; }

        /* Empty Cart State */
        .empty-cart-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .empty-cart-icon {
          font-size: 5rem;
          color: rgba(255, 255, 255, 0.1);
        }

        /* Cart Items */
        .cart-item-card {
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid transparent;
          transition: all 0.3s ease;
        }
        .cart-item-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-left-color: #ffc107;
          transform: translateX(5px);
        }
        .product-thumb {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 2px;
        }

        /* Quantity Control */
        .qty-control {
          background: #000;
          padding: 5px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .qty-btn {
          background: transparent;
          border: none;
          color: #ffc107;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s;
        }
        .qty-btn:hover { opacity: 0.6; }
        .qty-value { color: #fff; font-weight: bold; min-width: 30px; text-align: center; }

        /* Checkout Card */
        .checkout-card {
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: sticky;
          top: 100px;
        }
        .total-divider {
          height: 1px;
          background: linear-gradient(to right, #ffc107, transparent);
        }
        .btn-checkout-primary {
          background: #ffc107;
          color: #000;
          border: none;
          font-weight: 900;
          letter-spacing: 2px;
          transition: all 0.3s ease;
        }
        .btn-checkout-primary:hover {
          background: #fff;
          transform: translateY(-2px);
        }
        .info-box-minimal {
          background: rgba(255, 193, 7, 0.05);
          border-left: 2px solid #ffc107;
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in forwards;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 991px) {
          .checkout-sticky-wrapper { margin-top: 2rem; }
        }
      `}</style>
    </div>
  );
}
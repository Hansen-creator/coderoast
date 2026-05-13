import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import Swal from "sweetalert2";
import jsPDF from "jspdf";

// 1. Definisi tipe yang lebih ketat
interface Item {
  name: string;
  price: number;
  image: string;
  qty: number;
}

// Tipe untuk parameter produk saat addToCart
interface Product {
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: Item[];
  addToCart: (product: Product) => void;
  increaseQty: (name: string) => void;
  decreaseQty: (name: string) => void;
  totalItems: number;
  totalPrice: number;
  checkout: (navigate: (path: string) => void) => void;
}

const CartContext = createContext<CartContextType | null>(null);
const MAX_QTY = 5;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Item[]>([]);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalItems = cart.reduce((a, b) => a + b.qty, 0);

  const addToCart = (product: Product) => {
    const exist = cart.find((item) => item.name === product.name);
    if (exist) {
      if (exist.qty >= MAX_QTY) {
        Swal.fire({ 
          icon: "warning", 
          title: "Limit Reached", 
          text: `Maksimal pembelian adalah ${MAX_QTY} item`,
          background: "#0f172a", 
          color: "#fff",
          confirmButtonColor: "#ffc107"
        });
        return;
      }
      setCart(cart.map((item) => item.name === product.name ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    
    const Toast = Swal.mixin({ 
      toast: true, 
      position: 'top-end', 
      showConfirmButton: false, 
      timer: 1500,
      background: "#1e293b",
      color: "#fff"
    });
    Toast.fire({ icon: 'success', title: `${product.name} ditambahkan` });
  };

  const increaseQty = (name: string) => {
    setCart(prevCart => prevCart.map((item) => {
      if (item.name === name) {
        if (item.qty >= MAX_QTY) {
          Swal.fire({ 
            icon: "warning", 
            title: "Limit Tercapai", 
            background: "#0f172a", 
            color: "#fff", 
            confirmButtonColor: "#ffc107" 
          });
          return item;
        }
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    }));
  };

  const decreaseQty = (name: string) => {
    setCart(prevCart => 
      prevCart
        .map((item) => item.name === name ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const generatePDF = (seatNumber: number, orderId: string) => {
    // Ukuran 80mm x 150mm untuk thermal printer
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [80, 150]
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    
    // HEADER
    doc.setFont("courier", "bold");
    doc.setFontSize(14);
    doc.text("CODEROAST", pageWidth / 2, 10, { align: "center" });
    
    doc.setFontSize(8);
    doc.setFont("courier", "normal");
    doc.text("Jakarta, Indonesia", pageWidth / 2, 15, { align: "center" });
    doc.text("--------------------------------", pageWidth / 2, 20, { align: "center" });

    // INFO TRANSAKSI
    doc.setFontSize(7);
    doc.text(`ID    : ${orderId}`, 10, 25);
    doc.text(`TGL   : ${new Date().toLocaleDateString('id-ID')}`, 10, 29);
    doc.text(`JAM   : ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`, 10, 33);
    doc.setFont("courier", "bold");
    doc.text(`MEJA  : ${seatNumber}`, 10, 37);
    doc.setFont("courier", "normal");
    doc.text("--------------------------------", pageWidth / 2, 42, { align: "center" });

    // DAFTAR ITEM
    let currentY = 47;
    cart.forEach((item) => {
      doc.text(`${item.name.toUpperCase()}`, 10, currentY);
      const subtotal = `Rp ${(item.price * item.qty).toLocaleString('id-ID')}`;
      doc.text(`${item.qty} x ${item.price.toLocaleString('id-ID')}`, 10, currentY + 4);
      doc.text(subtotal, 70, currentY + 4, { align: "right" });
      currentY += 10;
    });

    // FOOTER / TOTAL
    doc.text("--------------------------------", pageWidth / 2, currentY, { align: "center" });
    doc.setFontSize(9);
    doc.setFont("courier", "bold");
    doc.text("TOTAL", 10, currentY + 7);
    doc.text(`Rp ${totalPrice.toLocaleString('id-ID')}`, 70, currentY + 7, { align: "right" });

    doc.setFontSize(7);
    doc.setFont("courier", "normal");
    doc.text("--------------------------------", pageWidth / 2, currentY + 13, { align: "center" });
    doc.text("Terima kasih sudah memesan!", pageWidth / 2, currentY + 18, { align: "center" });
    doc.text("Code is temporary, Coffee is eternal", pageWidth / 2, currentY + 22, { align: "center" });

    doc.save(`Struk_${orderId}.pdf`);
  };

  const checkout = async (navigate: (path: string) => void) => {
    if (cart.length === 0) return;

    const result = await Swal.fire({
      title: "Konfirmasi Pembayaran",
      html: `Total yang harus dibayar:<br><b style="color:#ffc107; font-size: 20px;">Rp ${totalPrice.toLocaleString('id-ID')}</b>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Bayar Sekarang",
      cancelButtonText: "Batal",
      confirmButtonColor: "#ffc107",
      cancelButtonColor: "#334155",
      background: "#0f172a",
      color: "#fff"
    });

    if (result.isConfirmed) {
      const randomSeat = Math.floor(Math.random() * 50) + 1;
      const orderId = "CR" + Math.random().toString(36).substring(2, 8).toUpperCase();

      await Swal.fire({
        icon: "success",
        title: "Pembayaran Berhasil",
        html: `
          <div style="padding: 10px;">
            <p>Silakan menuju meja nomor:</p>
            <h1 style="color:#ffc107; font-size: 80px; margin: 15px 0; font-family: 'Courier New', Courier, monospace;">${randomSeat}</h1>
            <p style="font-size: 0.8rem; opacity: 0.7;">Struk belanja Anda sedang diunduh...</p>
          </div>
        `,
        background: "#0f172a",
        color: "#fff",
        timer: 4000,
        showConfirmButton: false,
      });

      generatePDF(randomSeat, orderId);
      setCart([]);
      navigate("/");
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, totalItems, totalPrice, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart harus di dalam CartProvider");
  return context;
};

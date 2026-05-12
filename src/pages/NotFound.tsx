import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dots, setDots] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Animasi titik-titik "memanggil..."
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center space-y-6">

        {/* Papan antrian */}
        <div className="rounded-3xl border-2 border-primary/30 bg-card shadow-lg overflow-hidden">

          {/* Header papan */}
          <div className="bg-primary px-6 py-3 flex items-center justify-between">
            <span className="text-primary-foreground text-xs font-semibold uppercase tracking-widest">
              Sistem Antrian
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-serving animate-pulse" />
              <span className="text-primary-foreground/80 text-xs">Live</span>
            </span>
          </div>

          {/* Nomor antrian besar */}
          <div className="px-6 py-8 space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Sedang Memanggil
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-8xl font-black text-primary leading-none">404</span>
            </div>
            <p className="text-muted-foreground text-sm font-mono tracking-widest">
              — HALAMAN TIDAK DITEMUKAN —
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border mx-6" />

          {/* Status */}
          <div className="px-6 py-4 bg-muted/40 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Status</span>
            <span className="font-semibold text-destructive flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              Terlewat
            </span>
          </div>
        </div>

        {/* Pesan */}
        <div className="space-y-1">
          <p className="text-foreground font-medium">
            Halaman yang kamu cari tidak ada dalam antrian{dots}
          </p>
          <p className="text-muted-foreground text-sm">
            <span className="font-mono text-primary/80">{location.pathname}</span> tidak terdaftar.
          </p>
        </div>

        {/* Tombol */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2.5 rounded-xl border border-input bg-background text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            ← Kembali
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Ke Beranda
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;

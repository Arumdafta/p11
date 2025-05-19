export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8cdd1 0%, #ffe8ec 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#b05269",
        flexDirection: "column",
        padding: 24,
      }}
    >
      <h1 style={{ fontSize: 36, fontWeight: "700", marginBottom: 12 }}>
        Selamat datang di Make.uFlow
      </h1>
      <p style={{ fontSize: 18, maxWidth: 480, textAlign: "center" }}>
        Toko kosmetik resmi dengan produk berkualitas dari Flower Knows.
      </p>
    </div>
  );
}

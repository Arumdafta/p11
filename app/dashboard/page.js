"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin) {
      router.replace("/");
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    return null; // atau loading spinner
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Dashboard Admin Make.uFlow</h1>
        <p style={styles.subtitle}>
          Selamat datang di dashboard admin toko kosmetik Flower Knows!
        </p>
      </header>

      {/* Contoh konten dashboard */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Produk Unggulan</h2>
        <div style={styles.productsGrid}>
          {/* Contoh produk */}
          <div style={styles.productCard}>
            <img
              src="/images/ff1.jpg"
              alt="Produk 1"
              style={styles.productImage}
            />
            <h3 style={styles.productName}>Flower Knows Blush On</h3>
            <p style={styles.productPrice}>Rp120.000</p>
          </div>
          <div style={styles.productCard}>
            <img
              src="/images/ff2.jpg"
              alt="Produk 2"
              style={styles.productImage}
            />
            <h3 style={styles.productName}>Flower Knows Lip Tint</h3>
            <p style={styles.productPrice}>Rp150.000</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "48px 32px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#b05269",
  },
  header: {
    marginBottom: 40,
    textAlign: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#d6336c",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
    color: "#d6336c",
  },
  productsGrid: {
    display: "flex",
    gap: 32,
    justifyContent: "center",
  },
  productCard: {
    backgroundColor: "#fff0f4",
    padding: 20,
    borderRadius: 16,
    width: 220,
    boxShadow: "0 6px 14px rgba(214, 51, 108, 0.2)",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    borderRadius: 12,
    marginBottom: 16,
  },
  productName: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 8,
  },
  productPrice: {
    fontWeight: "600",
    fontSize: 16,
    color: "#d6336c",
  },
};

"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { isAdmin, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLeft}>
        <Link href="/" style={styles.logo}>
          Make.uFlow
        </Link>
        <Link href="/" style={pathname === "/" ? styles.activeLink : styles.navLink}>
          Home
        </Link>
        {isAdmin && (
          <Link href="/dashboard" style={pathname === "/dashboard" ? styles.activeLink : styles.navLink}>
            Dashboard
          </Link>
        )}
      </div>

      <div>
        {isAdmin ? (
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        ) : (
          <Link href="/login" style={styles.loginBtn}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: "14px 36px",
    boxShadow: "0 2px 8px rgba(255, 182, 193, 0.3)", // pink pastel shadow
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  navLeft: {
    display: "flex",
    gap: 28,
    alignItems: "center",
  },
  logo: {
    fontWeight: "700",
    fontSize: 24,
    color: "#ff7f9c", // pink pastel
    textDecoration: "none",
  },
  navLink: {
    fontSize: 16,
    color: "#ffb6c1", // pink pastel light
    textDecoration: "none",
    fontWeight: "600",
    transition: "color 0.3s",
  },
  activeLink: {
    fontSize: 16,
    color: "#ff7f9c", // darker pink pastel
    fontWeight: "700",
    textDecoration: "underline",
  },
  logoutBtn: {
    backgroundColor: "#ff7f9c",
    border: "none",
    borderRadius: 12,
    padding: "8px 18px",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(255, 127, 156, 0.4)",
    transition: "background-color 0.3s",
  },
  loginBtn: {
    fontWeight: "700",
    fontSize: 16,
    color: "#ff7f9c",
    textDecoration: "none",
    border: "2px solid #ff7f9c",
    borderRadius: 12,
    padding: "8px 18px",
    transition: "background-color 0.3s, color 0.3s",
  },
};

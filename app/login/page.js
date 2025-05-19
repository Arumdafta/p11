"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, isAdmin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  if (isAdmin) {
    router.push("/dashboard");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      login();
      setMessage("Login sukses | Go to Dashboard");
      setTimeout(() => router.push("/dashboard"), 1500);
    } else {
      setMessage("Username atau password salah");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login Admin Make.uFlow</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
            placeholder="Masukkan username"
          />
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
            placeholder="Masukkan password"
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {message && (
          <p
            style={{
              ...styles.message,
              color: message.includes("sukses") ? "#d6336c" : "#e55353",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #f8cdd1 0%, #ffe8ec 100%)",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(214, 51, 108, 0.15)",
    width: "100%",
    maxWidth: 420,
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    marginBottom: 28,
    fontWeight: "700",
    fontSize: 28,
    color: "#d6336c",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  label: {
    fontWeight: "600",
    textAlign: "left",
    color: "#b05269",
    fontSize: 16,
  },
  input: {
    padding: 14,
    fontSize: 16,
    borderRadius: 10,
    border: "2px solid #f3a6b1",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    marginTop: 10,
    padding: 14,
    fontSize: 18,
    fontWeight: "700",
    borderRadius: 12,
    border: "none",
    backgroundColor: "#d6336c",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 6px 14px rgba(214, 51, 108, 0.4)",
    transition: "background-color 0.3s",
  },
  message: {
    marginTop: 22,
    fontWeight: "600",
    fontSize: 16,
  },
};

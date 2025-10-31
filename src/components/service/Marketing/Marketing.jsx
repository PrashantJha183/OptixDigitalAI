import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
export default function Marketing() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        textAlign: "center",
        fontFamily: "sans-serif",
        color: "#333",
      }}
    >
      <FiAlertTriangle size={50} color="#f59e0b" /> {/* yellow warning icon */}
      <h1 style={{ marginTop: "1rem", fontSize: "2rem" }}>Marketing Page</h1>
      <p style={{ marginTop: "0.5rem", fontSize: "1.2rem" }}>
        🚧 This page is currently under development. Please check back later!
      </p>
    </div>
  );
}

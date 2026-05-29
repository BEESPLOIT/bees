import { useState } from "react";

export default function Beesploitz() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        color: "#FFD700",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      {!loggedIn ? (
        <div
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            background: "#1b1b1b",
            padding: "30px",
            borderRadius: "12px",
            border: "2px solid #FFD700",
            boxShadow: "0 0 20px rgba(255,215,0,0.3)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            🐝 Beesploitz
          </h1>

          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "none",
              outline: "none",
            }}
          />

          <button
            onClick={() => setLoggedIn(true)}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#FFD700",
              color: "#000",
              fontWeight: "bold",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            LOGIN
          </button>
        </div>
      ) : (
        <div>
          <h1>🐝 Beesploitz Dashboard</h1>

          <div
            style={{
              marginTop: "20px",
              background: "#1b1b1b",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>System Status</h2>
            <p>✅ Website deployed successfully</p>
            <p>✅ React connected</p>
            <p>✅ Netlify working</p>
          </div>

          <div
            style={{
              marginTop: "20px",
              background: "#1b1b1b",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>User Panel</h2>
            <p>Welcome to Beesploitz.</p>
          </div>
        </div>
      )}
    </div>
  );
}

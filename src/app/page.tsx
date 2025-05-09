"use client";

import { useEffect, useState } from "react";
import HomePage from "@/home/page";
import { BounceLoader } from "react-spinners";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* LOADER OVERLAY */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <BounceLoader color="#002aff" />
        </div>
      )}

      {/* PAGE CONTENT */}
      <div
        style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease" }}
      >
        <HomePage />
      </div>
    </div>
  );
}

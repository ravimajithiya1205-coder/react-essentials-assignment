import React from "react";

const ThemeToggle = ({ dark, setDark }) => {
  return (
    <div
      onClick={() => setDark(!dark)}
      style={{
        width: "60px",
        height: "30px",
        background: dark ? "#333" : "#ddd",
        borderRadius: "30px",
        cursor: "pointer",
        position: "relative",
        transition: "0.3s"
      }}
    >
      <div
        style={{
          width: "25px",
          height: "25px",
          background: "#fff",
          borderRadius: "50%",
          position: "absolute",
          top: "2px",
          left: dark ? "32px" : "3px",
          transition: "0.3s"
        }}
      />
    </div>
  );
};

export default ThemeToggle;
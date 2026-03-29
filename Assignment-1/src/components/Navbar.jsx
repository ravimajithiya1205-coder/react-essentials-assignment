import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ dark, setDark, setPage }) => {
  return (
    <nav className="navbar navbar-expand-lg px-4 py-3 w-100"
      style={{
        background: dark
          ? "linear-gradient(90deg, #5a5a5a, #000000)"
          : "linear-gradient(90deg, #141e30, #243b55)",
      }}
    >
      {/* LEFT */}
      <h4 className="text-white m-0">My Project</h4>

      {/* RIGHT */}
      <div className="ms-auto d-flex align-items-center gap-3">

        <button
        className="btn btn-outline-light btn-sm"
        onClick={() => setPage("profile")}
      >
        👤 Profile
      </button>

      <button
        className="btn btn-outline-warning btn-sm"
        onClick={() => setPage("movies")}
      >
        🎬 Movies
      </button>
        {/* 🌙 THEME TOGGLE */}
        <ThemeToggle dark={dark} setDark={setDark} />

      </div>
    </nav>
  );
};

export default Navbar;
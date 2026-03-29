import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import MovieApp from "./movie/MovieApp";
import Navbar from "./components/Navbar";

function App() {
  const [dark, setDark] = useState(false);
  const [page, setPage] = useState("profile");

  const skills = ["React", "JS", "Bootstrap", "API"];

  const images = [
    "https://picsum.photos/400?1",
    "https://picsum.photos/400?2",
  ];

  return (
    <div className={dark ? "bg-dark text-light" : "bg-light"} style={{ minHeight: "100vh" }}>

      <div className="d-flex position-sticky top-0 z-index-9 justify-content-between pb-3">
        <Navbar dark={dark} setDark={setDark} setPage={setPage} />
      </div>

      <div className="container-fluid px-4 mt-5">
        <div className="row g-4">

            {page === "profile" && (
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <ProfileCard
                name="Ravi"
                title="Frontend Dev"
                bio="Building crazy UI 🔥"
                skills={skills}
                images={images}
              />
            </div>
          </div>
        )}

        {page === "movies" && (
          <div className="row">
            <div className="col-12">
              <MovieApp dark={dark} />
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  );
}

export default App;
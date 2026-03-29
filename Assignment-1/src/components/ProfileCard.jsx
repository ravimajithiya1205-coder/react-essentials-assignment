import React, { useState } from "react";
import SkillBadge from "./SkillBadge";

const ProfileCard = ({ name, title, bio, skills, images }) => {
  const [dark, setDark] = useState(false);
  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  return (
 <div className={`card shadow-lg border-0 ${dark ? "bg-dark text-light" : ""}`}>

  <div className="position-relative">
    <img 
      src={images[index]} 
      className="card-img-top"
      style={{ height: "260px", objectFit: "cover" }}
      alt="profile"
    />

    <span className="badge bg-dark position-absolute top-0 end-0 m-2">
      👤 Profile
    </span>
  </div>

      <div className="card-body text-center">
        <h4 className="card-title">{name}</h4>
        <h6 className="text-muted">{title}</h6>
        <p className="card-text">{bio}</p>

        <div className="mb-3">
          {skills.map((skill, i) => (
            <SkillBadge key={i} skill={skill} />
          ))}
        </div>

        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <button className="btn btn-outline-primary btn-sm" onClick={() => setDark(!dark)}>
            🌙 Theme
          </button>

          <button className="btn btn-outline-success btn-sm" onClick={nextImage}>
            🔄 Photo
          </button>

          <button className="btn btn-outline-warning btn-sm" onClick={() => alert("Hello Ravi!")}>
            ⚠ Alert
          </button>
        </div>

        <hr />

        <button className="btn btn-danger w-100" onClick={() => setLikes(likes + 1)}>
          ❤️ Like ({likes})
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
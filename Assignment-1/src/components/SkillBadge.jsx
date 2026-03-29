import React from "react";

const SkillBadge = ({ skill }) => {
  return (
    <span className="badge bg-primary me-1 mb-1">
      {skill}
    </span>
  );
};

export default SkillBadge;
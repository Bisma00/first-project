import React from "react";
import "./single.css";
const Single = ({ file, icon, title, heading }) => {
  return (
    <div className="single-main">
      <div className="single-card">
        <img src={file} />
      </div>
      <div>
        <div className="single-heading-icon">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>{heading}</span>
            <span>{icon}</span>
          </div>

          <p style={{ textAlign: "right" }}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Single;

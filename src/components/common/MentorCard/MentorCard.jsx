import React from "react";
import "./MentorCard.css"
import { Link } from "react-router-dom";

export default function MentorCard({ imgsrc, alt, postion, link }) {
  return (
    <>
      <div className="card">
        <img src={imgsrc} alt={alt} />
        <div className="card-content">
          <h2>{alt}</h2>
          <p>{postion}</p>
          <a href={link} target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
}

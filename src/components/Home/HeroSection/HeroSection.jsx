import React from "react";
import "./HeroSection.css";
import HeroSectionCarousel from "./HeroSectionCarousel/HeroSectionCarousel";
import AlumniGallery from "../../../data/AlumniGallery";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section-content">
        <div className="hero-section-text">
          <div className="hero-section-text-1">IIIT NAYA RAIPUR</div>
          <div className="hero-section-text-2">ALUMNI ASSOCIATION</div>
        </div>
      </div>
      <HeroSectionCarousel alumniData={AlumniGallery} />
      <div className="explore-container">
        <div className="explore-text">EXPLORE</div>
        <svg width="200" height="90" viewBox="0 0 446 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.455 8.42102C17.499 8.42102 -2.18308 43.3466 14.368 70.6825L36.5587 107.333C43.9906 119.608 57.2966 127.106 71.6458 127.106H375.613C390.152 127.106 403.604 119.41 410.972 106.877L432.52 70.2266C448.596 42.883 428.88 8.42102 397.161 8.42102H49.455Z" fill="#06054D" stroke="white" strokeWidth="15.0234"/>
        </svg>
      </div>
    </div>
  );
}

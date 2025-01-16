import React from "react";
import bg from "../../../assets/Images/Bg/home_sec1.png";
import "./MotoSection.css";

export default function MotoSection() {
  return (
    <div className="moto-section">
      <div className="moto-section-img">
        <img src={bg} alt="Moto Background" />
        <div className="overlay-img-moto">
          <div className="moto-text">
            <div>CONNECTING MINDS</div>
            <div>EMPOWERING FUTURES</div>
            <div className="moto-text-button">
              <button>CONTRIBUTE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

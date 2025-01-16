import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HeroSectionCarousel.css";

export default function HeroSectionCarousel({ alumniData }) {
    const settings = {
        dots: true,
        infinite: true,
        easing: "linear",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed:2500,
    };

    return (
        <div className="hero-section-carousel">
            <Slider {...settings}>
                {alumniData.map((alumnus,index) => (
                    <div key={index} className="slider-container">
                        <div
                            className="slider-contain"
                            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                            <div className="slider-left">
                                <img src={alumnus.img} alt={`${alumnus.name}`} className="slider-img" />
                            </div>
                            <div className="slider-right">
                                <h2 className="slider-name">{alumnus.name}</h2>
                                <h3 className="slider-graduate">{alumnus.graduate}</h3>
                                <p className="slider-desc">{alumnus.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

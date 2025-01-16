import React from "react"
import HeroSection from "../../components/Home/HeroSection/HeroSection"
import HeroSectionCarousel from "../../components/Home/HeroSection/HeroSectionCarousel/HeroSectionCarousel"
import MotoSection from "../../components/Home/MotoSection/MotoSection"
import OurMission from "../../components/Home/OurMission/OurMission"

export default function Home(){
    return(
        <>
        <HeroSection/>
        <OurMission/>
        <MotoSection/>
        </>
    )
}
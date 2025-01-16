import React from "react"
import "./MissionCards.css"
import { Button } from "@mui/material"
import AlumniCitySVG from "../../../../assets/SVG/MissionCards/AlumniCity"
import AlumniProfileSVG from "../../../../assets/SVG/MissionCards/AlumniProfile"
import AlumniDirectorySVG from "../../../../assets/SVG/MissionCards/AlumniDirectory"
import AlumniBatchmatesSVG from "../../../../assets/SVG/MissionCards/AlumniBatchmates"

export default function MissionCards(props){
    
    return(
        <div className="our-mission-cards">
           <div className="mission-cards-head-container">
           {props.svg==="city" && <AlumniCitySVG/>}
           {props.svg==="batchmates" && <AlumniBatchmatesSVG/>}
           {props.svg==="directory" && <AlumniDirectorySVG/>}
           {props.svg==="profile" && <AlumniProfileSVG/>}
           <div className="mission-heading">
            {props.heading}
           </div>
           </div>
           <div className="mission-card-desc">
            {props.desc}
           </div>
           <Button sx={{
            marginTop:"auto",
            backgroundColor: "#06054D",
            color:"white",
            fontFamily: "alumni-para",
           }} className="mission-card-button">{props.buttonText}</Button>
        </div>
    )
}
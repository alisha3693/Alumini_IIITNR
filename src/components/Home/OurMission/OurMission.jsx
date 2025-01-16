import React from "react"
import "./OurMission.css"
import MissionCards from "./MissionCards/MissionCards"

export default function OurMission(){
    return(
        <div className="our-mission">
            <div className="our-mission-heading">
                OUR MISSION
            </div>
            <div className="our-mission-desc">
            The IIIT-NR Alumni Network is committed to fostering a lifelong bond between the institute and its graduates. Our mission is to build a vibrant and engaged alumni community that not only reflects the values and excellence of the International Institute of Information Technology, Naya Raipur (IIIT-NR) but also contributes to the personal and professional growth of its members.
            </div>
            <div className="mission-card-container">
                <MissionCards 
                svg="city"
                heading="Alumni in your city"
                desc="Find Alumni living in your city and connect with them"
                buttonText="Alumni in My City"
                />
                <MissionCards 
                svg="batchmates"
                heading="Your Batchmates"
                desc="View our exclusive batchmates directory"
                buttonText="My Batchmates"
                />
                <MissionCards 
                svg="directory"
                heading="Alumni Directory"
                desc="Explore complete alumni directory & connect with your interest"
                buttonText="View Directory"
                />
                <MissionCards 
                svg="profile"
                heading="Your Alumni Profile"
                desc="Create and complete your alumni profile"
                buttonText="My Profile"
                />
            </div>
        </div>
    )
}
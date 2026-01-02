import CoreValuesSection from "../components/About/coreValues";
import MissionVisionSection from "../components/About/missionVision";
import OurTeam from "../components/About/OurTeam";
import WhoWeAre from "../components/About/WhoWeAre";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <>
            <Navbar/>
            <WhoWeAre/>
            <MissionVisionSection/>
            <CoreValuesSection/>
            <OurTeam/>
        </>
    )
}
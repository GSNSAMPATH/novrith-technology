import CoreValuesSection from "../components/About/coreValues";
import MissionVisionSection from "../components/About/missionVision";
import OurTeam from "../components/About/OurTeam";
import WhoWeAre from "../components/About/WhoWeAre";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Novrith Technology, our mission, vision, and the team building intelligent digital solutions for the future.",
  keywords: [
    "About Novrith Technology",
    "Software company Sri Lanka",
    "Tech startup Sri Lanka",
    "Our mission and vision",
  ],
};


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
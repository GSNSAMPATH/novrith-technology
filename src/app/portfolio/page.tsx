import Navbar from "../components/Navbar"
import CaseStudies from "../components/Portforlio/CaseStudies"
import PortfolioInfo from "../components/Portforlio/info"

export const metadata = {
  title: "Our Portfolio",
  description:
    "Explore projects developed by Novrith Technology including web platforms, mobile apps, startups, and business systems.",
  keywords: [
    "Software project portfolio",
    "Web app portfolio",
    "Mobile app case studies",
    "Sri Lanka software projects",
  ],
};


export default function Portfolio() {
    return (
        <>
            <Navbar />
            <PortfolioInfo />
            <CaseStudies />
        </>
    )
}
import Navbar from "../components/Navbar";
import ServicesBlocks from "../components/Service/ServicesBlocks";
import Whatareservice from "../components/Service/Whatareservice";

export const metadata = {
  title: "Our Services",
  description:
    "Explore our web development, mobile app development, AI systems, IoT solutions, and advanced business software services.",
  keywords: [
    "Web development services Sri Lanka",
    "Mobile app development services",
    "AI and IoT solutions",
    "Custom software services",
  ],
};


export default function Service() {
    return (
            <>
            <Navbar />
            <Whatareservice />
            <ServicesBlocks />
            </>
    )
}
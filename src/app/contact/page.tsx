import ContactSection from "../components/Contact/ContactSection"
import Contctinfo from "../components/Contact/Contctinfo";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Novrith Technology for web development, mobile apps, AI systems, and custom software solutions.",
  keywords: [
    "Contact software company Sri Lanka",
    "Hire web developers Sri Lanka",
    "Software development inquiry",
  ],
};


export default function Contact() {
    return (
        <>
            <Navbar />
            <Contctinfo />
            <ContactSection />
        </>
    )
}
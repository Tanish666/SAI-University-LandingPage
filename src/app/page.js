import HeroSection from "./conponents/heroSection";
import Footer from "./conponents/footer";
import Navbar from "./conponents/navbar";
import Section2 from "./conponents/section2";
import Section3 from "./conponents/section3";
import Section4 from "./conponents/section4";
import Section5 from "./conponents/section5";
import Section6 from "./conponents/section6";
import Section7 from "./conponents/section7";
import Section8 from "./conponents/section8";
import Faq from "./conponents/faq";
export default function Home() {
  const primaryBlue = "#004ea2";

  return (
    <div className="container-fluid p-0" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Lead section */}
      <Section2 />
      {/* lead 2 section */}
      <Section3 />
      {/*explore our schools section */}
      <Section4 />
      {/* life at SAI University section marquee*/}
      <Section5 />
      {/* Student Life, Internships & Career Pathways section */}
      <Section6 />
      {/* Innovation , Inqury , Impact section */}
      <Section7 />
      {/* youtube videos section */}
      <Section8 />
      {/* faq section */}
      <Faq />
      {/* Footer */}
      <Footer />
    </div>
  );
}

import HeroHome from "./components/HomeComps/HeroHome";
import Highlights2 from "./components/HomeComps/Highlights2";
import Navbar from "./components/LayoutComps/Navbar";
import Mission from "./components/HomeComps/Mission";
import Explanation from "./components/HomeComps/Explanation";
import Footer from "./components/LayoutComps/Footer";
import ImpactDashboard from "./components/HomeComps/ImpactDashboard";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroHome></HeroHome>
      <Mission />
      <Highlights2 />
      <ImpactDashboard />
      <Explanation />
      <Footer />
    </div>
  );
}

import Community from "../../components/Community";
import Introduce from "../../components/Introduce";
import Network from "../../components/Networking";
import Features from "../../components/Features";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Event from "../../components/Event";
import Sponsor from "../../components/Sponsor";
import UpComing from "../../components/Upcoming";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen max-w-screen overflow-hidden relative bg-neutral">
      <Header />
      <Introduce />
      <Features />
      <Network />
      <Sponsor />
      <UpComing />
      <Community />
      <Event />
      <Footer />
    </div>
  );
};

export default Home;

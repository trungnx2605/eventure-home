import Introduce from "../../components/introduce";
import Network from "../../components/networking";
import Features from "../../components/features";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import Event from "../../components/event";
import Sponsor from "../../components/sponsor";
// import UpComing from "../../components/upcoming";
// import Community from "../../components/community";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen max-w-screen overflow-hidden relative bg-neutral">
      <Header />
      <Introduce />
      <Features />
      <Network />
      <Sponsor />
      {/* <UpComing /> */}
      {/* <Community /> */}
      <Event />
      <Footer />
    </div>
  );
};

export default Home;

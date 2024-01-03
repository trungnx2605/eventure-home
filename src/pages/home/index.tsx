// import Introduce from "../../components/introduce";
// import Network from "../../components/networking";
// import Features from "../../components/features";
// import Footer from "../../layouts/footer";
// import Header from "../../layouts/header";
// import Event from "../../components/event";
// import Sponsor from "../../components/sponsor";
import React from "react";
// import UpComing from "../../components/upcoming";
// import Community from "../../components/community";

const Header = React.lazy(() => import("../../layouts/header"));

const Introduce = React.lazy(() => import("../../components/introduce"));

const Features = React.lazy(() => import("../../components/features"));

const Network = React.lazy(() => import("../../components/networking"));

const Sponsor = React.lazy(() => import("../../components/sponsor"));

const Event = React.lazy(() => import("../../components/event"));

const Footer = React.lazy(() => import("../../layouts/footer"));

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

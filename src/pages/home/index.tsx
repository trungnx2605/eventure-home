import Introduce from "../../components/Introduce";
import Network from "../../components/Networking";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-neutral">
      <Header />
      <Introduce />
      <Network />
      <Footer />
    </div>
  );
};

export default Home;

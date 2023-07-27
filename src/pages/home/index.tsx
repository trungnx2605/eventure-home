import Introduce from "../../components/introduce";
import Network from "../../components/network";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

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

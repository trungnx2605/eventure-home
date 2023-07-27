import Community from "../../components/Community";
import Introduce from "../../components/Introduce";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-neutral">
      <Header />
      <Introduce />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;

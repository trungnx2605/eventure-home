import Feater from "../../components/Features";
import Introduce from "../../components/Introduce";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen max-w-screen overflow-hidden relative bg-neutral">
      <Header />
      <Introduce />
      <Feater />
      <Footer />
    </div>
  );
};

export default Home;

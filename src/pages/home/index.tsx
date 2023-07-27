import Feater from "../../components/features";
import Introduce from "../../components/introduce";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-neutral">
      <Header />
      <Introduce />
      <Feater />
      <Footer />
    </div>
  );
};

export default Home;

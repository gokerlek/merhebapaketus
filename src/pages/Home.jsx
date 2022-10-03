import { Welcome, WhyPaketus, FirstThreeMonths } from "../components/index.js";

const Home = () => {
  return (
    <div className="w-full h-fit">
      <Welcome />
      <FirstThreeMonths />
      <WhyPaketus />
    </div>
  );
};

export default Home;

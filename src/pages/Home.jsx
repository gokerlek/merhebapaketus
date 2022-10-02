import { Welcome, WhyPaketus, FirstThreeMonths } from "../components/index.js";

const Home = () => {
  return (
    <div className="w-full h-fit">
      <Welcome />
      <div>
        <FirstThreeMonths />
        <WhyPaketus />
      </div>
    </div>
  );
};

export default Home;

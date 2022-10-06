import {
  Welcome,
  WhyPaketus,
  FirstThreeMonths,
  Support,
} from "../components/index.js";

const Home = () => {
  return (
    <div className="w-full h-fit">
      <Welcome />
      <FirstThreeMonths />
      <WhyPaketus />
      <Support />
    </div>
  );
};

export default Home;

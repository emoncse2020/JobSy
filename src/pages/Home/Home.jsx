import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mb-5">
        <HotJobs></HotJobs>
      </div>
    </div>
  );
};

export default Home;

import { delay } from "motion";
import { anticipate, backInOut, motion } from "motion/react";
import team1 from "../../assets/group1.jpg";
import team2 from "../../assets/group2.jpg";

const Home = () => {
  return (
    <div>
      <section className="">
        <div className="container flex flex-col  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm   lg:text-left">
            <motion.h1
              animate={{ x: [0, 50, 0] }}
              transition={{
                delay: 5,
                duration: 60,
                repeat: Infinity,
                ease: anticipate,
              }}
              className="text-3xl font-bold leading-none sm:text-5xl"
            >
              Find Your{" "}
              <span className="text-[#2563EB] ">
                Dream <span className="text-[#b91c1ccc]">J</span>ob
              </span>{" "}
              Today
            </motion.h1>

            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Explore thousands of opportunities and connect with top companies
              <br className="hidden md:inline lg:hidden" />
              to take your career to the next level.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href="#_"
                class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span class="relative">Brows Jobs</span>
              </a>

              <a
                href="#_"
                class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span class="relative">Post a Job</span>
              </a>
            </div>
          </div>
          <div className="flex items-center w-1/2  justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <div className="flex">
              <motion.img
                animate={{
                  y: [-100, 100, -100],
                }}
                transition={{
                  duration: 10,
                  ease: "anticipate",
                  repeat: Infinity,
                }}
                className="max-w-sm  border-b-8 border-blue-400 shadow-2xl border-l-8 rounded-br-[50px] rounded-t-[50px]"
                src={team1}
                alt=""
              />
              <motion.img
                animate={{
                  x: [-100, -150, -100],
                }}
                transition={{
                  duration: 10,
                  delay: 5,
                  ease: "anticipate",
                  repeat: Infinity,
                }}
                className="max-w-[450px] border-b-8 border-l-8 rounded-br-[50px] rounded-t-[50px]"
                src={team1}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

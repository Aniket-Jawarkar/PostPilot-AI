import React from "react";
import Header from "../Components/Header";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="flex w-full h-[620px] bg-neutral-900 text-white  bg-[linear-gradient(to_bottom,#111111_0%,#111111_60%,#1E3FFB_75%,#1E90FF_85%,#45B897_100%)]">
        <div className="w-1/2 font-bold flex flex-col items-start justify-center pl-23">
          <h2 className="text-4xl  tracking-wide mb-2">
            Your AI Creates Social Posts
          </h2>

          <h1 className="text-5xl pb-4 tracking-wide bg-gradient-to-r from-blue-500 via-sky-400 via-lime-300 to-green-500 bg-clip-text text-transparent mb-5 ">
            That Actually Work
          </h1>
          <p>Backed by smart AI and a simple workflow, </p>
          <p> PostPilot helps you generate scroll-stopping content,</p>
          <p>save hours every week, and grow your brand with ease.</p>

          <div className="flex justify-center  ">
            <button className="bg-[#3BD85E] px-7 py-3 mt-10 text-l rounded-lg hover:bg-[#34c851] transition">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-1/2  flex items-center justify-center">
          <div className="bg-black w-[500px] h-[500px] flex items-center justify-center ">
            Vedio Demo
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] h-[525px] -mt-[60px] mx-auto flex bg-white shadow-2xl rounded-xl">
        <div className="bg-white w-[350px] h-[150px] flex flex-col items-start pl-15 justify-center text-2xl rounded-xl pb-10">
          <h1>What would you like to</h1>
          <h1>do with AAAAAAAAA?</h1>
        </div>

        <div className="bg-white w-[1050px] h-[150px] rounded-xl flex items-center justify-center px-6  pb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              className="px-5 py-2 rounded-full border border-blue-600 bg-white text-blue-600 font-medium
                   transform transition duration-150 hover:scale-105 hover:bg-blue-600 hover:text-white
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
            >
              Create posts
            </button>

            <button
              className="px-5 py-2 rounded-full border border-blue-600 bg-white text-blue-600 font-medium
                   transform transition duration-150 hover:scale-105 hover:bg-blue-600 hover:text-white
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
            >
              Plan content
            </button>

            <button
              className="px-5 py-2 rounded-full border border-blue-600 bg-white text-blue-600 font-medium
                   transform transition duration-150 hover:scale-105 hover:bg-blue-600 hover:text-white
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
            >
              Analyze results
            </button>

            <button
              className="px-5 py-2 rounded-full border border-blue-600 bg-white text-blue-600 font-medium
                   transform transition duration-150 hover:scale-105 hover:bg-blue-600 hover:text-white
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
            >
              Grow followers
            </button>

            <button
              className="px-5 py-2 rounded-full border border-blue-600 bg-white text-blue-600 font-medium
                   transform transition duration-150 hover:scale-105 hover:bg-blue-600 hover:text-white
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
            >
              Automate publishing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

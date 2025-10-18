import React from "react";
import Header from "../Components/Header";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden h-screen overflow-y-auto">
      <Header />

      {/* Hero */}
      <div
        className="flex w-full h-[620px] bg-neutral-900 text-white
                   bg-[linear-gradient(to_bottom,#111111_0%,#111111_60%,#1E3FFB_75%,#1E90FF_85%,#45B897_100%)]"
      >
        {/* Left side */}
        <div className="w-1/2 font-bold flex flex-col items-start justify-center pl-16 space-y-3">
          <h2 className="text-4xl tracking-wide mb-1">
            Your AI Creates Social Posts
          </h2>

          <h1
            className="text-5xl pb-2 tracking-wide font-bold
                       bg-gradient-to-r from-blue-500 via-sky-400 via-lime-300 to-green-500
                       bg-clip-text text-transparent"
          >
            That Actually Works
          </h1>

          <p>Backed by smart AI and a simple workflow,</p>
          <p>PostPilot helps you generate scroll-stopping content,</p>
          <p>save hours every week, and grow your brand with ease.</p>

          <div className="flex">
            <button className="bg-[#3BD85E] px-7 py-3 mt-6 text-lg rounded-lg hover:bg-[#34c851] transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-black w-[80%] max-w-[500px] h-[400px] flex items-center justify-center rounded-3xl shadow-2xl">
            Video Demo
          </div>
        </div>
      </div>

      {/* Card row (white card with buttons) */}
      <div className="max-w-[1400px] h-[525px] -mt-[60px] mx-auto flex bg-white shadow-2xl rounded-xl">
        {/* Left small card */}
        <div className="bg-white w-[350px] h-[150px] flex flex-col items-start pl-10 justify-center text-2xl rounded-xl">
          <h1>What would you like to</h1>
          <h1>do with AAAAAAAAA?</h1>
        </div>

        {/* Right buttons area */}
        <div className="bg-white w-[1050px] h-[150px] rounded-xl flex items-center justify-center px-6">
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
      <div className="mt-8 md:-mt-[380px] ml-25 max-w-[900px] bg-[#EAF6F7] h-[350px] rounded-3xl shadow-2xl relative z-10 flex items-center group">
        <div className="flex w-full items-center gap-6 px-6">
          <div className="flex-1 min-w-0 mb-50 pl-6 relative">
            <h3 className="text-2xl font-semibold mb-2 ">
              Bring your ideas to life in seconds
            </h3>

            <div className="mt-6 absolute left-0 top-[56px] w-full opacity-0 pointer-events-none transition-opacity duration-450 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
              <p className="text-sm text-gray-700 mb-4">
                Turn your thoughts or photos into scroll-stopping social media
                posts with AI-crafted captions, hashtags, and visuals that match
                your brand voice.
              </p>
              <ul className="list-disc list-inside text-gray-800 space-y-3">
                <li>Captions</li>
                <li>Hashtags</li>
                <li>Visuals</li>
              </ul>
            </div>
          </div>

          <div className="flex-none w-[450px] h-[350px] rounded-tr-2xl rounded-br-2xl relative overflow-hidden z-20 group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
              alt="Preview"
              className="absolute left-0 top-0 w-full h-[110%] object-cover transform translate-y-[10%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white text-lg font-medium">
                Preview Area
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

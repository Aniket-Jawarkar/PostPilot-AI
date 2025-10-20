import { useState } from "react";

const FeatureSection = () => {
  const [activeButton, setActiveButton] = useState("Create posts");

  const buttons = [
    "Create posts",
    "Plan content",
    "Analyze results",
    "Grow followers",
    "Automate publishing",
  ];

  const featureData = {
    "Create posts": {
      left: {
        title: "Bring your ideas to life in seconds",
        desc:
          "Turn your thoughts or photos into scroll-stopping social media posts with AI-crafted captions, hashtags, and visuals that match your brand voice.",
        bullets: ["Captions", "Hashtags", "Visuals"],
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
      },
      right: {
        title: "Turn ideas into scroll-stopping posts",
        desc:
          "Upload a photo or write a short prompt and get ready-to-post content in seconds.",
        bullets: ["Brand tone", "Image suggestions", "AI hooks"],
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      },
    },
    "Plan content": {
      left: {
        title: "Stay consistent without the chaos",
        desc:
          "Organize posts in a visual calendar and schedule them across platforms.",
        bullets: ["Calendar view", "Drag & drop", "Posting reminders"],
        img: "https://images.unsplash.com/photo-1602524814960-41f094c32a5e?q=80&w=1400&auto=format&fit=crop",
      },
      right: {
        title: "Plan ahead with ease",
        desc: "Create content workflows and manage multiple campaigns smoothly.",
        bullets: ["Content roadmap", "Weekly planning", "Time slots"],
        img: "https://images.unsplash.com/photo-1581091870622-5c3e5f74c63b?q=80&w=1400&auto=format&fit=crop",
      },
    },
    "Analyze results": {
      left: {
        title: "See what’s working instantly",
        desc:
          "Track engagement, reach, and growth metrics in real time to understand what drives results.",
        bullets: ["Engagement stats", "Reach", "Performance charts"],
        img: "https://images.unsplash.com/photo-1581093588401-5e2a6c4e2fbb?q=80&w=1400&auto=format&fit=crop",
      },
      right: {
        title: "Turn data into insights",
        desc:
          "Understand trends and optimize content based on audience behavior.",
        bullets: ["Top posts", "Hashtag performance", "Trend analysis"],
        img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1400&auto=format&fit=crop",
      },
    },
    "Grow followers": {
      left: {
        title: "Turn content into real audience growth",
        desc: "Reach the right people with posts crafted for engagement.",
        bullets: ["Target audience", "Trending hashtags", "Post suggestions"],
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1400&auto=format&fit=crop",
      },
      right: {
        title: "Build a loyal following",
        desc: "Leverage AI insights to create content your audience loves.",
        bullets: ["Follower growth", "Engagement tips", "Brand visibility"],
        img: "https://images.unsplash.com/photo-1611095564982-1d76d90f7364?q=80&w=1400&auto=format&fit=crop",
      },
    },
    "Automate publishing": {
      left: {
        title: "Let your content run on autopilot",
        desc:
          "Schedule posts once and let AI handle publishing across platforms.",
        bullets: ["Multi-platform", "Scheduled posts", "Consistency"],
        img: "https://images.unsplash.com/photo-1602524814960-41f094c32a5e?q=80&w=1400&auto=format&fit=crop",
      },
      right: {
        title: "Publish content automatically",
        desc:
          "Keep your feed active without manual posting while maintaining your brand voice.",
        bullets: ["Auto-scheduling", "Time optimization", "Platform management"],
        img: "https://images.unsplash.com/photo-1602524814960-41f094c32a5e?q=80&w=1400&auto=format&fit=crop",
      },
    },
  };

  const renderBox = (data, isLeft) => (
    <div
      className={`flex-1 min-w-0 ${
        isLeft ? "pl-6" : ""
      } relative pb-50 group flex items-center gap-6`}
    >
      <div className="flex-1 min-w-0 relative pb-50">
        <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
        <div className="mt-1 absolute left-0 top-[56px] w-full opacity-0 pointer-events-none transition-opacity duration-450 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
          <p className="text-sm text-gray-700 mb-4">{data.desc}</p>
          <ul className="list-disc list-inside text-gray-800 space-y-3">
            {data.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-none w-[450px] h-[350px] rounded-tr-2xl rounded-br-2xl relative overflow-hidden z-20">
        <img
          src={data.img}
          alt="Preview"
          className={`absolute left-0 ${
            isLeft ? "top-0" : "bottom-0"
          } w-full h-[110%] object-cover transform ${
            isLeft ? "translate-y-[10%] group-hover:translate-y-0" : "translate-y-0 group-hover:translate-y-[75%]"
          } transition-transform duration-300 ease-in-out`}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white text-lg font-medium"></span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Card row with buttons */}
      <div className="max-w-[1400px] h-[525px] -mt-[60px] mx-auto flex bg-white shadow-2xl rounded-xl">
        <div className="bg-white w-[350px] h-[150px] flex flex-col items-start pl-10 justify-center text-2xl rounded-xl">
          <h1>What would you like to</h1>
          <h1>do with AAAAAAAAA?</h1>
        </div>

        <div className="bg-white w-[1050px] h-[150px] rounded-xl flex items-center justify-center px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {buttons.map((btn) => (
              <button
                key={btn}
                onClick={() => setActiveButton(btn)}
                className={`px-5 py-2 rounded-full border border-blue-600 bg-white text-blue-600 font-medium
                         transform transition duration-150 hover:scale-105 hover:bg-blue-600 hover:text-white
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 ${
                           activeButton === btn ? "bg-blue-600 text-white" : ""
                         }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="mt-8 md:-mt-[380px] ml-25 max-w-[900px] bg-[#EAF6F7] h-[350px] rounded-3xl shadow-2xl relative z-10 flex items-center">
        {renderBox(featureData[activeButton].left, true)}
        <div className="right-box group absolute right-[-430px] top-1/2 transform -translate-y-1/2 w-[400px] h-[350px] bg-[#EAF6F7] rounded-xl shadow-md flex items-center justify-center z-30 pt-10">
          <div className="relative w-full h-full overflow-hidden rounded-xl">
            <div className="absolute top-4 left-6 right-6 z-30">
              <h4 className="text-lg font-semibold text-black">
                {featureData[activeButton].right.title}
              </h4>
            </div>

            <div className="absolute left-0 inset-0 z-10 flex pt-16 px-6 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none">
              <div className="pl-4 text-left">
                <h5 className="text-sm text-gray-700 mb-4">
                  {featureData[activeButton].right.desc}
                </h5>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  {featureData[activeButton].right.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <img
              src={featureData[activeButton].right.img}
              alt="Right Preview"
              className="absolute left-0 bottom-0 w-full h-[65%] object-cover transform translate-y-0 group-hover:translate-y-[75%] transition-transform duration-300 ease-in-out z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

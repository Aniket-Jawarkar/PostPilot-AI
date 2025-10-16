
import React from 'react'
import Header from '../Components/Header'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <div className="flex w-screen h-[620px] bg-neutral-900 text-white  bg-[linear-gradient(to_bottom,#111111_0%,#111111_60%,#1E3FFB_75%,#1E90FF_85%,#45B897_100%)]">

      
      <div className="w-1/2 font-bold 
  flex flex-col items-start justify-center pl-23">
             <h2 className='text-4xl  tracking-wide mb-2' >Your AI Creates Social Posts</h2>

             <h1 className='text-5xl pb-4 tracking-wide bg-gradient-to-r from-blue-500 via-sky-400 via-lime-300 to-green-500 bg-clip-text text-transparent mb-5 '>
               That Actually Work
             </h1>
             <p>Backed by smart AI and a simple workflow, </p>
             <p> PostPilot helps you generate scroll-stopping content,</p>
             <p>save hours every week, and grow your brand with ease.</p>


            <div className='flex justify-center  '>
              <button className='bg-[#3BD85E] px-7 py-3 mt-10 text-l rounded-lg hover:bg-[#34c851] transition'>
                Get Started
              </button>
            </div>

        </div>



  
        <div className="w-1/2  flex items-center justify-center">
          <div className='bg-black w-[500px] h-[500px] flex items-center justify-center '>
            Vedio Demo
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage

import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-black">Welcome to AI Chat Review</h1>
      <p className="text-xl mb-8 text-black">Experience the power of AI and earn rewards for your feedback!</p>
      <Link 
        to="/chat"
        className="bg-[#F7418F] hover:bg-[#FF8E9E] text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Start Chatting
      </Link>
    </div>
  )
}

export default Home


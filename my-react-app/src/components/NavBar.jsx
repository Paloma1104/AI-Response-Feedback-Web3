import React from "react"
import { Link } from "react-router-dom"

const Navbar = ({ walletAddress, balance, onConnect }) => {
  return (
    <nav className="bg-[#F1F8E8] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">AI Chat Review</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-gray-500 hover:text-[#50B498] transition duration-300">
                Home
              </Link>
              <Link to="/chat" className="py-4 px-2 text-gray-500 hover:text-[#50B498] transition duration-300">
                AI Chatbot
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {walletAddress ? (
              <div className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-[#95D2B3] hover:text-white transition duration-300">
                Balance: {Number.parseFloat(balance).toFixed(2)} APT
              </div>
            ) : (
              <button
                onClick={onConnect}
                className="py-2 px-2 font-medium text-white bg-[#50B498] rounded hover:[#BCEAD5] transition duration-300"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
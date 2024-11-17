import React from "react";
import { Lock } from "lucide-react";
import walletimage from "../images/walletimage.png";
import xer from "../images/xer.png";

const Solutions = () => {
  return (
    <div className="bg-black min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-4">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* M-Cademy Card */}
            <div className="md:col-span-3">
              <div className="bg-black backdrop-blur rounded-3xl p-4 md:p-6 h-[200px] border border-white">
                <h3 className="text-yellow-500 text-lg md:text-xl font-bold mb-2">M-Cademy</h3>
                <p className="text-zinc-400 text-sm">Creating opportunities for the future</p>
                <div className="mt-auto pt-8 md:pt-12">
                  <span className="text-zinc-600 bg-black/60 px-3 py-1 rounded-full text-xs">
                    coming soon
                  </span>
                </div>
              </div>
            </div>

            {/* M-Wallet Card */}
            <div className="md:col-span-4">
              <div className="bg-gray-900 backdrop-blur rounded-3xl p-4 md:p-6 h-[200px] border border-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-yellow-500 text-lg md:text-xl font-bold mb-2">M-Wallet</h3>
                  <p className="text-zinc-400 text-sm">Non-custodial wallet with AI assistant</p>
                  <div className="mt-auto pt-8 md:pt-12">
                    <span className="text-zinc-600 bg-black/60 px-3 py-1 rounded-full text-xs">
                      coming soon
                    </span>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 w-2/3 h-full opacity-30">
                  <img
                    src={walletimage}
                    alt="Wallet visualization"
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* M-Chain Card */}
            <div className="md:col-span-2">
              <div className="bg-black/40 backdrop-blur rounded-3xl p-4 md:p-6 h-[200px] border border-white">
                <h3 className="text-yellow-500 text-lg md:text-xl font-bold mb-2">M-Chain</h3>
                <p className="text-zinc-400 text-sm">Increased decentralization capacity</p>
                <div className="mt-auto pt-8 md:pt-12">
                  <div className="bg-black/60 p-2 rounded-full w-fit">
                    <Lock className="text-zinc-500" size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Crypto Management Card */}
            <div className="md:col-span-3">
              <div className="bg-black/80 rounded-3xl p-4 md:p-6 h-[400px] border border-white">
                <h3 className="text-yellow-500 text-lg md:text-xl font-bold mb-2">
                  AI Crypto<br />Management
                </h3>
                <p className="text-zinc-400 text-sm leading-tight">
                  AI Crypto Management is a unique solution that uses innovative AI algorithms...
                </p>
                <div className="mt-auto pt-6 md:pt-10">
                  <button className="bg-zinc-900 text-white px-4 py-1.5 rounded-full text-sm hover:bg-zinc-800 transition-colors">
                    EARN PROFIT
                  </button>
                </div>
                <img
                  src={xer}
                  alt="Wallet visualization"
                  className="mt-4 w-full"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-9 gap-4 md:-mt-20">
                {/* M-Found Card */}
                <div className="md:col-span-3">
                  <div className="bg-black/40 backdrop-blur rounded-3xl p-4 md:p-6 h-[100px] border border-white">
                    <h3 className="text-yellow-500 text-lg md:text-xl font-bold mb-2">M-Found</h3>
                    <p className="text-zinc-400 text-sm">Diversified investment fund</p>
                  </div>
                </div>

                {/* M-HealthTech Card */}
                <div className="md:col-span-6">
                  <div className="bg-black/40 backdrop-blur rounded-3xl p-4 md:p-6 h-[200px] border border-white">
                    <h3 className="text-yellow-500 text-lg md:text-xl font-bold mb-2">M-HealthTech</h3>
                    <p className="text-zinc-400 text-sm">Revolutionary AI-enabled products to improve health</p>
                    <div className="mt-auto pt-8 md:pt-12">
                      <span className="text-zinc-600 bg-black/60 px-3 py-1 rounded-full text-xs">
                        coming soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* M-Chain Trading Card */}
            <div className="md:col-span-3">
              <div className="bg-black/40 backdrop-blur rounded-3xl p-4 md:p-6 h-[200px] border border-white">
                <h3 className="text-yellow-500 text-lg md:text-xl font-bold mb-2">M-Chain</h3>
                <p className="text-zinc-400 text-sm">Intelligent trading platform</p>
                <div className="mt-auto pt-8 md:pt-12 text-right">
                  <span className="text-yellow-500 text-3xl md:text-4xl font-bold">M</span>
                </div>
              </div>
            </div>
          </div>

          {/* OUR SOLUTION Section */}
          <div className="mt-8 md:-mt-3">
            <h1 className="text-yellow-400 text-sm md:text-base">//OUR SOLUTION</h1>
            <h1 className="text-white text-xs md:text-sm font-bold leading-tight tracking-wide mt-2">
              REVOLUTIONIZING THE<br />
              FUTURE WITH <span className="text-yellow-500">AI-POWERED</span><br />
              <span className="text-yellow-500">INNOVATION</span> ACROSS FINANCE,<br />
              HEALTH, AND EDUCATION.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
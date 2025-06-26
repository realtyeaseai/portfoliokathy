import { useState } from "react";
import { Play, Download, ChevronDown, Volume2, Maximize } from "lucide-react";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
    // In a real implementation, this would control video playback
    console.log("Video play/pause toggled");
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #DC2626 0%, transparent 50%), radial-gradient(circle at 75% 75%, #F59E0B 0%, transparent 50%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Professional
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative digital solutions and creative excellence through immersive experiences
            </p>
          </div>

          {/* Video Showcase Container */}
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Video Container */}
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative group">
                {/* Video placeholder background */}
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=675"
                  alt="Professional business presentation setup"
                  className="w-full h-full object-cover"
                />

                {/* Video overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button
                    onClick={handleVideoPlay}
                    className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Play className="text-white w-8 h-8 ml-1" />
                  </button>
                </div>

                {/* Video gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Video Controls Bar */}
              <div className="bg-gray-900/90 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">Portfolio Showcase</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <button
              onClick={handleVideoPlay}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Get Virtual Card</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="text-white w-8 h-8 opacity-70" />
      </div>
    </section>
  );
}

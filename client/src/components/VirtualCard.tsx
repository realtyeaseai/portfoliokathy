import { useState } from "react";
import { UserPlus, Share2, Globe, Phone, MessageCircle, QrCode, Play, Volume2, Maximize } from "lucide-react";
import profileImage from "@assets/image_1750954503843.png";

export default function VirtualCard() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleAddContact = () => {
    // In a real app, this would trigger the device's contact app
    console.log("Add to contacts functionality");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'John Anderson - Virtual Business Card',
        text: 'Check out my virtual business card',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'website':
        window.open('https://johnanderson.com', '_blank');
        break;
      case 'phone':
        window.location.href = 'tel:+15551234567';
        break;
      case 'message':
        window.location.href = 'sms:+15551234567';
        break;
      default:
        console.log(`Quick action: ${action}`);
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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

        {/* Top Action Bar */}
        <div className="relative z-10 flex justify-between items-center p-6">
          <button
            onClick={handleAddContact}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <UserPlus className="w-4 h-4" />
            <span className="text-sm font-medium">Add to Contact</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <span className="text-white text-sm font-medium">DESIRED</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
          
          {/* Video Showcase */}
          <div className="max-w-2xl w-full mb-8">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative group">
                <img
                  src={profileImage}
                  alt="Professional showcase"
                  className="w-full h-full object-cover"
                />
                
                {/* Video overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handleVideoPlay}
                    className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Play className="text-white w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>

              {/* Video Controls Bar */}
              <div className="bg-gray-900/90 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">Professional Showcase</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">John Anderson</h1>
            <p className="text-red-400 font-medium text-lg mb-1">Founder & CEO</p>
            <p className="text-gray-300">Digital Innovations Inc.</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <button
              onClick={() => handleQuickAction("website")}
              className="flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="text-xs text-gray-300 font-medium">Website</span>
            </button>
            
            <button
              onClick={() => handleQuickAction("phone")}
              className="flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white w-6 h-6" />
              </div>
              <span className="text-xs text-gray-300 font-medium">Business Phone</span>
            </button>
            
            <button
              onClick={() => handleQuickAction("message")}
              className="flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <span className="text-xs text-gray-300 font-medium">Message me</span>
            </button>
            
            <button
              onClick={() => setShowQRModal(true)}
              className="flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <QrCode className="text-white w-6 h-6" />
              </div>
              <span className="text-xs text-gray-300 font-medium">QR Code</span>
            </button>
          </div>

        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center transform scale-100 transition-transform duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">QR Code</h3>
              <p className="text-gray-600">Scan to add to contacts</p>
            </div>

            {/* QR Code Placeholder */}
            <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <div className="w-40 h-40 bg-black opacity-10 rounded-lg flex items-center justify-center">
                <QrCode className="w-16 h-16 text-gray-400" />
              </div>
            </div>

            <button
              onClick={() => setShowQRModal(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

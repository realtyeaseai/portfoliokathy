import { useState } from "react";
import { UserPlus, Share2, Globe, Phone, MessageCircle, QrCode, Smartphone, Share, TrendingUp } from "lucide-react";

export default function VirtualCard() {
  const [showQRModal, setShowQRModal] = useState(false);

  const handleAddContact = () => {
    console.log("Add to contacts functionality");
  };

  const handleShare = () => {
    console.log("Share card functionality");
  };

  const handleQuickAction = (action: string) => {
    console.log(`Quick action: ${action}`);
  };

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Virtual Business <span className="text-red-600">Card</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of professional networking with interactive digital business cards
            </p>
          </div>

          {/* Interactive Business Card */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 80%, #DC2626 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 50%)",
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                {/* Profile Section */}
                <div className="text-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
                    alt="Professional headshot"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-600 shadow-lg"
                  />
                  <h3 className="text-2xl font-bold text-white">John Anderson</h3>
                  <p className="text-red-400 font-medium">Senior Creative Director</p>
                  <p className="text-gray-300 text-sm">Digital Innovations Inc.</p>
                </div>

                {/* Contact Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={handleAddContact}
                    className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <UserPlus className="w-5 h-5" />
                    <span className="text-sm font-medium">Add Contact</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>

                {/* Quick Actions Bar */}
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => handleQuickAction("website")}
                    className="flex flex-col items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                  >
                    <Globe className="text-amber-500 w-6 h-6 mb-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs text-gray-300">Website</span>
                  </button>
                  <button
                    onClick={() => handleQuickAction("phone")}
                    className="flex flex-col items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                  >
                    <Phone className="text-green-500 w-6 h-6 mb-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs text-gray-300">Call</span>
                  </button>
                  <button
                    onClick={() => handleQuickAction("message")}
                    className="flex flex-col items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                  >
                    <MessageCircle className="text-blue-500 w-6 h-6 mb-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs text-gray-300">Message</span>
                  </button>
                  <button
                    onClick={() => setShowQRModal(true)}
                    className="flex flex-col items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                  >
                    <QrCode className="text-purple-500 w-6 h-6 mb-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs text-gray-300">QR Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Optimized</h3>
              <p className="text-gray-600">
                Seamless experience across all devices with responsive design and touch interactions
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Sharing</h3>
              <p className="text-gray-600">
                Share your professional information instantly via QR codes, links, or direct contact integration
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics</h3>
              <p className="text-gray-600">
                Track engagement and interactions with detailed analytics and insights
              </p>
            </div>
          </div>
        </div>
      </section>

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

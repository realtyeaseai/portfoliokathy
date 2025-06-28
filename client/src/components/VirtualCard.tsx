import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import {
  UserPlus,
  Share2,
  Globe,
  Phone,
  MessageCircle,
  QrCode,
  Play,
  Volume2,
  Maximize,
  Moon,
  Sun,
  Calendar,
  Calculator,
  Download,
  Star,
  Clock,
  MessageSquare,
  Video,
  Languages,
  Users,
  Award,
  CheckCircle,
  X,
} from "lucide-react";

export default function VirtualCard() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isOnline, setIsOnline] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const queryClient = useQueryClient();

  // Query to get current views
  const { data: viewsData } = useQuery({
    queryKey: ['/api/views'],
    refetchOnWindowFocus: false,
  });

  // Mutation to increment views
  const incrementViewsMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest('POST', '/api/views/increment');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/views'] });
    },
  });

  const cardViews = (viewsData as { totalViews: number })?.totalViews || 0;

  // Sample data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      rating: 5,
      text: "Outstanding VA services! They handled our web development needs perfectly.",
    },
    {
      name: "Mike Chen",
      role: "Property Manager",
      rating: 5,
      text: "Reliable and professional. Helped streamline our property management processes.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Social Media Manager",
      rating: 5,
      text: "Creative and efficient social media management. Highly recommend!",
    },
  ];

  const services = [
    {
      name: "Web Development VA",
      price: "$25/hr",
      features: [
        "Frontend Development",
        "Backend Support",
        "Website Maintenance",
        "E-commerce Setup",
      ],
    },
    {
      name: "Social Media VA",
      price: "$20/hr",
      features: [
        "Content Creation",
        "Posting Schedule",
        "Community Management",
        "Analytics Reports",
      ],
    },
    {
      name: "Property Management VA",
      price: "$22/hr",
      features: [
        "Tenant Communication",
        "Listing Management",
        "Document Processing",
        "Maintenance Coordination",
      ],
    },
    {
      name: "General Service VA",
      price: "$18/hr",
      features: [
        "Administrative Tasks",
        "Customer Support",
        "Data Entry",
        "Research & Analysis",
      ],
    },
  ];

  const faqs = [
    {
      q: "What services do you provide?",
      a: "We offer Virtual Assistant services for Web Development, Social Media, Property Management, and general business support.",
    },
    {
      q: "How quickly can you start?",
      a: "We can typically start within 24-48 hours after initial consultation and agreement.",
    },
    {
      q: "What are your working hours?",
      a: "We work across multiple time zones and can accommodate most schedules. Available 7 days a week.",
    },
    {
      q: "How do you ensure quality?",
      a: "All our VAs are thoroughly vetted, trained, and we provide regular progress updates and quality checks.",
    },
  ];

  useEffect(() => {
    // Increment views when component mounts (page visit)
    incrementViewsMutation.mutate();
  }, []);

  const handleAddContact = () => {
    // In a real app, this would trigger the device's contact app
    console.log("Add to contacts functionality");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "RealtyEaseAI - Virtual Business Card",
        text: "Check out RealtyEaseAI's virtual business card - AI-Powered Real Estate Solutions",
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "website":
        window.open("https://realtyeaseai.com/", "_blank");
        break;
      case "phone":
        window.location.href = "tel:+15551234567";
        break;
      case "message":
        window.location.href = "sms:+15551234567";
        break;
      default:
        console.log(`Quick action: ${action}`);
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    const languages = ["EN", "ES", "FR", "DE"];
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    setCurrentLanguage(languages[nextIndex]);
  };

  const playAudioGreeting = () => {
    setIsAudioPlaying(!isAudioPlaying);
    // In real app, would play actual audio
    console.log("Playing audio greeting");
  };

  return (
    <>
      <div
        className={`min-h-screen transition-all duration-500 ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-purple-50"} relative overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: darkMode
                ? "radial-gradient(circle at 25% 25%, #DC2626 0%, transparent 50%), radial-gradient(circle at 75% 75%, #F59E0B 0%, transparent 50%)"
                : "radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)",
            }}
          ></div>
        </div>

        {/* Top Action Bar */}
        <div className="relative z-10 flex justify-between items-center p-6">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleAddContact}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <UserPlus className="w-4 h-4" />
              <span className="text-sm font-medium">Add to Contact</span>
            </button>

            {/* Live Status */}
            <div className="flex items-center space-x-2 bg-green-600/20 px-3 py-1 rounded-full">
              <div
                className={`w-2 h-2 rounded-full animate-pulse ${isOnline ? "bg-green-500" : "bg-gray-500"}`}
              ></div>
              <span
                className={`text-xs font-medium ${darkMode ? "text-green-400" : "text-green-700"}`}
              >
                {isOnline ? "Available Now" : "Offline"}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span
              className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              AVAILABLE NOW
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
            >
              <Languages className="w-3 h-3" />
              <span className="text-xs font-medium">{currentLanguage}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-white/10 hover:bg-white/20 text-yellow-400" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={handleShare}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>

        {/* Card Views Counter */}
        <div className="absolute top-20 right-6 z-10">
          <div
            className={`px-3 py-1 rounded-full ${darkMode ? "bg-gray-800/50 text-gray-300" : "bg-white/80 text-gray-700"} backdrop-blur-sm`}
          >
            <div className="flex items-center space-x-2">
              <Users className="w-3 h-3" />
              <span className="text-xs font-medium">
                {cardViews.toLocaleString()} views
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 pb-20">
          {/* Video Showcase */}
          <div className="max-w-2xl w-full mb-8 animate-fade-in">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              {/* Video Container */}
              <div
                className={`aspect-video flex items-center justify-center relative group ${darkMode ? "bg-gradient-to-br from-gray-700 to-gray-800" : "bg-gradient-to-br from-blue-100 to-purple-100"}`}
              >
                {/* Clean gradient background */}
                <div
                  className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-red-900/20 via-gray-800 to-amber-900/20" : "bg-gradient-to-br from-blue-500/20 via-purple-100 to-pink-500/20"}`}
                ></div>

                {/* Center play button */}
                <div className="relative z-10 flex items-center justify-center">
                  <button
                    onClick={handleVideoPlay}
                    className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl group-hover:shadow-red-500/25"
                  >
                    <Play className="text-white w-8 h-8 ml-1" />
                  </button>
                </div>

                {/* Audio greeting button */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={playAudioGreeting}
                    className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${isAudioPlaying ? "bg-green-600" : "bg-gray-600/80"} backdrop-blur-sm`}
                  >
                    <Volume2
                      className={`w-4 h-4 text-white ${isAudioPlaying ? "animate-pulse" : ""}`}
                    />
                  </button>
                </div>

                {/* Subtle overlay text */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p
                    className={`text-sm font-medium ${darkMode ? "text-white/80" : "text-gray-700/80"}`}
                  >
                    Professional Introduction Video
                  </p>
                </div>
              </div>

              {/* Video Controls Bar */}
              <div
                className={`px-4 py-3 flex items-center justify-between ${darkMode ? "bg-gray-900/90" : "bg-gray-100/90"} backdrop-blur-sm`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span
                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Professional Showcase
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    className={`transition-colors duration-300 ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    className={`transition-colors duration-300 ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center mb-8 animate-slide-up">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://realtyeaseai.com/favicon.ico" 
                alt="RealtyEaseAI Logo" 
                className="w-16 h-16 mr-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div>
                <h1
                  className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  RealtyEaseAI
                </h1>
                <p className="text-red-400 font-medium text-lg">
                  AI-Powered Real Estate Solutions
                </p>
              </div>
            </div>
            <p
              className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Streamlining Property Management & Real Estate Operations
            </p>

            {/* Service Description */}
            <div
              className={`backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border transform hover:scale-105 transition-all duration-300 ${darkMode ? "bg-gray-800/30 border-gray-700/50" : "bg-white/80 border-gray-200/50"}`}
            >
              <p
                className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                <span
                  className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  We provide Virtual Assistant
                </span>{" "}
                for any work you require - whether it's VA for{" "}
                <span className="text-red-400">Web Development</span>,
                <span className="text-blue-400"> Social Media</span>,
                <span className="text-green-400"> Property Management</span>, or
                <span className="text-amber-400"> Service Providers</span>
              </p>
            </div>

            {/* Contact Information */}
            <div className={`backdrop-blur-sm rounded-xl p-4 max-w-lg mx-auto border mt-4 ${darkMode ? "bg-gray-800/20 border-gray-700/30" : "bg-white/60 border-gray-200/30"}`}>
              <h3 className={`text-lg font-semibold mb-3 text-center ${darkMode ? "text-white" : "text-gray-900"}`}>
                Contact Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <Phone className="w-4 h-4 text-green-500" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <MessageSquare className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">WhatsApp Available</span>
                </div>
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <Globe className="w-4 h-4 text-red-500" />
                  <span className="text-sm">realtyeaseai.com</span>
                </div>
                <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <MessageCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-4 mb-8 animate-scale-in">
            <button
              onClick={() => handleQuickAction("website")}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 group backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 ${darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/60 hover:bg-white/80"}`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span
                className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Website
              </span>
            </button>

            <button
              onClick={() => handleQuickAction("phone")}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 group backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 ${darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/60 hover:bg-white/80"}`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="text-white w-6 h-6" />
              </div>
              <span
                className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Call Now
              </span>
            </button>

            <button
              onClick={() => handleQuickAction("message")}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 group backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 ${darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/60 hover:bg-white/80"}`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageSquare className="text-white w-6 h-6" />
              </div>
              <span
                className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                WhatsApp
              </span>
            </button>

            <button
              onClick={() => setShowQRModal(true)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 group backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 ${darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/60 hover:bg-white/80"}`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <QrCode className="text-white w-6 h-6" />
              </div>
              <span
                className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                QR Code
              </span>
            </button>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <button
              onClick={() => setShowCalendar(true)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white shadow-lg`}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Book Meeting</span>
            </button>

            <button
              onClick={() => setShowCalculator(true)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"} text-white shadow-lg`}
            >
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-medium">Get Quote</span>
            </button>

            <button
              onClick={() => setShowServices(true)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"} text-white shadow-lg`}
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Services</span>
            </button>

            <button
              onClick={() => setShowTestimonials(true)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-amber-600 hover:bg-amber-700" : "bg-amber-500 hover:bg-amber-600"} text-white shadow-lg`}
            >
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Reviews</span>
            </button>
          </div>

          {/* Additional Features Row */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setShowFAQ(true)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`}
            >
              <MessageCircle className="w-3 h-3" />
              <span className="text-xs font-medium">FAQ</span>
            </button>

            <button
              onClick={() => window.open("https://realtyeaseai.com/", "_blank")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`}
            >
              <Globe className="w-3 h-3" />
              <span className="text-xs font-medium">Website</span>
            </button>

            <button
              onClick={() => window.open("https://meet.google.com", "_blank")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`}
            >
              <Video className="w-3 h-3" />
              <span className="text-xs font-medium">Video Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className={`rounded-2xl p-8 max-w-sm w-full text-center transform scale-100 transition-transform duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="mb-6">
              <h3
                className={`text-2xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                QR Code
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Scan to add to contacts
              </p>
            </div>

            <div
              className={`w-48 h-48 rounded-lg mx-auto mb-6 flex items-center justify-center ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
            >
              <div
                className={`w-40 h-40 rounded-lg flex items-center justify-center ${darkMode ? "bg-white opacity-20" : "bg-black opacity-10"}`}
              >
                <QrCode
                  className={`w-16 h-16 ${darkMode ? "text-gray-300" : "text-gray-400"}`}
                />
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

      {/* Calendar Booking Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className={`rounded-2xl p-8 max-w-md w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Book a Meeting
              </h3>
              <button
                onClick={() => setShowCalendar(false)}
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div
                className={`p-4 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${darkMode ? "border-gray-600 hover:border-blue-500 bg-gray-700/50" : "border-gray-300 hover:border-blue-500 bg-gray-50"}`}
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <p
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
                    >
                      Free Consultation
                    </p>
                    <p
                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      30 minutes • Free
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${darkMode ? "border-gray-600 hover:border-green-500 bg-gray-700/50" : "border-gray-300 hover:border-green-500 bg-gray-50"}`}
              >
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-500" />
                  <div>
                    <p
                      className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
                    >
                      Project Discussion
                    </p>
                    <p
                      className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      60 minutes • $50
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.open("https://calendly.com", "_blank")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Open Calendar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Price Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className={`rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Price Calculator
              </h3>
              <button
                onClick={() => setShowCalculator(false)}
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Service Type
                </label>
                <select
                  className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
                >
                  <option>Web Development VA - $25/hr</option>
                  <option>Social Media VA - $20/hr</option>
                  <option>Property Management VA - $22/hr</option>
                  <option>General Service VA - $18/hr</option>
                </select>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Hours per Week
                </label>
                <input
                  type="number"
                  placeholder="20"
                  className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Duration
                </label>
                <select
                  className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
                >
                  <option>1 Month</option>
                  <option>3 Months (5% discount)</option>
                  <option>6 Months (10% discount)</option>
                  <option>12 Months (15% discount)</option>
                </select>
              </div>

              <div
                className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Estimated Monthly Cost:
                  </span>
                  <span className="text-2xl font-bold text-green-500">
                    $2,000
                  </span>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Detailed Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Modal */}
      {showTestimonials && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className={`rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Client Reviews
              </h3>
              <button
                onClick={() => setShowTestimonials(false)}
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services Comparison Modal */}
      {showServices && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className={`rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Our Services
              </h3>
              <button
                onClick={() => setShowServices(false)}
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4
                      className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                    >
                      {service.name}
                    </h4>
                    <span className="text-2xl font-bold text-green-500">
                      {service.price}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span
                          className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Modal */}
      {showFAQ && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className={`rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Frequently Asked Questions
              </h3>
              <button
                onClick={() => setShowFAQ(false)}
                className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
                >
                  <h4
                    className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    {faq.q}
                  </h4>
                  <p
                    className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

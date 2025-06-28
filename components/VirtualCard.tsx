'use client'

import { useState, useEffect } from "react";
import { useQueryClient } from '@tanstack/react-query';
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
import Image from "next/image";
import Link from "next/link";

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
const [cardViews, setCardViews] = useState(0);

useEffect(() => {
  const currentViews = parseInt(localStorage.getItem("virtualCardViews") || "0", 10);
  const newViews = currentViews + 1;
  localStorage.setItem("virtualCardViews", newViews.toString());
  setCardViews(newViews);
}, []);


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

        {/* Top Action Bar with Logo and All Controls */}
        <div className="relative z-10 flex justify-between items-center p-6">
          {/* Left side - Action buttons */}
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

          {/* Center - Logo and Company Name */}
          <div className="flex items-center">
            <Image 
              src="https://realtyeaseai.com/favicon.ico" 
              alt="RealtyEaseAI Logo" 
              width={300}
              height={300}
              className="w-10 h-10 mr-3"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div>
              <h1
                className={`text-xl md:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                RealtyEaseAI
              </h1>
              <p className="text-red-400 font-medium text-xs">
                AI-Powered Real Estate Solutions
              </p>
            </div>
          </div>

          {/* Right side - Control buttons */}
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
        <div className="absolute top-32 right-6 z-10">
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
            <div className="mb-4">
              <h2
                className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Kathy Tiburcio
              </h2>
              <p className="text-red-400 font-medium text-lg">
                Founder & CEO
              </p>
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
            <div className={`backdrop-blur-sm rounded-xl p-4 max-w-lg mx-auto border mt-4 ${darkMode ? "bg-gray-800/20 border-gray-700/50" : "bg-white/60 border-gray-200/50"}`}>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Phone</span>
                  <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>+1 (555) 123-4567</p>
                </div>
                <div>
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Email</span>
                  <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>info@realtyeaseai.com</p>
                </div>
                <div>
                  <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Location</span>
                  <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Global</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
       <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
  {/* Visit Website */}
  <Link
    href="https://realtyeaseai.com/"
    target="_blank"
    rel="noopener noreferrer"
    passHref
  >
    <div className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
      <Globe className="w-5 h-5" />
      <span className="font-medium">Visit Website</span>
    </div>
  </Link>

  {/* Call Now */}
  <Link href="tel:+15551234567" passHref>
    <div className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
      <Phone className="w-5 h-5" />
      <span className="font-medium">Call Now</span>
    </div>
  </Link>

  {/* Message */}
  <Link href="sms:+15551234567" passHref>
    <div className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium">Message</span>
    </div>
  </Link>

  {/* QR Code Modal */}
  <button
    onClick={() => setShowQRModal(true)}
    className="flex items-center space-x-2 bg-orange-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    <QrCode className="w-5 h-5" />
    <span className="font-medium">QR Code</span>
  </button>
</div>

          {/* Enhanced Feature Tabs */}
          <div className="max-w-4xl w-full">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <button
                onClick={() => setShowServices(!showServices)}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${showServices ? "bg-blue-600 text-white" : darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              >
                <span className="font-medium">Services & Pricing</span>
              </button>
              <button
                onClick={() => setShowTestimonials(!showTestimonials)}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${showTestimonials ? "bg-blue-600 text-white" : darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              >
                <span className="font-medium">Testimonials</span>
              </button>
              <button
                onClick={() => setShowFAQ(!showFAQ)}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${showFAQ ? "bg-blue-600 text-white" : darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              >
                <span className="font-medium">FAQ</span>
              </button>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${showCalendar ? "bg-blue-600 text-white" : darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              >
                <Calendar className="w-4 h-4 inline mr-2" />
                <span className="font-medium">Schedule</span>
              </button>
              {/* <button
                onClick={() => setShowCalculator(!showCalculator)}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${showCalculator ? "bg-blue-600 text-white" : darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              >
                <Calculator className="w-4 h-4 inline mr-2" />
                <span className="font-medium">ROI Calculator</span>
              </button> */}
            </div>

            {/* Services Panel */}
           {showServices && (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
    <div className={`max-w-3xl w-full rounded-2xl p-6 relative ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <button
        onClick={() => setShowServices(false)}
        className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
      >
        <X className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-900"}`} />
      </button>
      <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Our Services & Pricing
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className={`p-4 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600" : "bg-white/60 border-gray-300"}`}>
            <div className="flex justify-between items-start mb-3">
              <h4 className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                {service.name}
              </h4>
              <span className="text-green-400 font-bold">{service.price}</span>
            </div>
            <ul className="space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx} className={`text-sm flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


            {/* Testimonials Panel */}
          {showTestimonials && (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
    <div className={`max-w-4xl w-full rounded-2xl p-6 relative ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      {/* Close Button */}
      <button
        onClick={() => setShowTestimonials(false)}
        className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
      >
        <X className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-900"}`} />
      </button>

      <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
        What Our Clients Say
      </h3>

      <div className="grid md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto pr-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`p-4 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600" : "bg-white/60 border-gray-300"}`}>
            <div className="flex items-center mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className={`text-sm mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              "{testimonial.text}"
            </p>
            <div>
              <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                {testimonial.name}
              </p>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


            {/* FAQ Panel */}
          {showFAQ && (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
    <div className={`max-w-2xl w-full rounded-2xl p-6 relative ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      {/* Close Button */}
      <button
        onClick={() => setShowFAQ(false)}
        className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
      >
        <X className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-900"}`} />
      </button>

      {/* Title */}
      <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Frequently Asked Questions
      </h3>

      {/* FAQ List */}
      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border transition-all ${darkMode ? "bg-gray-700/30 border-gray-600" : "bg-white/60 border-gray-300"}`}
          >
            <h4 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {faq.q}
            </h4>
            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

            {/* Calendar Panel */}
            {showCalendar && (
              <div className={`backdrop-blur-sm rounded-xl p-6 mb-6 border transition-all duration-500 ${darkMode ? "bg-gray-800/30 border-gray-700/50" : "bg-white/80 border-gray-200/50"}`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Schedule a Consultation
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Available Time Slots
                    </h4>
                    <div className="space-y-2">
                      {["9:00 AM - 10:00 AM", "11:00 AM - 12:00 PM", "2:00 PM - 3:00 PM", "4:00 PM - 5:00 PM"].map((time, index) => (
                        <button key={index} className={`w-full p-3 text-left rounded-lg border transition-all duration-300 hover:scale-105 ${darkMode ? "bg-gray-700/30 border-gray-600 text-gray-300 hover:bg-gray-600" : "bg-white/60 border-gray-300 text-gray-700 hover:bg-gray-100"}`}>
                          <Clock className="w-4 h-4 inline mr-2" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Contact Information
                    </h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600 text-white placeholder-gray-400" : "bg-white/60 border-gray-300 text-gray-900 placeholder-gray-500"}`}
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600 text-white placeholder-gray-400" : "bg-white/60 border-gray-300 text-gray-900 placeholder-gray-500"}`}
                      />
                      <select className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600 text-white" : "bg-white/60 border-gray-300 text-gray-900"}`}>
                        <option>Web Development VA</option>
                        <option>Social Media VA</option>
                        <option>Property Management VA</option>
                        <option>General Service VA</option>
                      </select>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Calculator Panel */}
            {showCalculator && (
              <div className={`backdrop-blur-sm rounded-xl p-6 mb-6 border transition-all duration-500 ${darkMode ? "bg-gray-800/30 border-gray-700/50" : "bg-white/80 border-gray-200/50"}`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  ROI Calculator
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Your Current Situation
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label className={`block text-sm mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          Current hourly rate you pay for similar work
                        </label>
                        <input
                          type="number"
                          placeholder="$35"
                          className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600 text-white placeholder-gray-400" : "bg-white/60 border-gray-300 text-gray-900 placeholder-gray-500"}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          Hours per week
                        </label>
                        <input
                          type="number"
                          placeholder="20"
                          className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600 text-white placeholder-gray-400" : "bg-white/60 border-gray-300 text-gray-900 placeholder-gray-500"}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          Service Type
                        </label>
                        <select className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600 text-white" : "bg-white/60 border-gray-300 text-gray-900"}`}>
                          <option>Web Development VA ($25/hr)</option>
                          <option>Social Media VA ($20/hr)</option>
                          <option>Property Management VA ($22/hr)</option>
                          <option>General Service VA ($18/hr)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Potential Savings
                    </h4>
                    <div className={`p-4 rounded-lg border ${darkMode ? "bg-gray-700/30 border-gray-600" : "bg-white/60 border-gray-300"}`}>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>Current weekly cost:</span>
                          <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>$700</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>With our VA:</span>
                          <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>$500</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between">
                            <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Weekly savings:</span>
                            <span className="font-bold text-green-400">$200</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Annual savings:</span>
                            <span className="font-bold text-green-400">$10,400</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-sm w-full rounded-2xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                Share QR Code
              </h3>
              <button
                onClick={() => setShowQRModal(false)}
                className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <X className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-900"}`} />
              </button>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg mb-4 inline-block">
               <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
  <Image
    src="/your-qr.png"
    alt="QR Code"
    width={150}
    height={150}
    className="mx-auto"
  />
</div>

              </div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Scan to visit our virtual business card
              </p>
              <button className="mt-4 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full mx-auto transition-all duration-300">
                <Download className="w-4 h-4" />
                <span>Download QR</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
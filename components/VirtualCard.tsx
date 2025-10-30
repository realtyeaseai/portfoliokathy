"use client";
import { useState, useEffect } from "react";
import {
  UserPlus,
  Share2,
  Globe,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Users,
  X,
  Star,
  Briefcase,
  Award,
  Target,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function VirtualCard() {
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [cardViews, setCardViews] = useState(0);

  useEffect(() => {
    const currentViews = parseInt(localStorage.getItem("virtualCardViews") || "0", 10);
    const newViews = currentViews + 1;
    localStorage.setItem("virtualCardViews", newViews.toString());
    setCardViews(newViews);
  }, []);

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

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and applications built to perfection"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media",
      description: "Engaging content and community management"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Property Management",
      description: "Streamlined operations for real estate professionals"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "General Services",
      description: "Administrative support and business operations"
    }
  ];

  const handleAddContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Tiburcio;Kathy;;;
FN:Kathy Tiburcio
TEL;TYPE=CELL:+1 (646) 712-6945
EMAIL:kathy.tiburcio@realtyeaseai.com
END:VCARD`.trim();

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kathy-Tiburcio.vcf';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "RealtyEaseAI - Virtual Business Card",
        text: "Check out RealtyEaseAI's virtual business card - AI-Powered Real Estate Solutions",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleAddContact}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm font-medium"
              >
                <UserPlus className="w-4 h-4" />
                <span>Save Contact</span>
              </button>

              <div className="flex items-center space-x-2 bg-emerald-500/20 px-3 py-2 rounded-lg border border-emerald-500/30">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs font-medium text-emerald-300">Available Now</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Logo */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img
                src="https://realtyeaseai.com/favicon.ico"
                alt="RealtyEaseAI"
                className="relative w-24 h-24 rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight">
            RealtyEaseAI
          </h1>
          <p className="text-xl md:text-2xl text-red-400 font-semibold mb-4">
            AI-Powered Real Estate Solutions
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Users className="w-4 h-4" />
            <span className="text-sm">{cardViews.toLocaleString()} profile views</span>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div>
                 <Image src="/kathy_poster.png" alt="Kathy Tiburcio" width={192} height={192} className="rounded-2xl object-cover" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-yellow-400 font-semibold">Founder & CEO</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Kathy Tiburcio
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Your Trusted Partner in Real Estate Excellence
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    Leadership
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                    Innovation
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                    Real Estate Expert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Our Virtual Assistant Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Get In Touch</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://realtyeaseai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
              >
                <Globe className="w-8 h-8 mb-3" />
                <span className="font-semibold">Visit Website</span>
              </a>

              <a
                href="tel:+16467126945"
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
              >
                <Phone className="w-8 h-8 mb-3" />
                <span className="font-semibold">Call Now</span>
                <span className="text-xs mt-1 opacity-80">+1 (646) 712-6945</span>
              </a>

              <a
                href="mailto:kathy.tiburcio@realtyeaseai.com"
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
              >
                <Mail className="w-8 h-8 mb-3" />
                <span className="font-semibold">Send Email</span>
                <span className="text-xs mt-1 opacity-80">Contact us</span>
              </a>

              <a
                href="sms:+16467126945"
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
              >
                <MessageCircle className="w-8 h-8 mb-3" />
                <span className="font-semibold">Text Message</span>
                <span className="text-xs mt-1 opacity-80">SMS available</span>
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Operating Globally</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="https://realtyeaseai.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg border border-white/20 text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            Services & Pricing
          </a>
          <button
            onClick={() => setShowTestimonials(true)}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg border border-white/20 text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            Client Testimonials
          </button>
          <button
            onClick={() => setShowFAQ(true)}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg border border-white/20 text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            FAQ
          </button>
          <a
            href="https://realtyeaseai.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule Meeting
          </a>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Why Choose RealtyEaseAI</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Expert Team</h4>
                <p className="text-gray-300 text-sm">Highly skilled VAs trained in industry best practices</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">24/7 Support</h4>
                <p className="text-gray-300 text-sm">Round-the-clock assistance across all time zones</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Proven Results</h4>
                <p className="text-gray-300 text-sm">Track record of successful client partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Modal */}
      {showTestimonials && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="max-w-5xl w-full bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Client Testimonials</h3>
              <button
                onClick={() => setShowTestimonials(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Modal */}
      {showFAQ && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
              <button
                onClick={() => setShowFAQ(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
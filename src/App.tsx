import React, { useState } from 'react';
import { 
  Bot, 
  Calendar, 
  Users, 
  Wrench, 
  Gamepad2, 
  Award, 
  MapPin, 
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Github,
  Heart,
  Zap,
  Cpu
} from 'lucide-react';

function App() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const linkItems = [
    {
      id: 'register',
      icon: Bot,
      title: 'GeekGirlCon 2025',
      description: 'Geek out at this year\'s convention',
      color: 'from-[#93cab0] to-[#66bcb8]',
      href:'https://geekgirlcon.com/'
    },
    {
      id: 'schedule',
      icon: Calendar,
      title: 'Event Schedule',
      description: 'View talks, demos, and robot competitions',
      color: 'from-[#66bcb8] to-[#217272]'
    },
    {
      id: 'speakers',
      icon: Users,
      title: 'Amazing Speakers',
      description: 'Meet our lineup of robotics pioneers',
      color: 'from-[#2d87c1] to-[#355170]'
    },
    {
      id: 'workshops',
      icon: Wrench,
      title: 'Hands-on Workshops',
      description: 'Build and program your own robots',
      color: 'from-[#d37444] to-[#c65058]'
    },
    {
      id: 'showcase',
      icon: Gamepad2,
      title: 'Robot Showcase',
      description: 'Experience cutting-edge robotics demos',
      color: 'from-[#32493b] to-[#217272]'
    },
    {
      id: 'sponsors',
      icon: Award,
      title: 'Our Sponsors',
      description: 'Thank you to our amazing tech partners',
      color: 'from-[#93cab0] to-[#32493b]'
    },
    {
      id: 'venue',
      icon: MapPin,
      title: 'Venue & Travel',
      description: 'Location details and travel information',
      color: 'from-[#355170] to-[#2d87c1]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#217272] via-[#355170] to-[#1b1c1e] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-pulse">
          <Cpu size={24} className="text-[#93cab0]" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Bot size={20} className="text-[#66bcb8]" />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse">
          <Zap size={18} className="text-[#d37444]" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce">
          <Wrench size={22} className="text-[#c65058]" />
        </div>
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-[#93cab0] to-[#66bcb8] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Bot size={36} className="text-[#1b1c1e]" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#d37444] to-[#c65058] rounded-full flex items-center justify-center animate-pulse">
              <Heart size={16} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#93cab0] to-[#66bcb8] bg-clip-text text-transparent">
            GeekGirlCon 2025
          </h1>
          
          <p className="text-gray-300 mb-2 text-lg">
            Celebrating women in technology, gaming, and geek culture
          </p>
          
          <p className="text-[#93cab0] font-medium">
            November 8 & 9, 2025 • Seattle, WA
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 mb-8">
          {linkItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                className={`w-full bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-[#93cab0]/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg group ${
                  isHovered === item.id ? 'shadow-2xl' : ''
                }`}
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => item.href && window.open(item.href, '_blank')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white group-hover:text-[#93cab0] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ExternalLink 
                    size={20} 
                    className="text-gray-400 group-hover:text-[#93cab0] transition-colors duration-300 transform group-hover:translate-x-1" 
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Social Media */}
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-4">Follow us on social media</p>
          <div className="flex justify-center space-x-4">
            {[
              { icon: Instagram, color: 'hover:bg-[#d37444]' },
              { icon: Twitter, color: 'hover:bg-[#2d87c1]' },
              { icon: Youtube, color: 'hover:bg-[#c65058]' },
              { icon: Github, color: 'hover:bg-[#32493b]' }
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <button
                  key={index}
                  className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 transition-all duration-300 ${social.color} hover:scale-110 hover:border-transparent`}
                >
                  <IconComponent size={20} className="text-white" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400">
          <p>© 2025 Geek Girl Con</p>
        </div>
      </div>
    </div>
  );
}

export default App;
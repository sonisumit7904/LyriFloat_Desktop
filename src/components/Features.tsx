import React from 'react';
import { Zap, Monitor, Library, Clock, Headphones, Globe, Shield, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Sync",
      subtitle: "Perfect timing, every time",
      description: "Accurate, millisecond-timed lyrics for every song.",
      highlight: "High accuracy"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Universal Overlay",
      subtitle: "Works with everything",
      description: "Lyrics stay on top while you work, game, or browse.",
      highlight: "Always visible"
    },
    {
      icon: <Library className="h-8 w-8" />,
      title: "Multiple Sources",
      subtitle: "Every song covered",
      description: "Comprehensive lyrics from Musixmatch, YouTube & Lyrics.ovh.",
      highlight: "50M+ songs"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Instant Setup",
      subtitle: "5 minutes to singing",
      description: "Download, connect to Spotify, and sing. Simple as that.",
      highlight: "5 min setup"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Spotify Integration",
      subtitle: "Seamless connection",
      description: "Auto-detects Spotify playback for seamless lyric display.",
      highlight: "Auto-detection"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Language",
      subtitle: "Global music support",
      description: "Supports lyrics in multiple languages, server-dependent.",
      highlight: "25+ languages"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy First",
      subtitle: "Your data stays yours",
      description: "Only accesses current song info. No personal data tracking.",
      highlight: "Zero tracking"
    },    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Lightweight",
      subtitle: "Minimal resource usage",
      description: "Efficient performance with minimal resource usage, typically under 100MB RAM.",
      highlight: "<100MB RAM"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Discover What Makes LyricsFloat Unique
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the key features designed to elevate your music experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <div className="bg-green-400/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                {feature.highlight}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              
              <h4 className="text-green-400 font-semibold mb-4">
                {feature.subtitle}
              </h4>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Music Experience?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of users already enjoying synced lyrics.
            </p>
            <a
              href="#download" // Points to the Download Hub
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 inline-block"
            >
              Download LyricsFloat Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
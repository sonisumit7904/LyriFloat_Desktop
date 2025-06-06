import React, { useState, useEffect } from 'react';
import { Users, Download, Heart, Star, Globe, Rocket, Code, Coffee } from 'lucide-react';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Coming Soon",
      subtitle: "Almost ready to launch",
      description: "Final testing and polishing in progress",
      color: "text-green-400"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Open Source",
      subtitle: "Transparent development",
      description: "Built in the open for the community",
      color: "text-blue-400"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Passion Project",
      subtitle: "Made with love",
      description: "Created by music lovers, for music lovers",
      color: "text-yellow-400"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community First",
      subtitle: "Your feedback matters",
      description: "Help shape the future of LyricsFloat",
      color: "text-purple-400"
    }
  ];

  const upcomingFeatures = [
    "Real-time lyrics synchronization",
    "Multiple lyrics source integration",
    "Customizable overlay appearance",
    "Lightweight system footprint",
    "Privacy-focused design",
    "Cross-platform compatibility (planned)"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Be Among the First
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LyricsFloat Desktop is in final development. Join our early community 
            and help us create the perfect lyrics experience.
          </p>
        </div>

        {/* Project Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`text-center bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-green-400/30 transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${highlight.color} mb-4 flex justify-center`}>
                {highlight.icon}
              </div>
              <h3 className={`text-xl font-bold ${highlight.color} mb-2`}>
                {highlight.title}
              </h3>
              <h4 className="text-white font-semibold mb-3">
                {highlight.subtitle}
              </h4>
              <p className="text-gray-400 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Development Progress */}
        <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span>Development in Progress</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">What's Ready</h4>
              <div className="space-y-3">
                {upcomingFeatures.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Coming Next</h4>
              <div className="space-y-3">
                {upcomingFeatures.slice(3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Early Access CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-4">
              Want to be notified when we launch?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Follow our development journey and be the first to know when LyricsFloat is ready
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/LyricsFloat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Follow Development Updates</span>
              </a>
              <a
                href="https://github.com/[username]/LyricsFloat-Desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 hover:bg-black/30 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2 border-2 border-black/20"
              >
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
import React, { useState, useEffect } from 'react';
import { Heart, Rocket, Code, Coffee, Download } from 'lucide-react';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Now Available!", // Changed from "LyricsFloat is ready!"
      subtitle: "Download v1.0.0 and get started", // Changed subtitle
      description: "Experience real-time synced lyrics. We're actively developing new features based on community feedback.", // Changed description
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
    // Removed features that were part of "What's Coming"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built with Passion, For the Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LyricsFloat Desktop is now released! Join our community, share your feedback,
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

        {/* Early Access CTA - Changed to Download CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl p-8 text-black">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience LyricsFloat?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Download the latest version and transform your music listening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#download" // Points to the Download Hub
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" /> 
                <span>Download LyricsFloat v1.0.0</span>
              </a>
              <a
                href="#community" // Points to the new Community section
                className="bg-black/20 hover:bg-black/30 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2 border-2 border-black/20"
              >
                <span>Join the Community</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
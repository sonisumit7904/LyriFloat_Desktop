import React from 'react';
import { Heart, Star, Coffee, Twitter, Github, MessageCircle, Users, Share2 } from 'lucide-react';

const Community = () => {
  const socialActions = [
    {
      icon: <Twitter className="h-6 w-6" />,
      title: "Motivate the Developer",
      description: "Follow us on Twitter for updates and behind-the-scenes content",
      action: "Follow @LyricsFloat",
      link: "https://twitter.com/LyricsFloat",
      color: "from-blue-400 to-blue-500",
      hoverColor: "hover:from-blue-500 hover:to-blue-600"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Buy Me a Coffee",
      description: "Support development with a small donation",
      action: "Donate $5",
      link: "https://buymeacoffee.com/lyricsFloat",
      color: "from-yellow-400 to-orange-400",
      hoverColor: "hover:from-yellow-500 hover:to-orange-500"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Star on GitHub",
      description: "Show your support by starring our repository",
      action: "⭐ Star Repository",
      link: "https://github.com/[username]/LyricsFloat-Desktop",
      color: "from-gray-400 to-gray-500",
      hoverColor: "hover:from-gray-500 hover:to-gray-600"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Share with Friends",
      description: "Help others discover the joy of synchronized lyrics",
      action: "Share LyricsFloat",
      link: "https://twitter.com/intent/tweet?text=Just%20discovered%20LyricsFloat%20Desktop%20-%20real-time%20synced%20lyrics%20for%20every%20Spotify%20song!%20🎵&url=https://lyricsFloat.com",
      color: "from-green-400 to-emerald-400",
      hoverColor: "hover:from-green-500 hover:to-emerald-500"
    }
  ];

  const communityStats = [
    { number: "12.8K", label: "Downloads", icon: <Users className="h-5 w-5" /> },
    { number: "4.8", label: "Rating", icon: <Star className="h-5 w-5" /> },
    { number: "245", label: "GitHub Stars", icon: <Github className="h-5 w-5" /> },
    { number: "1.2K", label: "Discord Members", icon: <MessageCircle className="h-5 w-5" /> }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Show Some Love
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LyricsFloat is built with passion by a small team. Your support helps us 
            continue developing features that make music more enjoyable for everyone.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="text-green-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Actions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {socialActions.map((action, index) => (
            <a
              key={index}
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-gradient-to-r ${action.color} ${action.hoverColor} p-8 rounded-2xl text-black transition-all transform hover:scale-105 hover:shadow-lg group`}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-black/10 rounded-lg p-3 group-hover:bg-black/20 transition-colors">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                  <p className="text-black/80 mb-4 leading-relaxed">{action.description}</p>
                  <div className="inline-flex items-center space-x-2 bg-black/10 rounded-lg px-4 py-2 font-semibold group-hover:bg-black/20 transition-colors">
                    <span>{action.action}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Developer Message */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Developer"
                className="w-24 h-24 rounded-full object-cover border-4 border-green-400"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                A Message from the Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                "I built LyricsFloat because I love singing along to music while working, but could never 
                remember the lyrics. What started as a personal tool has grown into something that thousands 
                of people use daily. Your support and feedback help me continue improving the app and adding 
                new features. Thank you for being part of the LyricsFloat community! 🎵"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://twitter.com/LyricsFloat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Follow for Updates</span>
                </a>
                <a
                  href="https://buymeacoffee.com/lyricsFloat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                >
                  <Coffee className="h-5 w-5" />
                  <span>Buy Me a Coffee</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you want to share feedback, request features, help others, or just chat about music, 
              our community is welcoming to all music lovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/lyricsFloat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Join Discord Community</span>
              </a>
              <a
                href="https://github.com/[username]/LyricsFloat-Desktop/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <Github className="h-5 w-5" />
                <span>Report Issues</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
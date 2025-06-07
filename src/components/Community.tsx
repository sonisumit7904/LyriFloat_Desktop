import React from 'react';
import { Star, Coffee, Twitter, Share2, Github, Heart, MessageCircle, ExternalLink } from 'lucide-react'; // Added Github, Heart, MessageCircle, ExternalLink

const Community = () => {
  const primaryActions = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Star on GitHub",
      description: "Show your support by starring our repository. It helps others discover LyricsFloat.",
      action: "⭐ Star Repository",
      link: "https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases", 
      color: "from-gray-700 to-gray-800", // Updated color
      hoverColor: "hover:from-gray-600 hover:to-gray-700", // Updated hover color
      textColor: "text-white"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      title: "Follow on Twitter", // Updated title
      description: "Stay updated with the latest news, features, and behind-the-scenes content.", // Updated description
      action: "Follow @sonisumit7904",
      link: "https://x.com/sonisumit7904", 
      color: "from-blue-500 to-blue-600", // Updated color
      hoverColor: "hover:from-blue-400 hover:to-blue-500", // Updated hover color
      textColor: "text-white"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Support the Developer", 
      description: "If you love LyricsFloat, consider a small donation to fuel future development.", // Updated description
      action: "Buy Me a Coffee", // Updated action text
      link: "https://bento.me/sumit-soni",
      color: "from-yellow-500 to-orange-500", // Updated color
      hoverColor: "hover:from-yellow-400 hover:to-orange-400", // Updated hover color
      textColor: "text-black"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Share with Friends",
      description: "Help others discover the joy of synchronized lyrics by sharing LyricsFloat.", // Updated description
      action: "Spread the Word", // Updated action text
      link: "https://twitter.com/intent/tweet?text=Just%20discovered%20LyricsFloat%20Desktop%20-%20real-time%20synced%20lyrics%20for%20every%20Spotify%20song!%20%F0%9F%8E%B5&url=https://lyricsfloat.vercel.app/", 
      color: "from-green-500 to-emerald-500", // Updated color
      hoverColor: "hover:from-green-400 hover:to-emerald-400", // Updated hover color
      textColor: "text-white"
    }
  ];

  return (
    <section id="community" className="py-20 bg-black"> {/* Added id="community" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Join Our Community & Shape the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            LyricsFloat is an open-source project built with passion. Your involvement helps us grow and improve.
          </p>
          <p className="text-gray-400">
            Star our project on GitHub, follow for updates, or consider supporting development.
          </p>
        </div>

        {/* Primary Actions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {primaryActions.map((action, index) => (
            <a
              key={index}
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-gradient-to-br ${action.color} ${action.hoverColor} p-8 rounded-2xl ${action.textColor} transition-all transform hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-black/20 rounded-lg p-3 group-hover:bg-black/30 transition-colors">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                  <p className={`${action.textColor === 'text-white' ? 'text-gray-300' : 'text-black/80'} mb-4 leading-relaxed`}>{action.description}</p>
                  <div className={`inline-flex items-center space-x-2 bg-black/20 rounded-lg px-4 py-2 font-semibold group-hover:bg-black/30 transition-colors`}>
                    <span>{action.action}</span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
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
                src="/icons/profile.png"
                alt="Developer"
                className="w-24 h-24 rounded-full object-cover border-2 border-green-400"
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
                  href="https://x.com/sonisumit7904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Follow for Updates</span>
                </a>
                <a
                  href="https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Github className="h-5 w-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
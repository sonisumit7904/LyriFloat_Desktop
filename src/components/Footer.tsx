import React from 'react';
import { Music, Heart, Github, Twitter, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Project",
      links: [
        { name: "About", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Development", href: "#support" }
      ]
    },
    {
      title: "Development", 
      links: [
        { name: "GitHub Repository", href: "https://github.com/[username]/LyricsFloat-Desktop" },
        { name: "Follow Progress", href: "https://twitter.com/LyricsFloat" },
        { name: "Contact Developer", href: "mailto:hello@lyricsFloat.com" },
        { name: "Feature Requests", href: "https://github.com/[username]/LyricsFloat-Desktop/issues" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Twitter Updates", href: "https://twitter.com/LyricsFloat" },
        { name: "GitHub Stars", href: "https://github.com/[username]/LyricsFloat-Desktop" },
        { name: "Support Development", href: "https://buymeacoffee.com/lyricsFloat" },
        { name: "Share Project", href: "https://twitter.com/intent/tweet?text=Excited%20about%20LyricsFloat%20Desktop%20-%20real-time%20synced%20lyrics%20for%20Spotify!%20🎵&url=https://lyricsFloat.com" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/LyricsFloat",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub", 
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/[username]/LyricsFloat-Desktop",
      color: "hover:text-gray-300"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:hello@lyricsFloat.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Music className="h-8 w-8 text-green-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                </div>
                <span className="text-2xl font-bold text-white">LyricsFloat</span>
                <span className="text-xs bg-green-400 text-black px-2 py-1 rounded-full font-semibold">
                  Desktop
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Real-time synced lyrics for every Spotify song. Currently in development 
                with launch coming soon.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded-lg hover:bg-gray-800`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h4 className="text-white font-semibold mb-3">Important Note</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              LyricsFloat Desktop is an independent project created by music enthusiasts. 
              We're not affiliated with Spotify AB - we just love making music more enjoyable! 
              This app connects to Spotify's public API to enhance your listening experience 
              with real-time lyrics. We're committed to respecting Spotify's terms of service 
              and your privacy. Use of this application is entirely at your own discretion.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} LyricsFloat.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for music lovers</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a 
                href="https://github.com/[username]/LyricsFloat-Desktop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Open Source
              </a>
              <span>•</span>
              <span>Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <div className="py-4 text-center">
          <div className="text-xs text-gray-500">
            🎵 Currently developing: {" "}
            <span className="text-green-400 animate-pulse">The future of lyrics sync</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import { HelpCircle, Github, Mail, ChevronDown, ChevronUp, Search, ExternalLink, MessageCircle } from 'lucide-react';

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "When will LyricsFloat Desktop be available?",
      answer: "LyricsFloat Desktop v1.0.0 is now available! You can download it from the [releases page](https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases/releases/download/v1.0.0/LyricsFloat_Desktop.Setup.1.0.0.exe). Follow us on [Twitter](https://x.com/sonisumit7904) or star our [GitHub repository](https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases) to be notified about future updates."
    },
    {
      question: "How will LyricsFloat work with Spotify?",
      answer: "LyricsFloat will connect to Spotify using their official API to detect what song you're currently playing. We'll then fetch synchronized lyrics from multiple sources and display them in real-time. You'll need an active Spotify account (free or premium) for the app to work."
    },
    {
      question: "Will LyricsFloat work with Spotify Free accounts?",
      answer: "Yes! LyricsFloat will work with both Spotify Free and Premium accounts. The app only needs to know what song you're currently playing, which is available to both account types."
    },
    {
      question: "Will I be able to customize the lyrics overlay?",
      answer: "Absolutely! You'll be able to customize the overlay's position, size, font, color, transparency, and more. The overlay can be positioned anywhere on your screen and styled to match your preferences."
    },
    {
      question: "What if lyrics aren't available for a song?",
      answer: "LyricsFloat will search multiple lyrics databases (Musixmatch, YouTube, Lyrics.ovh). If lyrics aren't found, it's usually because the song is very new or from an independent artist. Our coverage will improve constantly as our sources are updated."
    },
    {
      question: "Will LyricsFloat slow down my computer?",
      answer: "No! LyricsFloat is designed to be extremely lightweight, using less than 50MB of RAM and minimal CPU resources. It will run efficiently in the background without affecting your computer's performance."
    },
    {
      question: "Will it work while gaming or in fullscreen apps?",
      answer: "Yes! The overlay will be designed to stay on top of all applications, including fullscreen games and videos. You'll be able to adjust the transparency to make it less intrusive during gaming or other activities."
    },
    {
      question: "How will my Spotify data be protected?",
      answer: "LyricsFloat will only access your currently playing track information and nothing else. We won't store any personal data, music history, or account information. All connections will use secure OAuth authentication."
    },
    {
      question: "What are the system requirements?",
      answer: "LyricsFloat Desktop will require Windows 10 or later, at least 4GB of RAM (8GB recommended), and an internet connection for Spotify connectivity and lyrics fetching. The app itself will be very lightweight at around 50MB."
    },
    {
      question: "How can I provide feedback or report issues?",
      answer: "Once launched, you'll be able to report issues and provide feedback through our GitHub repository. We're committed to actively maintaining and improving the app based on user feedback."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const developmentChannels = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "Follow Development",
      description: "Watch our progress and star the repository for updates",
      link: "https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases",
      action: "Star on GitHub"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Follow for Updates", // Updated title
      description: "Follow our journey and get notified about milestones",
      link: "https://x.com/sonisumit7904", // Updated Twitter link
      action: "Follow on Twitter"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "General Inquiries",
      description: "For questions about the project or collaboration",
      link: "mailto:sonisumit7904@gmail.com", // Updated email
      action: "Send Email"
    }
  ];

  return (
    <section id="support" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Questions About LyricsFloat?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about our upcoming lyrics overlay application and how you can 
            stay updated on our development progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-black/50 rounded-2xl border border-gray-800 p-8">
              <div className="flex items-center space-x-3 mb-8">
                <HelpCircle className="h-8 w-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
              </div>

              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="text-white font-semibold pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-400">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Development Channels */}
          <div className="space-y-8">
            <div className="bg-black/50 rounded-2xl border border-gray-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3>
              <div className="space-y-6">
                {developmentChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700 hover:border-green-400/50 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-green-400 group-hover:scale-110 transition-transform">
                        {channel.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white">{channel.title}</h4>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                        <span className="text-green-400 text-sm font-medium">{channel.action}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-black/50 rounded-2xl border border-gray-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#home" className="block text-green-400 hover:text-green-300 transition-colors">
                  → About LyricsFloat
                </a>
                <a href="#features" className="block text-green-400 hover:text-green-300 transition-colors">
                  → Planned Features
                </a>
                <a href="https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases" target="_blank" rel="noopener noreferrer" className="block text-green-400 hover:text-green-300 transition-colors">
                  → View Source Code
                </a>
              </div>
            </div>

            {/* Development Status */}
            <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/30 rounded-2xl p-6">
              <h4 className="text-green-400 font-semibold mb-2">Development Status</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Core Features</span>
                  <span className="text-white">100% Complete</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Testing Phase</span>
                  <span className="text-white">Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Current Version</span>
                  <span className="text-white">v1.0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
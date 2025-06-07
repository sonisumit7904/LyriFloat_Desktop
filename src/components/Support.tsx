import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "When will LyricsFloat Desktop be available?",
      answer: "LyricsFloat Desktop v1.0.0 is now available! You can download it from the <a href='https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases/releases/download/v1.0.0/LyricsFloat_Desktop.Setup.1.0.0.exe' target='_blank' rel='noopener noreferrer' class='text-green-400 hover:underline'>releases page</a>. Follow us on <a href='https://x.com/sonisumit7904' target='_blank' rel='noopener noreferrer' class='text-green-400 hover:underline'>Twitter</a> or star our <a href='https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases' target='_blank' rel='noopener noreferrer' class='text-green-400 hover:underline'>GitHub repository</a> to be notified about future updates."
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
      answer: "You can report issues and provide feedback through our <a href='https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases/issues' target='_blank' rel='noopener noreferrer' class='text-green-400 hover:underline'>GitHub repository issues page</a>. We're committed to actively maintaining and improving the app based on user feedback."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="support" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about LyricsFloat. If you can't find what you're looking for, feel free to reach out via our community channels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto"> {/* Centered FAQ content */}
          {/* FAQ Section */}
          <div className="bg-black/50 rounded-2xl border border-gray-800 p-8">
            <div className="flex items-center space-x-3 mb-8">
              <HelpCircle className="h-8 w-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Support & FAQs</h3> {/* Updated heading */}
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
                    <div className="px-6 pb-6 prose prose-invert max-w-none">
                      <p dangerouslySetInnerHTML={{ __html: faq.answer }} className="text-gray-300 leading-relaxed"></p>
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
      </div>
    </section>
  );
};

export default Support;
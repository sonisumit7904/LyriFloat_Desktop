import React, { useState } from 'react';
import { Monitor } from 'lucide-react';

const DownloadSection = () => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      setIsSubscribed(true);
      // In a real app, this would send the email to a backend service
      setTimeout(() => {
        setIsSubscribed(false);
        setNotifyEmail('');
      }, 3000);
    }
  };

  const systemRequirements = [
    { label: "Operating System", value: "Windows 10 or later" },
    { label: "RAM", value: "4GB minimum (8GB recommended)" },
    { label: "Storage", value: "50MB available space" },
    { label: "Internet", value: "Required for Spotify connection" },
    { label: "Spotify", value: "Premium or Free account" }
  ];

  const plannedFeatures = [
    "Real-time lyrics synchronization",
    "Spotify integration",
    "Multiple lyrics sources",
    "Customizable overlay",
    "Automatic updates",
    "Privacy-focused design"
  ];

  return (
    <section id="download" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Download LyricsFloat v1.0.0
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LyricsFloat Desktop is now available! Download the first release and enjoy real-time synced lyrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Notify Me Section - Removed */}
          {/* <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-400/10 to-blue-400/10 border border-green-400/30 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-green-400 text-black px-4 py-2 rounded-full font-semibold mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  Now Available!
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Download LyricsFloat
                </h3>
                <p className="text-gray-300">
                  Experience real-time synced lyrics with our first release.
                </p>
              </div>
              <div className="text-center">
                 <a
                  href="https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases/releases/tag/v1.0.0" // Direct download link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download v1.0.0</span>
                </a>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Stay Updated
              </h4>
              <div className="space-y-3">
                <a
                  href="https://x.com/sonisumit7904" // Updated Twitter link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-colors border border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                    <div>
                      <div className="text-white font-medium">Follow on X (Twitter)</div>
                      <div className="text-gray-400 text-sm">Get the latest news and updates</div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </a>
                <a
                  href="https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases" // Updated GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-colors border border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="h-6 w-6 text-gray-300" />
                    <div>
                      <div className="text-white font-medium">Star on GitHub</div>
                      <div className="text-gray-400 text-sm">Watch the repository for release notifications</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                </a>
              </div>
            </div>
          </div> */}

          {/* Right Column: Download Info, Install Steps, System Req */}
          <div className="space-y-8">
            {/* System Requirements */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Monitor className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">System Requirements</h3>
              </div>
              <div className="space-y-4">
                {systemRequirements.map((req, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-300 font-medium">{req.label}</span>
                    <span className="text-white text-sm">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation Preview */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">
                How Installation Will Work
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="text-white font-medium">Download the installer</div>
                    <div className="text-gray-400 text-sm">Single executable file, no additional downloads</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="text-white font-medium">Run the installer</div>
                    <div className="text-gray-400 text-sm">Quick setup with minimal user input required</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="text-white font-medium">Connect to Spotify</div>
                    <div className="text-gray-400 text-sm">Secure login with your existing Spotify account</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <div className="text-white font-medium">Start singing!</div>
                    <div className="text-gray-400 text-sm">Play any song and enjoy synced lyrics</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Status - This section is removed */}
            {/* <div className="bg-blue-400/10 border border-blue-400/30 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Development Status</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    LyricsFloat Desktop v1.0.0 is now released!
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
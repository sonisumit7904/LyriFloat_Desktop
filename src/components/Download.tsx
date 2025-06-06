import React, { useState } from 'react';
import { Download, Github, Monitor, Shield, Clock, ExternalLink, CheckCircle, AlertCircle, Star } from 'lucide-react';

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
            Almost Ready to Launch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LyricsFloat Desktop is in final development. Be the first to know when 
            it's ready and get early access to the download.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Notify Me Section */}
          <div className="space-y-8">
            {/* Primary Notification Signup */}
            <div className="bg-gradient-to-br from-green-400/10 to-blue-400/10 border border-green-400/30 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-green-400 text-black px-4 py-2 rounded-full font-semibold mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Notified When We Launch
                </h3>
                <p className="text-gray-300">
                  Be among the first to experience real-time synced lyrics
                </p>
              </div>

              <form onSubmit={handleNotifySubmit} className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="Enter your email for launch notification"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className={`bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-lg transition-all ${
                      isSubscribed ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-105'
                    }`}
                  >
                    {isSubscribed ? 'Subscribed!' : 'Notify Me'}
                  </button>
                </div>
              </form>

              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">
                  We'll only email you when LyricsFloat is ready to download
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-green-400" />
                    <span>Launch soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Ways to Stay Updated */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Other Ways to Stay Updated
              </h4>
              <div className="space-y-3">
                <a
                  href="https://twitter.com/LyricsFloat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-colors border border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">T</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Follow on Twitter</div>
                      <div className="text-gray-400 text-sm">Get development updates and launch news</div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </a>
                
                <a
                  href="https://github.com/[username]/LyricsFloat-Desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-colors border border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="h-10 w-10 text-gray-400" />
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

            {/* What's Included */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                What's Coming
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plannedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Requirements & Info */}
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

            {/* Development Status */}
            <div className="bg-blue-400/10 border border-blue-400/30 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Development Status</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    LyricsFloat Desktop is currently in final development and testing phases. 
                    We're working hard to ensure a stable, polished experience before launch.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Core Features</span>
                      <span className="text-green-400">90% Complete</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Testing & Polish</span>
                      <span className="text-yellow-400">In Progress</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Expected Launch</span>
                      <span className="text-blue-400">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
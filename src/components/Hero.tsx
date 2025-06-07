import React from 'react';
import { Download, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gray-900 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm text-gray-300">Real-time lyrics sync</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Music Into A
              </span>
              <span className="block">Sing-Along Experience</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Real-time synced lyrics for every Spotify song. Work, study, or just enjoy music 
              like never before with millisecond-accurate lyrics floating over everything.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-4">
              <a
                href="#download" // Changed to link to the download hub
                className="bg-green-400 hover:bg-green-500 text-black px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg hover:shadow-green-400/25 w-full sm:w-auto"
              >
                <Download className="h-6 w-6" />
                <span>Download LyricsFloat</span>
              </a>
              
              <a
                href="#demo"
                className="text-gray-300 hover:text-green-400 transition-colors text-lg"
              >
                Watch Demo
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-400">
              <span>• Quick 5-min setup</span>
              <span>• Connects to Spotify</span>
            </div>
          </div>
          
          {/* Right Side - App Screenshot */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-800">
              {/* Mock App Interface */}
              <div className="bg-gray-800 rounded-lg p-6 mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg" />
                  <div>
                    <div className="font-semibold text-white">Blinding Lights</div>
                    <div className="text-gray-400 text-sm">The Weeknd</div>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="text-center text-lg font-medium text-white mb-2">
                    I can't sleep until I feel your touch
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1">
                    <div className="bg-green-400 h-1 rounded-full w-3/4 transition-all duration-300" />
                  </div>
                </div>
              </div>
              
              {/* Floating Lyrics Overlay */}
              <div className="absolute -top-4 -right-4 bg-black/90 backdrop-blur-sm rounded-lg p-4 border border-green-400/30 shadow-lg">
                <div className="text-center">
                  <div className="text-green-400 text-sm font-semibold mb-1">Live Lyrics</div>
                  <div className="text-white font-medium">
                    I said, ooh, I'm blinded by the lights
                  </div>
                  <div className="text-gray-400 text-xs mt-1">Synced perfectly ✨</div>
                </div>
              </div>
              
              {/* Musical Notes Animation */}
              <div className="absolute -bottom-2 -left-2 text-green-400 animate-bounce">♪</div>
              <div className="absolute top-1/4 -right-8 text-blue-400 animate-pulse">♫</div>
              <div className="absolute bottom-1/3 -left-6 text-green-400 animate-ping">♪</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
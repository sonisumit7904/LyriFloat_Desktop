import React, { useState, useEffect } from 'react';
import { Play, Pause, Music, Volume2, SkipForward } from 'lucide-react';

const LiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [currentLyric, setCurrentLyric] = useState(0);
  const [progress, setProgress] = useState(0);

  const demoSongs = [
    {
      title: "Electric Dreams",
      artist: "Demo Artist",
      cover: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      lyrics: [
        "Dancing through the neon lights tonight",
        "Music fills the air with pure delight", 
        "Every beat syncs with my heartbeat",
        "This is where the magic and rhythm meet"
      ]
    },
    {
      title: "Midnight Vibes", 
      artist: "Sample Band",
      cover: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      lyrics: [
        "Stars are shining bright above",
        "Feel the music that we love",
        "Every word appears just right",
        "Singing through the peaceful night"
      ]
    }
  ];

  const currentSongData = demoSongs[currentSong];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 2;
          if (newProgress >= 100) {
            setCurrentLyric(prev => (prev + 1) % currentSongData.lyrics.length);
            return 0;
          }
          return newProgress;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentSongData.lyrics.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % demoSongs.length);
    setCurrentLyric(0);
    setProgress(0);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See LyricsFloat In Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience how seamlessly synced lyrics transform your music experience. 
            This interactive demo shows exactly what you'll see on your screen.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mock Desktop Screen */}
          <div className="bg-gray-800 rounded-t-2xl p-6 border-2 border-gray-700">
            {/* Desktop Browser Mockup */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-gray-700 rounded-md px-4 py-1 text-sm text-gray-300">
                spotify.com/app
              </div>
            </div>

            {/* Spotify Player Mockup */}
            <div className="bg-black rounded-lg p-6 relative">
              <div className="grid grid-cols-3 items-center gap-4">
                {/* Left - Current Song */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={currentSongData.cover} 
                    alt="Album cover"
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">{currentSongData.title}</div>
                    <div className="text-gray-400">{currentSongData.artist}</div>
                  </div>
                </div>

                {/* Center - Controls */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-6 mb-4">
                    <button 
                      onClick={nextSong}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <SkipForward className="h-5 w-5 transform rotate-180" />
                    </button>
                    <button 
                      onClick={togglePlay}
                      className="bg-white text-black rounded-full p-3 hover:scale-105 transition-transform"
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                    </button>
                    <button 
                      onClick={nextSong}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <SkipForward className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1">
                    <div 
                      className="bg-green-400 h-1 rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Right - Volume */}
                <div className="flex items-center justify-end space-x-2">
                  <Volume2 className="h-5 w-5 text-gray-400" />
                  <div className="w-24 bg-gray-600 rounded-full h-1">
                    <div className="bg-white h-1 rounded-full w-3/4" />
                  </div>
                </div>
              </div>

              {/* Floating Lyrics Overlay - This is the key feature */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-black/95 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50 shadow-2xl
                transition-all duration-500 ${isPlaying ? 'scale-100 opacity-100' : 'scale-95 opacity-80'}`}>
                <div className="text-center">
                  <div className="text-green-400 text-sm font-semibold mb-2 flex items-center justify-center space-x-2">
                    <Music className="h-4 w-4" />
                    <span>LyricsFloat Active</span>
                  </div>
                  <div className="text-white text-2xl font-bold mb-2 min-h-[60px] flex items-center justify-center">
                    {currentSongData.lyrics[currentLyric]}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Synced in real-time ✨
                  </div>
                  {isPlaying && (
                    <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-b-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-2">
              This could be your screen right now
            </h3>
            <p className="text-black/80 mb-4">
              Download LyricsFloat and start singing along to every song
            </p>
            <a
              href="#download"
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center space-x-2"
            >
              <span>Get Started Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
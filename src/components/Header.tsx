import React, { useState, useEffect } from 'react';
import { Music, Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Music className="h-8 w-8 text-green-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold text-white">LyricsFloat</span>
            <span className="text-xs bg-green-400 text-black px-2 py-1 rounded-full font-semibold">
              Desktop
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
            <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases/releases/download/v1.0.0/LyricsFloat_Desktop.Setup.1.0.0.exe" // Updated download link
              className="bg-green-400 hover:bg-green-500 text-black px-5 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 text-sm"
            >
              Download Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#download" className="block text-gray-300 hover:text-white transition-colors">Download</a>
            <a href="#support" className="block text-gray-300 hover:text-white transition-colors">Support</a>
            <div className="pt-4 border-t border-gray-800">
              <a
                href="https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases/releases/download/v1.0.0/LyricsFloat_Desktop.Setup.1.0.0.exe" // Updated download link
                className="w-full bg-green-400 hover:bg-green-500 text-black px-5 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 text-sm flex items-center justify-center"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
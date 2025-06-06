import React from 'react';
import { Download, LogIn, Play, Mic, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Download className="h-8 w-8" />,
      title: "Download",
      subtitle: "Get the app",
      description: "Download LyricsFloat from our secure servers. Quick installer, no bloatware.",
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      details: ["One-click installer", "Windows 10+ compatible", "15MB download size"]
    },
    {
      number: "02", 
      icon: <LogIn className="h-8 w-8" />,
      title: "Connect",
      subtitle: "Link your Spotify",
      description: "Secure OAuth connection to your Spotify account. We only see what's currently playing.",
      image: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      details: ["Secure OAuth login", "Read-only access", "Privacy protected"]
    },
    {
      number: "03",
      icon: <Play className="h-8 w-8" />,
      title: "Play",
      subtitle: "Start any song",
      description: "Play music on Spotify as usual. LyricsFloat automatically detects and syncs lyrics.",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      details: ["Auto-detection", "Works with any device", "Real-time sync"]
    },
    {
      number: "04",
      icon: <Mic className="h-8 w-8" />,
      title: "Sing",
      subtitle: "Enjoy synced lyrics",
      description: "Watch lyrics appear in perfect sync. Overlay stays on top while you work or play.",
      image: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      details: ["Perfect timing", "Always visible", "Distraction-free"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From Silent to Singing in 4 Steps
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Setup takes less than 5 minutes. Once configured, LyricsFloat works automatically 
            with every song you play.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="text-green-400">
                    {step.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <h4 className="text-xl text-green-400 font-semibold mb-4">
                    {step.subtitle}
                  </h4>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center space-x-2 text-gray-400 mt-8">
                    <span>Next step</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div className="relative">
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl">
                    <img 
                      src={step.image}
                      alt={`Step ${step.number}: ${step.title}`}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="bg-black/50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-green-400">
                          {step.icon}
                        </div>
                        <span className="text-white font-semibold">{step.title}</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating Number */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-400 to-blue-400 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="mt-20 text-center">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Total Setup Time: Less Than 5 Minutes
            </h3>
            <p className="text-gray-300 mb-6">
              Once set up, LyricsFloat runs automatically in the background. 
              No manual input required.
            </p>
            <a
              href="#download"
              className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-3"
            >
              <Download className="h-5 w-5" />
              <span>Start Your 5-Minute Setup</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
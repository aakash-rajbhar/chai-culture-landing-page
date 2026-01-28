import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Ornamental Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-700 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="royal-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#92400e" />
            </pattern>
            <rect width="100" height="100" fill="url(#royal-pattern)" />
          </svg>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-amber-700 opacity-30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-amber-700 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-amber-700 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-amber-700 opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
          <div 
            className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <div className="flex justify-center mb-2">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-amber-700 to-orange-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-amber-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-50 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                    RC
                  </div>
                  <div className="text-xs text-amber-100 tracking-widest mt-1">CHAI</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-20">
          <div 
            className={`max-w-4xl w-full text-center transition-all duration-1200 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Tagline */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-amber-950 leading-tight"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Brew the Royal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 mt-2">
                Tradition
              </span>
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700"></div>
              <div className="mx-4 w-2 h-2 bg-amber-700 rounded-full"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700"></div>
            </div>

            {/* Description */}
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-amber-900 mb-12 max-w-2xl mx-auto leading-relaxed px-4"
              style={{ fontFamily: 'Crimson Text, Georgia, serif' }}
            >
              Experience the authentic taste of premium instant chai tea, 
              crafted from time-honored recipes of royal Indian households. 
              Every cup tells a story of heritage, warmth, and unparalleled flavor.
            </p>

            {/* Launching Soon Badge */}
            <div className="mb-12 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-amber-700 to-orange-800 text-amber-50 px-8 py-4 rounded-full shadow-2xl border-2 border-amber-300">
                  <span className="text-sm sm:text-base font-semibold tracking-widest uppercase">
                    Launching Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-12">
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-white rounded-full shadow-xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-colors">
                    <div className="flex items-center">
                      <Mail className="ml-6 text-amber-700 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your royal email"
                        required
                        className="flex-1 px-4 py-4 text-amber-950 placeholder-amber-600 focus:outline-none bg-transparent"
                        style={{ fontFamily: 'Crimson Text, Georgia, serif' }}
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-amber-700 to-orange-800 text-amber-50 px-8 py-4 font-semibold hover:from-amber-800 hover:to-orange-900 transition-all duration-300 transform hover:scale-105"
                      >
                        Notify Me
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              
              {isSubmitted && (
                <div className="mt-4 text-amber-800 font-medium animate-fade-in">
                  ✓ Thank you! We'll notify you at launch.
                </div>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-700 to-orange-800 flex items-center justify-center text-amber-50 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-amber-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-700 to-orange-800 flex items-center justify-center text-amber-50 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-amber-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-700 to-orange-800 flex items-center justify-center text-amber-50 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-amber-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer 
          className={`pb-8 px-4 text-center text-amber-800 text-sm transition-all duration-1500 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ fontFamily: 'Crimson Text, Georgia, serif' }}
        >
          <p>© 2026 Royal Chai. Crafted with tradition.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

"use client"
import { useState, useEffect } from 'react';
import { Home, ArrowLeft, Star } from 'lucide-react';

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBackClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      window.history.back();
    }, 300);
  };

  const handleHomeClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  };

  const FloatingElement = ({ delay = 0, size = 'w-2 h-2' }) => (
    <div
      className={`${size} bg-gradient-to-r from-gray-400 to-gray-600 rounded-full absolute animate-bounce opacity-70`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: '3s',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <FloatingElement key={i} delay={i * 200} />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-radial from-gray-500/10 to-transparent rounded-full pointer-events-none z-10 blur-xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Number with glassmorphism effect */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-white/10 blur-sm">
              404
            </div>
          </div>

          {/* Glitch effect text */}
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 relative">
              <span className="relative z-10">Page Not Found</span>
              <span className="absolute inset-0 text-gray-400 animate-ping opacity-20">
                Page Not Found
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleBackClick}
              className={`group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 ${
                isAnimating ? 'animate-pulse' : ''
              }`}
            >
              <div className="flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Go Back</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity" />
            </button>

            <button
              onClick={handleHomeClick}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <div className="flex items-center space-x-2">
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Home</span>
              </div>
            </button>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-4 opacity-60">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-gray-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-gray-700"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-gray-600"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-gray-500"
          />
        </svg>
      </div>
    </div>
  );
}
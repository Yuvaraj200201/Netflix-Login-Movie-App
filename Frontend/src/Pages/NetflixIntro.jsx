import React, { useState, useEffect } from 'react';

const NetflixIntro = () => {
  const [animationPhase, setAnimationPhase] = useState('initial');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase('revealing'), 500);
    const timer2 = setTimeout(() => setAnimationPhase('complete'), 4000);
    const timer3 = setTimeout(() => setShowWelcome(true), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const restartAnimation = () => {
    setAnimationPhase('initial');
    setShowWelcome(false);
    
    setTimeout(() => setAnimationPhase('revealing'), 500);
    setTimeout(() => setAnimationPhase('complete'), 4000);
    setTimeout(() => setShowWelcome(true), 4500);
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative flex items-center justify-center cursor-pointer"
         onClick={restartAnimation}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-500 opacity-30 rotate-45 
                        animate-spin transform-gpu transition-all duration-[3s] ease-out"
             style={{
               animationDelay: '0.5s',
               animationDuration: animationPhase === 'complete' ? '8s' : '3s'
             }}>
        </div>
        
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-red-400 opacity-40 
                        animate-pulse transform-gpu"
             style={{ animationDelay: '1s' }}>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-red-600 opacity-20 rotate-12 
                        animate-bounce transform-gpu"
             style={{ animationDelay: '1.5s' }}>
        </div>
        
        {/* Flowing lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent
                        transform translate-x-[-100%] animate-pulse"
             style={{
               animation: animationPhase !== 'initial' ? 'slideAcross 2s ease-out 0.8s forwards' : 'none'
             }}>
        </div>
        
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-red-400 to-transparent
                        transform translate-x-[100%]"
             style={{
               animation: animationPhase !== 'initial' ? 'slideAcross 2s ease-out 1.2s forwards reverse' : 'none'
             }}>
        </div>
      </div>

      {/* Main Netflix Logo Animation */}
      <div className={`relative z-10 transform transition-all duration-1000 ease-out ${
        animationPhase === 'initial' ? 'scale-0 rotate-180 opacity-0' :
        animationPhase === 'revealing' ? 'scale-110 rotate-0 opacity-100' :
        'scale-100 rotate-0 opacity-100'
      }`}>
        
        {/* Netflix Text with Staggered Animation */}
        <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text 
                        bg-gradient-to-r from-red-600 via-red-500 to-red-700 
                        drop-shadow-2xl relative">
          {['N', 'E', 'T', 'F', 'L', 'I', 'X'].map((letter, index) => (
            <span
              key={index}
              className={`inline-block transform transition-all duration-500 ease-out ${
                animationPhase !== 'initial' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100 + 600}ms`,
                filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))'
              }}
            >
              {letter}
            </span>
          ))}
          
          {/* Shine effect overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent 
                          opacity-0 transform -skew-x-12 ${
                          animationPhase === 'revealing' ? 'animate-shine' : ''
                        }`}>
          </div>
        </div>

        {/* Subtitle animation */}
        <div className={`text-center mt-4 transform transition-all duration-1000 ease-out ${
          animationPhase === 'complete' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '3.5s' }}>
          <div className="text-white text-xl font-light tracking-wider">
            Original Series & Films
          </div>
        </div>
      </div>

      {/* Orbital elements around logo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`absolute w-3 h-3 bg-red-500 rounded-full opacity-70 transform ${
              animationPhase !== 'initial' ? 'animate-orbit' : 'scale-0'
            }`}
            style={{
              top: '50%',
              left: '50%',
              animationDelay: `${index * 0.3 + 1}s`,
              animationDuration: '4s',
              transform: `rotate(${index * 60}deg) translateX(200px) rotate(-${index * 60}deg)`,
            }}
          >
          </div>
        ))}
      </div>

      {/* Welcome Section - Appears after main animation */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transform transition-all duration-1000 ease-out ${
        showWelcome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Welcome Text */}
        <div className="text-white text-3xl md:text-4xl font-light mb-8 text-center tracking-wide">
          Welcome to the
        </div>
        
        {/* Animated Netflix Logo */}
        <div className="relative group">
          <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text 
                          bg-gradient-to-r from-red-600 via-red-500 to-red-700 
                          animate-pulse group-hover:animate-none transition-all duration-300
                          hover:scale-105 transform-gpu">
            NETFLIX
          </div>
          
          {/* Floating particles around logo */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="absolute w-2 h-2 bg-red-400 rounded-full opacity-60 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
            </div>
          ))}
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 border-2 border-red-500 opacity-0 group-hover:opacity-30 
                          animate-pulse rounded-lg transform scale-110 transition-all duration-500">
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-red-600 text-2xl font-extrabold p-2 rounded-md mt-28 animate-bounce bg-white">
          <a href="https://movie-app-snowy-psi.vercel.app/"> Click Go to Movie App</a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideAcross {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
            opacity: 0;
          }
        }
        
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 1;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-out 2s;
        }
        
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NetflixIntro;
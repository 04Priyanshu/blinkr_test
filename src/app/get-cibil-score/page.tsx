"use client"
import { useState, useEffect } from 'react';
import { ChevronRight, Award, TrendingUp, ShieldCheck, BarChart4 } from 'lucide-react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from 'next/link';
import Footer from "@/components/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const slideLeftKeyframes = {
  '0%': { transform: 'translateX(50%)' },
  '100%': { transform: 'translateX(0)' }
};

export default function CibilScoreAnimation() {
  const [animationState, setAnimationState] = useState('initial');
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const finalScore = 785;
  
  useEffect(() => {
    // Start the animation sequence
    const sequence = async () => {
      // Initial delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Start calculating animation
      setAnimationState('calculating');
      
      // Progress animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev < 100) {
            return prev + 1;
          }
          clearInterval(progressInterval);
          return 100;
        });
      }, 25);
      
      // Wait and then start counting up
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Start incremental count animation
      setAnimationState('counting');
      
      // Final state after counting completes
      setTimeout(() => {
        setAnimationState('final');
      }, 3000);
    };
    
    sequence();
  }, []);
  
  // Effect for counter animation
  useEffect(() => {
    if (animationState === 'counting') {
      const interval = setInterval(() => {
        setScore(prev => {
          if (prev < finalScore) {
            return Math.min(prev + Math.ceil(finalScore / 50), finalScore);
          }
          clearInterval(interval);
          return finalScore;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [animationState]);
  
  useEffect(() => {
    if (animationState === 'final') {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideLeft {
          0% { transform: translateX(50%); }
          100% { transform: translateX(0); }
        }
        @keyframes slideFromTop {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-left {
          animation: slideLeft 1s ease-out forwards;
        }
        .animate-slide-top {
          animation: slideFromTop 1s ease-out forwards;
          animation-delay: 1s;
          opacity: 0;
        }
        .dot-0 { left: calc(50% + 42px); top: 50%; }
        .dot-60 { left: calc(50% + 21px); top: calc(50% - 36.4px); }
        .dot-120 { left: calc(50% - 21px); top: calc(50% - 36.4px); }
        .dot-180 { left: calc(50% - 42px); top: 50%; }
        .dot-240 { left: calc(50% - 21px); top: calc(50% + 36.4px); }
        .dot-300 { left: calc(50% + 21px); top: calc(50% + 36.4px); }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [animationState]);
  
  const getScoreColor = () => {
    if (score < 550) return 'text-red-600';
    if (score < 700) return 'text-yellow-500';
    if (score < 800) return 'text-green-500';
    return 'text-emerald-600';
  };
  
  const getScoreRating = () => {
    if (score < 550) return 'Poor';
    if (score < 700) return 'Fair';
    if (score < 800) return 'Good';
    return 'Excellent';
  };
  
  return (
    <>
    <BackgroundBeamsWithCollision>
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      <div className={`transition-opacity duration-500 ${animationState === 'initial' ? 'opacity-100' : 'opacity-0 absolute'}`}>
        <div className="text-center animate-pulse">
          <Award size={64} className="text-blue-500 mx-auto mb-4" />
          <h2 className="text-white text-2xl font-bold">Preparing Your CIBIL Score</h2>
          <p className="text-slate-300 mt-2">Please wait while we analyze your credit history...</p>
        </div>
      </div>
      
      <div className={`transition-opacity duration-500 ${animationState === 'calculating' ? 'opacity-100' : 'opacity-0 absolute'}`}>
        <div className="text-center">
          {/* New visualization for calculating phase */}
          <div className="relative mx-auto mb-8 w-64 h-64">
            {/* Outer spinning circle */}
            <div className="absolute inset-0 border-4 border-t-blue-500 border-r-purple-500 border-b-teal-500 border-l-transparent rounded-full animate-spin"></div>
            
            {/* Middle rotating elements */}
            <div className="absolute inset-4 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-80 dot-0"></div>
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-80 dot-60"></div>
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-80 dot-120"></div>
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-80 dot-180"></div>
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-80 dot-240"></div>
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-80 dot-300"></div>
              </div>
            </div>
            
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <BarChart4 size={48} className="text-blue-400 mb-2" />
              <div className="text-lg text-white font-medium">
                {progress}%
              </div>
            </div>
          </div>
          
          <h2 className="text-white text-3xl font-bold mb-6">Calculating Your Score</h2>
          
          <div className="flex justify-center gap-6 mt-4">
            <div className="bg-slate-800 p-4 rounded-lg shadow-lg transform transition-all duration-300" 
                 style={{ 
                   transform: progress > 30 ? 'scale(1.1)' : 'scale(1)', 
                   opacity: progress > 30 ? 1 : 0.5
                 }}>
              <TrendingUp size={32} className="text-blue-400" />
              <div className="text-sm text-slate-300 mt-1">History</div>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow-lg transform transition-all duration-300"
                 style={{ 
                   transform: progress > 60 ? 'scale(1.1)' : 'scale(1)', 
                   opacity: progress > 60 ? 1 : 0.5
                 }}>
              <ShieldCheck size={32} className="text-green-400" />
              <div className="text-sm text-slate-300 mt-1">Credit</div>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow-lg transform transition-all duration-300"
                 style={{ 
                   transform: progress > 90 ? 'scale(1.1)' : 'scale(1)', 
                   opacity: progress > 90 ? 1 : 0.5
                 }}>
              <Award size={32} className="text-purple-400" />
              <div className="text-sm text-slate-300 mt-1">Score</div>
            </div>
          </div>
          
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-slate-300 mt-2">Processing financial data...</p>
          </div>
        </div>
      </div>
      
      <div className={`transition-opacity duration-500 ${animationState === 'counting' ? 'opacity-100' : 'opacity-0 absolute'}`}>
        <div className={`transform transition-all duration-1000 scale-100 text-center`}>
          <div className="mb-4 relative">
            <div className="inline-block w-64 h-64 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-8 border-slate-700 flex items-center justify-center shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-800 opacity-50 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-6xl font-bold ${getScoreColor()} transition-colors duration-300 filter drop-shadow-lg`} 
                     style={{ textShadow: '0 0 15px rgba(255,255,255,0.5)' }}>
                  {score}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-900 opacity-30"></div>
            </div>
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center filter drop-shadow-lg">
              <Award size={24} className="text-white" />
            </div>
          </div>
          <div className={`text-2xl font-semibold ${getScoreColor()} transition-colors duration-300`}>
            {getScoreRating()}
          </div>
          <p className="text-slate-300 mt-2">Your CIBIL Score</p>
        </div>
      </div>
      
      <div className={`transition-opacity duration-500 ${animationState === 'final' ? 'opacity-100' : 'opacity-0 absolute'}`}>
        <div className="w-full h-full flex items-center">
          <div className="absolute left-0 ml-32">
            <div className={`transform transition-all duration-1000 flex flex-col items-start animate-slide-left`}>
              <div className="flex items-center mb-6">
                <Award size={64} className="text-blue-500 mr-3" />
                <h2 className="text-white text-4xl font-bold">CIBIL Score</h2>
              </div>
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-12 rounded-xl shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-w-[500px]">
                <div className="mb-6 text-center">
                  <span className={`text-8xl font-bold ${getScoreColor()}`}>{finalScore}</span>
                  <div className={`text-3xl font-medium ${getScoreColor()} mt-3`}>{getScoreRating()}</div>
                </div>
                <div className="w-full bg-slate-600 h-4 rounded-full mt-8">
                  <div 
                    className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-4 rounded-full"
                    style={{ width: `${(finalScore / 900) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-slate-400 mt-3">
                  <span>300</span>
                  <span>900</span>
                </div>
                <div className="mt-8 text-slate-300 text-lg">
                  <div className="flex items-center">
                    <ChevronRight size={24} className="text-green-400" />
                    <span>Updated on April 10, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-35 transform -translate-y-1/2 animate-slide-top pointer-events-none">
            <div className="text-white space-y-4 max-w-md">
              <p className="text-4xl font-semibold">
                On the basis of your <span className='text-blue-500'>CIBIL</span> score, you are eligible for a loan of <span className="text-red-500">₹10,000</span>
              </p>
              <p className="text-xl mt-15 text-gray-400">
                To increase the limit further, please upload your <Link href="#" className="text-blue-500 hover:text-blue-400 underline"> bank statement</Link> here
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </BackgroundBeamsWithCollision>
    <Footer />
    </>
  )}

      
"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Shield,
  Users,
  Sparkles,
} from "lucide-react";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Empowering Care",
      subtitle: "AI-Driven Solutions",
      description:
        "Transform caregiving with intelligent support systems that understand and adapt to unique needs",
      icon: Heart,
      gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
      bgPattern:
        "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(217, 70, 239, 0.2) 0%, transparent 50%)",
      accentColor: "rose",
    },
    {
      id: 2,
      title: "Protected & Secure",
      subtitle: "Advanced Monitoring",
      description:
        "24/7 AI-powered safety monitoring ensures peace of mind for families and caregivers",
      icon: Shield,
      gradient: "from-blue-500 via-cyan-500 to-teal-600",
      bgPattern:
        "radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)",
      accentColor: "cyan",
    },
    {
      id: 3,
      title: "Connected Care",
      subtitle: "Community Support",
      description:
        "Build stronger connections between caregivers, families, and care recipients through AI collaboration",
      icon: Users,
      gradient: "from-violet-500 via-purple-500 to-indigo-600",
      bgPattern:
        "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)",
      accentColor: "purple",
    },
    {
      id: 4,
      title: "Intelligent Insights",
      subtitle: "Predictive Analytics",
      description:
        "Harness the power of AI to anticipate needs and optimize care delivery",
      icon: Sparkles,
      gradient: "from-amber-500 via-orange-500 to-red-600",
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)",
      accentColor: "orange",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <div className="relative max-w-7xl mx-auto h-screen overflow-hidden">
      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-1000"
        style={{ background: currentSlideData.bgPattern }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content container */}
      <div className="relative h-full flex items-center justify-center px-5 md:px-7">
        <div className=" w-full">
          {/* Slide content */}
          <div className="relative">
            {slides.map((slide, index) => {
              const SlideIcon = slide.icon;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : index < currentSlide
                        ? "opacity-0 -translate-x-12"
                        : "opacity-0 translate-x-12"
                  }`}
                  style={{
                    position: index === currentSlide ? "relative" : "absolute",
                  }}
                >
                  {/* Icon floating animation */}
                  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl">
                      {/* Subtitle */}
                      <div
                        className={`inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r ${slide.gradient} bg-opacity-20 border border-white/10 backdrop-blur-sm`}
                      >
                        <span className="text-sm font-semibold text-white/90 tracking-wider uppercase">
                          {slide.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span
                          className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent animate-gradient`}
                        >
                          {slide.title}
                        </span>
                      </h1>

                      {/* Description */}
                      <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-xl">
                        {slide.description}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                          className={`group px-8 py-4 bg-gradient-to-r ${slide.gradient} rounded-full font-semibold text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                        >
                          <span className="relative z-10">Get Started</span>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </button>
                        <button className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 bg-gradient-to-r " + slide.gradient
                  : "w-8 bg-white/30 hover:bg-white/50"
              }`}
            />
            {index === currentSlide && (
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} blur-md opacity-50 rounded-full`}
              />
            )}
          </button>
        ))}
      </div>


      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

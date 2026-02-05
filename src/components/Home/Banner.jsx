"use client";

import React, { useState, useEffect } from "react";
import { Heart, Shield, Users, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Empowering Care",
      subtitle: "AI-Driven Solutions",
      description:
        "Transform caregiving with intelligent support systems that adapt to unique needs.",
      icon: Heart,
      gradient: "from-[var(--gradient-start)] to-[var(--gradient-end)]",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Protected & Secure",
      subtitle: "Advanced Monitoring",
      description:
        "24/7 AI-powered safety monitoring ensures peace of mind for families.",
      icon: Shield,
      gradient: "from-[var(--brand-blue)] to-[var(--brand-purple)]",
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Connected Care",
      subtitle: "Community Support",
      description:
        "Build stronger connections between caregivers and families through collaboration.",
      icon: Users,
      gradient: "from-[var(--brand-purple)] to-[var(--accent)]",
      image:
        "https://i.pinimg.com/736x/85/a7/32/85a7326b0ac3a140dbd54e3baa73b80f.jpg",
    },
    {
      id: 4,
      title: "Intelligent Insights",
      subtitle: "Predictive Analytics",
      description:
        "Harness the power of AI to anticipate needs and optimize care delivery.",
      icon: Sparkles,
      gradient: "from-[var(--accent)] to-[var(--secondary)]",
      image:
        "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative max-w-7xl mx-auto flex items-center overflow-hidden bg-background py-7 md:py-15">
      {/* Decorative blurred accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container px-5 md:px-7 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 ">
          {/* Left Side: Content */}
          <div className="relative min-h-50 md:h-auto flex flex-col justify-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6 pointer-events-none"
                }`}
              >
                <div className="inline-flex items-center gap-2 badgePrimary mb-6 animate-fade-in">
                  <slide.icon size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
                  {slide.title.split(" ")[0]} <br />
                  <span className="textGradient">
                    {slide.title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="btnPrimary flex items-center gap-2 group">
                    Get Started{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button className="btnOutline">Learn More</button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image */}
          <div className="relative hidden lg:block h-100">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-95 rotate-2 pointer-events-none"
                }`}
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-border shadow-brand-lg">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>

                {/* Floating card */}
                <div className="cardGlass bg-white/60 text-white absolute bottom-8 -left-12 max-w-[240px] shadow-xl animate-slide-up">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${slide.gradient} text-white`}
                    >
                      <slide.icon size={20} />
                    </div>
                    <span className="font-bold text-accent text-sm">
                      Safe Care
                    </span>
                  </div>
                  <p className="text-xs font-medium text-accent">
                    Live AI monitoring enabled for this session.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="md:mt-10 mt-25 justify-center flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="py-4"
            >
              <div className="h-1.5 w-12 md:w-20 bg-muted rounded-full overflow-hidden relative">
                <div
                  className={`absolute h-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-brand"
                      : "w-0"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

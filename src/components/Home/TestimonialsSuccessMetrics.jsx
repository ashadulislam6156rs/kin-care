"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  TrendingUp,
  Users,
  Heart,
  Award,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function TestimonialsSuccessMetrics() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    happyfamilies: 0,
    verifiedcaregivers: 0,
    carehours: 0,
    satisfactionrate: 0,
  });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Mother of Two",
      service: "Baby Care",
      rating: 5,
      image: "👩",
      quote:
        "Finding a trustworthy babysitter was always stressful. This platform connected us with Maria, who has been amazing with our twins. The background check process gave us complete peace of mind.",
      highlight: "Life-changing service",
      location: "New York, NY",
      color: "from-pink-400 to-rose-400",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Son & Primary Caregiver",
      service: "Elderly Care",
      rating: 5,
      image: "👨",
      quote:
        "My father needed daily assistance after his surgery. The caregiver we found through this platform treats him with such dignity and respect. It's been a blessing for our entire family.",
      highlight: "Compassionate and professional",
      location: "Los Angeles, CA",
      color: "from-blue-400 to-indigo-400",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Wife & Advocate",
      service: "Sick People Care",
      rating: 5,
      image: "👩‍⚕️",
      quote:
        "During my husband's recovery from illness, we needed someone with medical experience. The platform matched us with a wonderful caregiver who understood his needs perfectly.",
      highlight: "Expert medical support",
      location: "Chicago, IL",
      color: "from-emerald-400 to-teal-400",
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Working Professional",
      service: "Baby Care",
      rating: 5,
      image: "👨‍💼",
      quote:
        "As a single dad with a demanding job, this service has been invaluable. The caregiver is reliable, engaging with my son, and the booking system is so convenient.",
      highlight: "Reliable and convenient",
      location: "Austin, TX",
      color: "from-amber-400 to-orange-400",
    },
  ];

  const metrics = [
    {
      id: 1,
      label: "Happy Families",
      value: 10000,
      suffix: "+",
      icon: Users,
      color: "from-violet-400 to-purple-400",
      description: "Trust us daily",
    },
    {
      id: 2,
      label: "Verified Caregivers",
      value: 5000,
      suffix: "+",
      icon: Award,
      color: "from-blue-400 to-cyan-400",
      description: "Background checked",
    },
    {
      id: 3,
      label: "Care Hours Delivered",
      value: 500000,
      suffix: "+",
      icon: Clock,
      color: "from-emerald-400 to-teal-400",
      description: "Of quality care",
    },
    {
      id: 4,
      label: "Satisfaction Rate",
      value: 98,
      suffix: "%",
      icon: Heart,
      color: "from-rose-400 to-pink-400",
      description: "Customer rating",
    },
  ];

  // Animate counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    metrics.forEach((metric) => {
      let currentValue = 0;
      const increment = metric.value / steps;
      const counterKey = metric.label.toLowerCase().replace(/\s+/g, "");

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= metric.value) {
          currentValue = metric.value;
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [counterKey]: Math.floor(currentValue),
        }));
      }, interval);
    });
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-7 md:py-15 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-7">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-200/30 to-purple-200/30 border border-violet-300/30 backdrop-blur-sm">
            <Star className="w-4 h-4 text-violet-400" fill="currentColor" />
            <span className="text-sm font-bold text-violet-400 tracking-wider uppercase">
              Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-black">Trusted by Thousands of</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Happy Families
            </span>
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real stories from families who found the perfect care through our
            platform
          </p>
        </div>

        {/* Success Metrics */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {metrics.map((metric) => {
            const Icon = metric.icon;
            const counterKey = metric.label.toLowerCase().replace(/\s+/g, "");
            const counterValue = counters[counterKey] || 0;
            const displayValue =
              counterKey === "satisfactionrate"
                ? counterValue
                : formatNumber(counterValue);

            return (
              <div
                key={metric.id}
                className="group shadow-md relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-gradient-to-br hover:from-violet-400 hover:to-pink-400 transition-all duration-500 hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}
                />
                <div className="relative flex flex-col items-center justify-center">
                  <div
                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                    {displayValue}
                    {metric.suffix}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 md:px-20 border border-white/20 shadow-2xl overflow-hidden">
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${testimonials[currentTestimonial].color} opacity-20 rounded-full blur-3xl`}
              />

              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-700 ${
                      index === currentTestimonial
                        ? "opacity-100 relative"
                        : "opacity-0 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="text-center lg:text-left space-y-6">
                        <div className="inline-flex lg:flex flex-col items-center lg:items-start gap-4">
                          <div
                            className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-5xl shadow-2xl animate-float`}
                          >
                            {testimonial.image}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-black mb-1">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-700 font-medium mb-2">
                              {testimonial.role}
                            </p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span className="text-sm text-gray-700">
                                {testimonial.service}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center lg:justify-start gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.location}
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-6">
                        <Quote className="w-12 h-12 text-black/30" />
                        <blockquote className="text-xl lg:text-2xl text-black/80 leading-relaxed font-light italic">
                          {testimonial.quote}
                        </blockquote>
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${testimonial.color} bg-opacity-30 border border-white/20`}
                        >
                          <TrendingUp className="w-4 h-4 text-black" />
                          <span className="text-sm font-semibold text-black">
                            {testimonial.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute hidden  cursor-pointer left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 md:flex items-center justify-center hover:bg-accent transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-black group-hover:text-white transition-all" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute hidden right-4 cursor-pointer top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 md:flex items-center justify-center hover:bg-accent transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-black group-hover:text-white transition-all" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentTestimonial
                      ? "w-12 h-3 bg-gradient-to-r from-violet-400 to-purple-400"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

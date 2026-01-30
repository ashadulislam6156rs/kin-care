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
      color: "from-pink-500 to-rose-500",
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
      color: "from-blue-500 to-indigo-500",
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
      color: "from-emerald-500 to-teal-500",
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
      color: "from-amber-500 to-orange-500",
    },
  ];

  const metrics = [
    {
      id: 1,
      label: "Happy Families",
      value: 10000,
      suffix: "+",
      icon: Users,
      color: "from-violet-500 to-purple-500",
      description: "Trust us daily",
    },
    {
      id: 2,
      label: "Verified Caregivers",
      value: 5000,
      suffix: "+",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      description: "Background checked",
    },
    {
      id: 3,
      label: "Care Hours Delivered",
      value: 500000,
      suffix: "+",
      icon: Clock,
      color: "from-emerald-500 to-teal-500",
      description: "Of quality care",
    },
    {
      id: 4,
      label: "Satisfaction Rate",
      value: 98,
      suffix: "%",
      icon: Heart,
      color: "from-rose-500 to-pink-500",
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

    

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm">
            <Star className="w-4 h-4 text-violet-400" fill="currentColor" />
            <span className="text-sm font-bold text-violet-300 tracking-wider uppercase">
              Success Stories
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Trusted by Thousands of</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Happy Families
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real stories from families who found the perfect care through our
            platform
          </p>
        </div>

        {/* Success Metrics */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {metrics.map((metric, index) => {
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
                className="group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {displayValue}
                    {metric.suffix}
                  </div>

                  <div className="text-sm font-semibold text-slate-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-slate-500">
                    {metric.description}
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${metric.color} opacity-10 rounded-2xl blur-xl`}
                />
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
            {/* Main testimonial card */}
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 lg:p-12 border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Decorative corner gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${testimonials[currentTestimonial].color} opacity-10 rounded-full blur-3xl`}
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
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Left side - User info */}
                      <div className="text-center lg:text-left space-y-6">
                        <div className="inline-flex lg:flex flex-col items-center lg:items-start gap-4">
                          <div
                            className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-5xl shadow-2xl animate-float`}
                          >
                            {testimonial.image}
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {testimonial.name}
                            </h3>
                            <p className="text-slate-400 font-medium mb-2">
                              {testimonial.role}
                            </p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600/50">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span className="text-sm text-slate-300">
                                {testimonial.service}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center lg:justify-start gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>

                        {/* Location */}
                        <div className="text-sm text-slate-500">
                          {testimonial.location}
                        </div>
                      </div>

                      {/* Right side - Quote */}
                      <div className="lg:col-span-2 space-y-6">
                        <Quote className="w-12 h-12 text-violet-400/30" />

                        <blockquote className="text-xl lg:text-2xl text-slate-200 leading-relaxed font-light italic">
                          "{testimonial.quote}"
                        </blockquote>

                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${testimonial.color} bg-opacity-20 border border-white/10`}
                        >
                          <TrendingUp className="w-4 h-4 text-white" />
                          <span className="text-sm font-semibold text-white">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-700/50 backdrop-blur-md border border-slate-600/50 flex items-center justify-center hover:bg-slate-600/50 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-700/50 backdrop-blur-md border border-slate-600/50 flex items-center justify-center hover:bg-slate-600/50 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all" />
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
                      ? "w-12 h-3 bg-gradient-to-r from-violet-500 to-purple-500"
                      : "w-3 h-3 bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-slate-400 mb-6 text-lg">
            Join thousands of satisfied families today
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-bold text-white shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
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

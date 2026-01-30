"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Shield,
  Users,
  Clock,
  Star,
  CheckCircle2,
  TrendingUp,
  Award,
} from "lucide-react";

export default function AboutMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
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

  const stats = [
    { label: "Trusted Families", value: "10,000+", icon: Users },
    { label: "Verified Caretakers", value: "5,000+", icon: Shield },
    { label: "Success Rate", value: "98%", icon: Star },
    { label: "Available 24/7", value: "Always", icon: Clock },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified & Trusted",
      description:
        "Every caretaker undergoes thorough background checks and verification to ensure your family's safety",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description:
        "Match with caretakers who understand your unique needs - from infant care to elderly support",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: Clock,
      title: "Easy Booking",
      description:
        "Book trusted caregiving services in minutes through our intuitive platform - anytime, anywhere",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "We maintain the highest standards through continuous monitoring and feedback from families like yours",
      color: "from-amber-400 to-orange-500",
    },
  ];

  const services = [
    { name: "Child Care & Babysitting", emoji: "👶" },
    { name: "Elderly Care", emoji: "👴" },
    { name: "Special Needs Support", emoji: "🤝" },
    { name: "Home Health Care", emoji: "🏥" },
    { name: "Companion Services", emoji: "💝" },
    { name: "Respite Care", emoji: "🌟" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/50">
            <Heart className="w-4 h-4 text-rose-600" fill="currentColor" />
            <span className="text-sm font-bold text-rose-900 tracking-wide uppercase">
              About Our Mission
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Making Caregiving{" "}
            </span>
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Simple & Secure
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            We believe every family deserves access to trusted, reliable
            caregiving services. Our platform connects you with verified
            professionals who care as much as you do.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-rose-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Mission Statement */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-100 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-100/50 to-pink-100/50 rounded-full blur-3xl -z-0" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Your Familys Well-being is Our Priority
                </h3>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    We understand that finding the right care for your loved
                    ones can be overwhelming. That is why we have created a
                    platform that puts{" "}
                    <strong className="text-slate-900">
                      trust, safety, and convenience
                    </strong>{" "}
                    at the forefront.
                  </p>
                  <p>
                    Whether you need a babysitter for a few hours, ongoing
                    elderly care, or specialized support for family members with
                    unique needs, our platform makes it effortless to connect
                    with qualified, compassionate caretakers.
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>
                      Every caretaker is thoroughly vetted, background-checked,
                      and continuously rated by families
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative">
                {/* Service categories bubbles */}
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-5 border border-slate-200/50 hover:border-rose-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="text-3xl mb-2">{service.emoji}</div>
                      <div className="text-sm font-semibold text-slate-800">
                        {service.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Today
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 border-2 border-slate-300 rounded-full font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">
              Learn More About Us
            </button>
          </div>

          <p className="mt-6 text-slate-500">
            Join thousands of families who trust us with their most precious
            relationships
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}

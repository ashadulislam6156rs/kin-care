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
        "Every caretaker undergoes strict background checks to ensure safety and reliability.",
      color: "from-[#657EFF] to-[#9836FF]",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description:
        "We match you with caretakers who truly understand your family's needs.",
      color: "from-[#9836FF] to-[#221F3F]",
    },
    {
      icon: Clock,
      title: "Easy Booking",
      description:
        "Book caregiving services instantly with our fast and simple platform.",
      color: "from-[#221F3F] to-[#657EFF]",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Continuous monitoring and real feedback ensure top-quality care.",
      color: "from-[#657EFF] to-[#9836FF]",
    },
  ];

  const services = [
    { name: "Child Care & Babysitting", emoji: "👶" },
    { name: "Elderly Care", emoji: "👴" },
    { name: "Special Needs Support", emoji: "🤝" },
    { name: "Home Health Care", emoji: "🏥" },
    { name: "Companion Services", emoji: "💙" },
    { name: "Respite Care", emoji: "✨" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#657EFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#9836FF]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#221F3F]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Our Mission
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Care Made </span>
            <span className="bg-gradient-to-r from-[#657EFF] to-[#9836FF] bg-clip-text text-transparent">
              Simple & Secure
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connecting families with trusted and verified caretakers safely,
            easily, and reliably.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="cardPrimary group hover:shadow-brand transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#657EFF] to-[#9836FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="cardPrimary mb-20 p-8 lg:p-12 hover:shadow-brand-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                Your Family's Safety Comes First
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus on trust, transparency, and ease so you can find the
                right care without stress.
              </p>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Every caretaker is verified and continuously reviewed to
                  ensure the highest standards of care
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="surface p-5 rounded-2xl border border-border hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {s.emoji}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="cardPrimary group hover:-translate-y-1 hover:shadow-brand transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {f.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#657EFF] to-[#9836FF] text-white font-bold rounded-full shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}

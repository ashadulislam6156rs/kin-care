"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Baby,
  HeartPulse,
  Stethoscope,
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react";

export default function ServicesOverview() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      id: 1,
      name: "Baby Care",
      title: "Professional Baby Care Services",
      description:
        "Expert care for your little ones with certified nannies and babysitters.",
      icon: Baby,
      image: "👶",
      color: "from-[var(--gradient-start)] to-[var(--gradient-end)]",
      bgGradient: "from-[var(--surface)] to-white",
      features: [
        { text: "Certified & CPR-trained caregivers", icon: Shield },
        { text: "Newborn to toddler specialists", icon: Baby },
        { text: "Flexible scheduling options", icon: Clock },
        { text: "Daily activity reports", icon: CheckCircle },
      ],
      includes: [
        "Feeding & diaper changes",
        "Playtime & development activities",
        "Sleep routine management",
        "Safety monitoring",
        "Parent communication",
      ],
      stats: { caregivers: "2,000+", experience: "10+ years", rating: "4.9/5" },
    },
    {
      id: 2,
      name: "Elderly Service",
      title: "Compassionate Elderly Care",
      description:
        "Respectful care for seniors, ensuring safety, dignity, and companionship.",
      icon: HeartPulse,
      image: "👴",
      color: "from-[var(--accent)] to-[var(--secondary)]",
      bgGradient: "from-[var(--surface)] to-white",
      features: [
        { text: "Experienced senior care specialists", icon: Star },
        { text: "Medication reminders", icon: Clock },
        { text: "Mobility assistance", icon: Users },
        { text: "Companionship & activities", icon: HeartPulse },
      ],
      includes: [
        "Personal care & hygiene",
        "Meal preparation",
        "Medication management",
        "Transportation support",
        "Social engagement",
      ],
      stats: { caregivers: "1,500+", experience: "15+ years", rating: "4.8/5" },
    },
    {
      id: 3,
      name: "Medical Home Care",
      title: "Medical Home Care Support",
      description:
        "Professional home medical care for recovery and chronic conditions.",
      icon: Stethoscope,
      image: "🏥",
      color: "from-[var(--secondary)] to-[var(--brand-purple)]",
      bgGradient: "from-[var(--surface)] to-white",
      features: [
        { text: "Medically trained caregivers", icon: Stethoscope },
        { text: "Post-surgery recovery support", icon: HeartPulse },
        { text: "Health monitoring", icon: Calendar },
        { text: "Emergency response", icon: CheckCircle },
      ],
      includes: [
        "Vital signs monitoring",
        "Wound care assistance",
        "Medication administration",
        "Doctor coordination",
        "Emergency response",
      ],
      stats: { caregivers: "1,200+", experience: "12+ years", rating: "4.9/5" },
    },
  ];

  const currentService = services[activeService];
  const ServiceIcon = currentService.icon;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-[var(--surface)] to-white"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--secondary)]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--brand-purple)]/20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-accent/10 border border-accent/30">
            <Star className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-sm font-bold text-accent tracking-wider uppercase">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[var(--foreground)] to-[var(--primary)] bg-clip-text text-transparent">
              Specialized Care for
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent">
              Every Family Member
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional, compassionate caregiving services tailored to your
            family's unique needs
          </p>
        </div>

        {/* Service Tabs */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 ${
                  activeService === index
                    ? "bg-gradient-primary text-white shadow-brand-lg scale-105"
                    : "bg-card text-foreground hover:bg-muted border border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-5 h-5 ${
                      activeService === index ? "animate-pulse" : ""
                    }`}
                  />
                  <span>{service.name}</span>
                </div>
                {activeService === index && (
                  <div
                    className={`absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-50 -z-10`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Service Content */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                activeService === index
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute pointer-events-none translate-x-8"
              }`}
            >
              {activeService === index && (
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Service Card */}
                    <div
                      className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 border border-border shadow-xl`}
                    >
                      <div className="flex items-start gap-6 mb-6">
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl shadow-2xl animate-float`}
                        >
                          {service.image}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(service.stats).map(([key, val]) => (
                          <div
                            key={key}
                            className="text-center p-4 bg-white/70 rounded-xl backdrop-blur-sm"
                          >
                            <div className="text-2xl font-bold text-foreground">
                              {val}
                            </div>
                            <div className="text-xs text-slate-600 font-medium capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
                      <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Star className="w-5 h-5 text-accent" />
                        Key Features
                      </h4>
                      <div className="grid gap-4">
                        {service.features.map((feature, idx) => {
                          const FeatureIcon = feature.icon;
                          return (
                            <div
                              key={idx}
                              className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-surface transition-colors duration-300"
                            >
                              <div
                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}
                              >
                                <FeatureIcon className="w-5 h-5 text-white" />
                              </div>
                              <span className="font-medium text-foreground">
                                {feature.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Includes */}
                    <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
                      <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        Service Includes
                      </h4>
                      <div className="space-y-3">
                        {service.includes.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors duration-300"
                          >
                            <div
                              className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                            >
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div
                      className={`bg-gradient-primary rounded-3xl p-8 text-white shadow-brand-lg relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                      <div className="relative">
                        <h4 className="text-2xl font-bold mb-3">
                          Ready to Book?
                        </h4>
                        <p className="mb-6 text-white/90">
                          Find the perfect caregiver for your family today
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="group px-6 py-3 bg-white text-foreground rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                            Book Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                          <button className="px-6 py-3 border-2 border-white/30 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { label: "Background Checked", icon: Shield },
            { label: "24/7 Support", icon: Clock },
            { label: "Insured Caregivers", icon: CheckCircle },
            { label: "Verified Reviews", icon: Star },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <span className="font-semibold text-foreground">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Animations */}
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
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

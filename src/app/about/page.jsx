import React from "react";
import { Heart, Shield, Clock, Users, Award, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-lg md:text-xl opacity-90 animate-slide-up">
              KineCare - Your trusted partner in providing reliable and
              compassionate care services
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="textGradient">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                KineCare is a modern web application that helps users book
                reliable and trusted care services for children, elderly, or
                sick individuals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that every family deserves access to the best care.
                Our platform makes it easy and safe to find the right caregiver
                for your loved ones.
              </p>
            </div>

            <div className="cardGradient animate-scale-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Compassionate Care
                    </h3>
                    <p className="text-white/80">
                      Ensuring personalized and caring support for every care
                      recipient
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Safety & Trust
                    </h3>
                    <p className="text-white/80">
                      All caregivers are thoroughly vetted and professionally
                      trained
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Flexible Scheduling
                    </h3>
                    <p className="text-white/80">
                      Care services available at your convenience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="textGradient">KineCare</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We are committed to ensuring the best care services for your
              family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cardPrimary group hover:shadow-brand transition-all duration-300 animate-fade-in">
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skilled Caregivers</h3>
              <p className="text-muted-foreground">
                Network of experienced and trained caregivers who provide the
                best care for your loved ones
              </p>
            </div>

            <div
              className="cardPrimary group hover:shadow-brand transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
              <p className="text-muted-foreground">
                Thorough background checks and verification process for all
                caregivers
              </p>
            </div>

            <div
              className="cardPrimary group hover:shadow-brand transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
              <p className="text-muted-foreground">
                Book services for your desired time duration with just a few
                clicks
              </p>
            </div>

            <div
              className="cardPrimary group hover:shadow-brand transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Care</h3>
              <p className="text-muted-foreground">
                Customized care plans tailored to each care recipient's specific
                needs
              </p>
            </div>

            <div
              className="cardPrimary group hover:shadow-brand transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Regular monitoring and feedback system ensures the highest
                quality of service
              </p>
            </div>

            <div
              className="cardPrimary group hover:shadow-brand transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customer support team is ready to assist you at any time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="textGradient">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="cardPrimary text-center hover:shadow-brand-lg transition-all duration-300 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👶</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Child Care</h3>
              <p className="text-muted-foreground">
                Experienced and trained babysitters who will take complete care
                of your child
              </p>
            </div>

            <div
              className="cardPrimary text-center hover:shadow-brand-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👴</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Elderly Care</h3>
              <p className="text-muted-foreground">
                Specially trained caregivers and support for senior citizens
              </p>
            </div>

            <div
              className="cardPrimary text-center hover:shadow-brand-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Care</h3>
              <p className="text-muted-foreground">
                Caregivers with medical training for sick or disabled
                individuals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Caring for Your Loved Ones Today
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Book trusted care services and ensure your family's safety and
              wellbeing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Book a Service
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="textGradient">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compassion</h3>
              <p className="text-muted-foreground text-sm">
                Empathetic and caring approach towards every care recipient
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust</h3>
              <p className="text-muted-foreground text-sm">
                Delivering every service with transparency and integrity
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Committed to providing the highest quality of service
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground text-sm">
                Building a strong and supportive community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

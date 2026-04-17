"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormState("success");
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setFormState("idle");
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative pt-24">
      {/* Hero Section */}
      <SectionContainer>
        <div className="relative min-h-[100svh] flex items-center py-8">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-500/12 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-400/12 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-16">
            <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="cinematic-kicker mb-8">
                  Get in Touch
                </div>
                <h1 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl md:mb-8 md:text-7xl">
                  Let's Build
                  <br />
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    Something Great
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 md:mb-12 leading-relaxed">
                  Ready to transform your digital infrastructure? Our team is standing by 
                  to discuss your project and explore how NEXUS Group can deliver results.
                </p>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-white/40 mb-1">Email</div>
                      <a href="mailto:contact@nexusgroup.ltd" className="text-lg hover:text-white/80 transition-colors">
                        contact@nexusgroup.ltd
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-white/40 mb-1">Phone</div>
                      <a href="tel:+61451994192" className="text-lg hover:text-white/80 transition-colors">
                        +61451994192
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-white/40 mb-1">Address</div>
                      <div className="text-lg">
                        1 Silas Street, East Fremantle, Perth WA 6158.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="cinematic-panel rounded-2xl mt-10 md:mt-12 p-5 sm:p-6">
                  <div className="text-sm text-white/40 mb-2 uppercase tracking-wider">Response Time</div>
                  <div className="text-xl sm:text-2xl font-semibold">Within 24 Hours</div>
                  <div className="text-white/60 mt-2">Our team reviews all inquiries and responds promptly.</div>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="cinematic-panel rounded-3xl relative p-6 sm:p-8 lg:p-12">
                  {formState === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center"
                    >
                      <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send size={28} className="text-green-400" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-white/60">
                        Thank you for reaching out. We'll be in touch within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/70 focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/70 focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm text-white/60 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/70 focus:outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm text-white/60 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/70 focus:outline-none transition-colors text-white"
                        >
                          <option value="" className="bg-[#070a12]">Select a service</option>
                          <option value="communication" className="bg-[#070a12]">Anonymous Communication Gateway</option>
                          <option value="content" className="bg-[#070a12]">Video & Motion Content Studio</option>
                          <option value="software" className="bg-[#070a12]">Software & Business Systems</option>
                          <option value="revenue" className="bg-[#070a12]">STRA Management Consultation</option>
                          <option value="multiple" className="bg-[#070a12]">Multiple Services</option>
                          <option value="other" className="bg-[#070a12]">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/70 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project, timeline, and goals..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground border border-primary/60 hover:brightness-110 transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send size={18} />
                      </motion.button>

                      <p className="text-xs text-center text-white/40">
                        By submitting this form, you agree to our{" "}
                        <Link href="/privacy-policy" className="text-white/65 underline decoration-white/35 underline-offset-2 transition-colors hover:text-white">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

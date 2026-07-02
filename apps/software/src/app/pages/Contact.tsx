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
    budget: "",
    message: ""
  });

  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormState("success");
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
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
                <div className="cinematic-kicker mb-5">
                  Get in Touch
                </div>
                <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  Let's Build{" "}
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    Something Great
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-white/60 mb-7 leading-relaxed max-w-md">
                  Ready to transform your digital infrastructure? Our team is standing by
                  to discuss your project and explore how ZTEC Group can deliver results.
                </p>

                {/* Contact Info */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-xs text-white/40">Email</div>
                      <a href="mailto:info@ztecgroup.au" className="text-sm hover:text-white/80 transition-colors">
                        info@ztecgroup.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-xs text-white/40">Phone</div>
                      <a href="tel:+61451994192" className="text-sm hover:text-white/80 transition-colors">
                        +61451994192
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-xs text-white/40">Address</div>
                      <div className="text-sm">
                        1 Silas Street, East Fremantle, Perth WA 6158.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="cinematic-panel rounded-xl mt-6 p-3.5 sm:p-4 flex items-center gap-3">
                  <span className="text-lg font-semibold text-white flex-shrink-0">24h</span>
                  <span className="h-8 w-px bg-white/10 flex-shrink-0" />
                  <span className="text-sm text-white/55">Our team reviews all inquiries and responds promptly.</span>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="cinematic-panel rounded-2xl relative p-5 sm:p-6 lg:p-7">
                  {formState === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-14 text-center"
                    >
                      <div className="w-14 h-14 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                        <Send size={24} className="text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                      <p className="text-white/60">
                        Thank you for reaching out. We'll be in touch within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div className="border-b border-white/10 pb-3.5">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">Project Intake</p>
                        <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-white">Tell us what you need</h2>
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-[13px] text-white/60 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3.5 py-2.5 text-[15px] rounded-lg bg-black/25 border border-white/14 focus:border-primary/70 focus:bg-black/35 focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[13px] text-white/60 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3.5 py-2.5 text-[15px] rounded-lg bg-black/25 border border-white/14 focus:border-primary/70 focus:bg-black/35 focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div className="grid gap-3.5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="company" className="block text-[13px] text-white/60 mb-1.5">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 text-[15px] rounded-lg bg-black/25 border border-white/14 focus:border-primary/70 focus:bg-black/35 focus:outline-none transition-colors"
                            placeholder="Your Company"
                          />
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-[13px] text-white/60 mb-1.5">
                            Service Interest
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 text-[15px] rounded-lg bg-black/25 border border-white/14 focus:border-primary/70 focus:bg-black/35 focus:outline-none transition-colors text-white"
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
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-[13px] text-white/60 mb-1.5">
                          Budget Range (AUD)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-[15px] rounded-lg bg-black/25 border border-white/14 focus:border-primary/70 focus:bg-black/35 focus:outline-none transition-colors text-white"
                        >
                          <option value="" className="bg-[#070a12]">Select a budget range</option>
                          <option value="under-5k" className="bg-[#070a12]">Under $5,000 AUD</option>
                          <option value="5k-15k" className="bg-[#070a12]">$5,000 - $15,000 AUD</option>
                          <option value="15k-30k" className="bg-[#070a12]">$15,000 - $30,000 AUD</option>
                          <option value="30k-60k" className="bg-[#070a12]">$30,000 - $60,000 AUD</option>
                          <option value="60k-plus" className="bg-[#070a12]">$60,000+ AUD</option>
                          <option value="not-sure" className="bg-[#070a12]">Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[13px] text-white/60 mb-1.5">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full px-3.5 py-2.5 text-[15px] rounded-lg bg-black/25 border border-white/14 focus:border-primary/70 focus:bg-black/35 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project, timeline, and goals..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full rounded-full bg-primary px-6 py-3 text-primary-foreground border border-primary/60 hover:brightness-110 transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send size={17} />
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

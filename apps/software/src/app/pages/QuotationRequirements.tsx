"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  Check,
  CheckCircle2,
  ClipboardList,
  Layers,
  MessageCircle,
  Plug,
  Send,
  Settings2,
  Sparkles,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";
import { SectionContainer } from "../components/SectionContainer";

const projectTypeOptions = [
  "Business Website",
  "E-commerce Platform",
  "Customer Portal",
  "Mobile App",
  "ERP / CRM / HRMS",
  "Internal Operations System",
  "Automation & Integrations",
  "Custom SaaS Product",
] as const;

const serviceOptions = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Mobile App Development",
  "E-commerce Development",
  "Business System Development",
  "Automation Workflows",
  "Reporting & Dashboards",
  "Cloud Deployment",
  "Maintenance & Support",
] as const;

const platformOptions = ["Web App", "iOS", "Android", "Admin Panel", "API Only", "Desktop App"] as const;

const featureOptions = [
  "Authentication & Roles",
  "Payments / Checkout",
  "Booking / Scheduling",
  "Inventory / Orders",
  "CRM / Lead Tracking",
  "HR / Staff Management",
  "Analytics Dashboard",
  "Notifications",
  "Document Management",
  "Third-party Integrations",
] as const;

const integrationOptions = [
  "Stripe",
  "Xero",
  "QuickBooks",
  "Shopify",
  "Meta / Google Ads",
  "Twilio / SMS",
  "WhatsApp",
  "HubSpot",
  "Salesforce",
  "Custom API",
] as const;

const timelineOptions = ["ASAP", "2-4 Weeks", "1-2 Months", "2-3 Months", "3+ Months", "Just Exploring"] as const;

const budgetOptions = ["Under $5k", "$5k-$15k", "$15k-$30k", "$30k-$60k", "$60k+", "Need Guidance"] as const;

const existingSystemOptions = [
  "New Project",
  "Existing Website to Improve",
  "Legacy System Replacement",
  "Partially Built Product",
  "Need Audit First",
] as const;

type QuoteFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  projectSummary: string;
  timeline: string;
  budget: string;
  existingSystem: string;
  requestedServices: string[];
  platformTargets: string[];
  featureNeeds: string[];
  integrations: string[];
  designSupport: string;
  maintenanceSupport: string;
  launchPriority: string;
  additionalNotes: string;
};

const initialFormData: QuoteFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  projectSummary: "",
  timeline: "",
  budget: "",
  existingSystem: "",
  requestedServices: [],
  platformTargets: [],
  featureNeeds: [],
  integrations: [],
  designSupport: "Need both design and development",
  maintenanceSupport: "Yes, ongoing support",
  launchPriority: "Fastest route to usable release",
  additionalNotes: "",
};

type ChipField = keyof Pick<QuoteFormData, "requestedServices" | "platformTargets" | "featureNeeds" | "integrations">;

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] transition-colors focus:border-primary/70 focus:bg-white/[0.07] focus:outline-none";
const labelClass = "mb-2 block text-sm text-white/60";
const chipBaseClass =
  "inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors duration-200";

function SectionHeading({
  icon: Icon,
  index,
  title,
  hint,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  index: string;
  title: string;
  hint: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
        <Icon size={16} />
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-white/35">{index}</span>
          <h2 className="text-base font-semibold text-white">{title}</h2>
        </div>
        <p className="text-xs text-white/45">{hint}</p>
      </div>
    </div>
  );
}

export function QuotationRequirements() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [formState, setFormState] = useState<"idle" | "success">("idle");

  const selectedCount = useMemo(
    () =>
      formData.requestedServices.length +
      formData.platformTargets.length +
      formData.featureNeeds.length +
      formData.integrations.length,
    [formData],
  );

  const toggleListValue = (field: ChipField, value: string) => {
    setFormData((current) => {
      const values = current[field];
      const nextValues = values.includes(value)
        ? values.filter((entry) => entry !== value)
        : [...values, value];
      return { ...current, [field]: nextValues };
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("success");
    window.setTimeout(() => {
      setFormData(initialFormData);
      setFormState("idle");
    }, 4000);
  };

  const renderChipGroup = (field: ChipField, options: readonly string[]) => (
    <div className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const isSelected = formData[field].includes(option);
        return (
          <motion.button
            key={option}
            type="button"
            onClick={() => toggleListValue(field, option)}
            whileTap={{ scale: 0.96 }}
            animate={isSelected ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`${chipBaseClass} ${
              isSelected
                ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(240,180,79,0.35),0_10px_24px_rgba(240,180,79,0.22)]"
                : "border-white/12 bg-white/5 text-white/68 hover:border-white/25 hover:bg-white/8 hover:text-white"
            }`}
            aria-pressed={isSelected}
          >
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                isSelected ? "border-primary-foreground/50 bg-primary-foreground/20" : "border-white/25 bg-transparent"
              }`}
            >
              {isSelected ? <Check size={11} strokeWidth={3} /> : null}
            </span>
            {option}
          </motion.button>
        );
      })}
    </div>
  );

  return (
    <div className="relative pt-24">
      <SectionContainer>
        <div className="relative py-8">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
            <div className="absolute top-[10%] left-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-[8%] right-[8%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-[880px] px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <div className="cinematic-kicker mx-auto mb-6">Software Quotation</div>
              <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Already know what you need?
              </h1>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-white/62 sm:text-lg">
                Pick everything that applies below and submit your requirements in one go. We will
                review the scope and get back to you with a quotation.
              </p>

              <div className="mx-auto mt-6 flex max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-left">
                <MessageCircle size={18} className="shrink-0 text-primary" />
                <p className="text-sm text-white/62">
                  Prefer to talk it through first?{" "}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 font-medium text-white underline decoration-white/30 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary/50"
                  >
                    Contact us instead
                    <ArrowRight size={14} />
                  </Link>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="mt-10"
            >
              <div className="cinematic-panel rounded-3xl p-6 sm:p-8 lg:p-10">
                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-500/15 text-emerald-300">
                      <CheckCircle2 size={30} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Quotation Request Received</h3>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/62">
                      Your software requirements have been captured. We will review the scope and respond with the next steps and quotation direction.
                    </p>
                    <Link href="/services" className="mt-8 inline-block">
                      <span className="inline-flex rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-white/74 transition-colors hover:bg-white/8 hover:text-white">
                        Back to Services
                      </span>
                    </Link>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    {/* 01 — Contact */}
                    <div>
                      <SectionHeading icon={User} index="01" title="Your Details" hint="How can we reach you?" />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                          <input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className={fieldClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className={labelClass}>Email Address *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className={fieldClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
                          <input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+61..."
                            className={fieldClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className={labelClass}>Company / Brand</label>
                          <input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your business name"
                            className={fieldClass}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/8" />

                    {/* 02 — Project */}
                    <div>
                      <SectionHeading icon={ClipboardList} index="02" title="The Project" hint="What are you building?" />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="projectType" className={labelClass}>Project Type *</label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className={`${fieldClass} text-white`}
                          >
                            <option value="" className="bg-[#070a12]">Select project type</option>
                            {projectTypeOptions.map((option) => (
                              <option key={option} value={option} className="bg-[#070a12]">{option}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="existingSystem" className={labelClass}>Current Situation</label>
                          <select
                            id="existingSystem"
                            name="existingSystem"
                            value={formData.existingSystem}
                            onChange={handleChange}
                            className={`${fieldClass} text-white`}
                          >
                            <option value="" className="bg-[#070a12]">Select current status</option>
                            {existingSystemOptions.map((option) => (
                              <option key={option} value={option} className="bg-[#070a12]">{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mt-5">
                        <label htmlFor="projectSummary" className={labelClass}>Project Summary *</label>
                        <textarea
                          id="projectSummary"
                          name="projectSummary"
                          value={formData.projectSummary}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Describe what you want to build, who it is for, and what problem it should solve."
                          className={`${fieldClass} resize-none`}
                        />
                      </div>

                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="timeline" className={labelClass}>Preferred Timeline *</label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            required
                            className={`${fieldClass} text-white`}
                          >
                            <option value="" className="bg-[#070a12]">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option} className="bg-[#070a12]">{option}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" className={labelClass}>Estimated Budget (AUD) *</label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            className={`${fieldClass} text-white`}
                          >
                            <option value="" className="bg-[#070a12]">Select budget range</option>
                            {budgetOptions.map((option) => (
                              <option key={option} value={option} className="bg-[#070a12]">{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/8" />

                    {/* 03 — Requirements */}
                    <div>
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <SectionHeading icon={Boxes} index="03" title="Requirements" hint="Pick everything that applies. Skip what you're unsure about." />
                        {selectedCount > 0 ? (
                          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs text-white/72">
                            <Sparkles size={12} className="text-primary" />
                            {selectedCount} selected
                          </span>
                        ) : null}
                      </div>

                      <div className="space-y-6">
                        <div>
                          <p className="mb-3 flex items-center gap-2 text-sm text-white/60">
                            <Layers size={14} className="text-white/35" /> Requested Services
                          </p>
                          {renderChipGroup("requestedServices", serviceOptions)}
                        </div>
                        <div>
                          <p className="mb-3 flex items-center gap-2 text-sm text-white/60">
                            <Boxes size={14} className="text-white/35" /> Platform Targets
                          </p>
                          {renderChipGroup("platformTargets", platformOptions)}
                        </div>
                        <div>
                          <p className="mb-3 flex items-center gap-2 text-sm text-white/60">
                            <Settings2 size={14} className="text-white/35" /> Feature Needs
                          </p>
                          {renderChipGroup("featureNeeds", featureOptions)}
                        </div>
                        <div>
                          <p className="mb-3 flex items-center gap-2 text-sm text-white/60">
                            <Plug size={14} className="text-white/35" /> Expected Integrations
                          </p>
                          {renderChipGroup("integrations", integrationOptions)}
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/8" />

                    {/* 04 — Preferences */}
                    <div>
                      <SectionHeading icon={Settings2} index="04" title="Preferences & Notes" hint="Help us plan delivery and support." />
                      <div className="grid gap-5 sm:grid-cols-3">
                        <div>
                          <label htmlFor="designSupport" className={labelClass}>Design / UI Need</label>
                          <select
                            id="designSupport"
                            name="designSupport"
                            value={formData.designSupport}
                            onChange={handleChange}
                            className={`${fieldClass} text-white`}
                          >
                            <option value="Need both design and development" className="bg-[#070a12]">Need both design and development</option>
                            <option value="Development only" className="bg-[#070a12]">Development only</option>
                            <option value="Need design audit first" className="bg-[#070a12]">Need design audit first</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="maintenanceSupport" className={labelClass}>Post-launch Support</label>
                          <select
                            id="maintenanceSupport"
                            name="maintenanceSupport"
                            value={formData.maintenanceSupport}
                            onChange={handleChange}
                            className={`${fieldClass} text-white`}
                          >
                            <option value="Yes, ongoing support" className="bg-[#070a12]">Yes, ongoing support</option>
                            <option value="Yes, limited warranty period" className="bg-[#070a12]">Yes, limited warranty period</option>
                            <option value="No, project only" className="bg-[#070a12]">No, project only</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="launchPriority" className={labelClass}>Launch Priority</label>
                          <select
                            id="launchPriority"
                            name="launchPriority"
                            value={formData.launchPriority}
                            onChange={handleChange}
                            className={`${fieldClass} text-white`}
                          >
                            <option value="Fastest route to usable release" className="bg-[#070a12]">Fastest route to usable release</option>
                            <option value="Balanced speed and scope" className="bg-[#070a12]">Balanced speed and scope</option>
                            <option value="Highest polish first" className="bg-[#070a12]">Highest polish first</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-5">
                        <label htmlFor="additionalNotes" className={labelClass}>Additional Notes</label>
                        <textarea
                          id="additionalNotes"
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Anything else we should know about stakeholders, compliance, internal workflows, or rollout plans?"
                          className={`${fieldClass} resize-none`}
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-primary/60 bg-primary px-6 py-4 text-primary-foreground transition-colors hover:brightness-110"
                    >
                      <span>Submit Requirements</span>
                      <Send size={18} />
                    </motion.button>

                    <p className="text-center text-xs text-white/40">
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
      </SectionContainer>
    </div>
  );
}

import React, { useState } from "react";
import { useBooking } from "../context/BookingContext";
import PageTransition from "../components/PageTransition";
import { Mail, Phone, Clock, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const { submitInquiry, isSubmitting, submitSuccess, getWhatsAppLink } = useBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "portraits",
    date: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submitInquiry(formData);
    if (success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "portraits",
        date: "",
        details: "",
      });
    }
  };

  const projectCategories = [
    { value: "portraits", label: "Portraits / Editorial Heads" },
    { value: "fashion", label: "Fashion / Campaign Shoots" },
    { value: "weddings", label: "Weddings / Elopements" },
    { value: "corporate", label: "Corporate / Event Branding" },
    { value: "product", label: "Product / Commercial Object" },
    { value: "landscape", label: "Wildlife & Landscape Fine Art" },
    { value: "real-estate", label: "Real Estate / Interior Design" },
    { value: "drone", label: "Drone / Aerial Perspective" },
  ];

  return (
    <PageTransition>
      <div className="bg-brand-bg text-brand-text min-h-screen">
        
        {/* Title Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 md:px-12 w-full border-b border-brand-accent/20 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent mb-3 block">
              Collaborations
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-brand-text mb-4">
              Get In Touch
            </h1>
            <p className="font-sans text-[10px] tracking-widest uppercase text-brand-accent italic">
              Bookings — Inquiries — Commissions
            </p>
          </div>
        </section>

        {/* Main Grid: Form & Info */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Form */}
            <div className="w-full lg:w-7/12">
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-brand-text mb-8 text-center lg:text-left">
                Send an Inquiry
              </h2>

              {submitSuccess ? (
                <div className="bg-[#FAF9F6] border border-emerald-600/30 p-8 rounded-[2px] text-center mb-8 flex flex-col items-center gap-4 animate-fade-in shadow-sm">
                  <CheckCircle2 size={32} className="text-emerald-700" />
                  <div>
                    <h3 className="font-serif text-lg text-emerald-950 font-medium">Inquiry Submitted</h3>
                    <p className="font-sans text-xs text-brand-muted mt-2 leading-relaxed max-w-sm">
                      Thank you. We have received your project details. Our creative team will email you within 24 hours to coordinate.
                    </p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border-b border-brand-accent/40 focus:border-brand-text outline-none py-2 text-xs sm:text-sm font-sans tracking-wide transition-colors duration-300"
                      placeholder="E.g., Charlotte Laurent"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border-b border-brand-accent/40 focus:border-brand-text outline-none py-2 text-xs sm:text-sm font-sans tracking-wide transition-colors duration-300"
                      placeholder="E.g., charlotte@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-transparent border-b border-brand-accent/40 focus:border-brand-text outline-none py-2 text-xs sm:text-sm font-sans tracking-wide transition-colors duration-300"
                      placeholder="E.g., +1 (555) 019-2834"
                    />
                  </div>

                  {/* Project Category */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold">
                      Inquiry Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="bg-transparent border-b border-brand-accent/40 focus:border-brand-text outline-none py-2.5 text-xs sm:text-sm font-sans tracking-wide transition-colors duration-300 cursor-pointer"
                    >
                      {projectCategories.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-brand-bg text-brand-text">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Date */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold">
                    Preferred Timeline / Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-transparent border-b border-brand-accent/40 focus:border-brand-text outline-none py-2 text-xs sm:text-sm font-sans tracking-wide transition-colors duration-300 cursor-pointer text-brand-muted"
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="details" className="font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold">
                    Creative Outline & Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="bg-transparent border border-brand-accent/40 focus:border-brand-text outline-none p-3 text-xs sm:text-sm font-sans tracking-wide transition-colors duration-300 resize-none rounded-[2px]"
                    placeholder="Describe your brand campaign, elopement locations, mood board concepts, or product specifics."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-dark text-brand-bg font-sans text-xs tracking-widest uppercase py-4 mt-4 hover:bg-brand-accent hover:text-brand-dark transition-all duration-500 ease-cinematic rounded-[2px] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-brand-bg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Studio Info */}
            <div className="w-full lg:w-5/12 flex flex-col gap-10 lg:sticky lg:top-28">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-brand-text mb-6 text-center lg:text-left">
                  Studio Channels
                </h2>
                <p className="font-sans text-xs text-brand-muted leading-relaxed font-light mb-8 text-center lg:text-left">
                  For commercial licensing, publication releases, or urgent elopement assignments, please reach out via telephone or direct message.
                </p>
              </div>

              {/* Contacts */}
              <div className="flex flex-col gap-6 font-sans text-xs text-brand-muted px-4 sm:px-0">
                <div className="flex items-start gap-4">
                  <Mail size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold mb-1">Email inquiries</span>
                    <a href="mailto:inquire@skystudios.media" className="text-xs sm:text-sm hover:underline">
                      inquire@skystudios.media
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold mb-1">Telephone</span>
                    <a href="tel:+1234567890" className="text-xs sm:text-sm hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-sans text-[9px] tracking-widest uppercase text-brand-accent font-semibold mb-1">Office Hours</span>
                    <p className="text-xs sm:text-sm text-brand-muted">Monday — Friday // 09:00 - 18:00 EST</p>
                  </div>
                </div>
              </div>

              {/* Direct Line WhatsApp Button */}
              <div className="border-t border-brand-accent/20 pt-8 mt-4 px-4 sm:px-0">
                <span className="block font-sans text-[9px] tracking-mega uppercase text-brand-accent font-semibold mb-4 text-center lg:text-left">
                  Live Studio Chat
                </span>
                <p className="font-sans text-xs text-brand-muted leading-relaxed mb-6 font-light text-center lg:text-left">
                  Click below to launch an instant chat with our production director. Best for quick questions on session schedules.
                </p>
                <a
                  href={getWhatsAppLink("Hello skystudios, I am looking to book a photography session with you. Are you available next month?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-brand-bg py-3.5 px-6 rounded-[2px] font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-colors duration-300 font-medium"
                >
                  <MessageSquare size={16} />
                  <span>Chat via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>
        
      </div>
    </PageTransition>
  );
};

export default Contact;

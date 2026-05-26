import React, { useState } from "react";
import { useBooking } from "../context/useBooking";
import PageTransition from "../components/PageTransition";
import { CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const { submitInquiry, isSubmitting, submitSuccess } = useBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Map minimal form to the booking provider's schema
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: "",
      projectType: "general-inquiry",
      date: "",
      details: formData.details,
    };
    const success = await submitInquiry(payload);
    if (success) {
      setFormData({
        name: "",
        email: "",
        details: "",
      });
    }
  };

  return (
    <PageTransition>
      <div className="bg-brand-bg text-brand-text min-h-screen pt-24 pb-16 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* BLOCK 1: Hero Form Grid (align items center for vertical floating centering on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            
            {/* Left: White Image Container (Landscape aspect ratio, increased size, heavy shadow for floating effect) */}
            <div className="flex justify-center w-full">
              <div className="w-full max-w-lg aspect-[3/2] lg:w-[630px] lg:h-[420px] lg:aspect-auto bg-white border border-brand-accent/10 shadow-2xl rounded-[2px] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]"></div>
            </div>
            
            {/* Right: Form styled inside a #bfc9c0 box (taller than the image box) */}
            <div 
              className="border border-brand-accent/15 rounded-[2px] p-6 sm:p-10 md:p-12 flex flex-col gap-4 sm:gap-5 w-full lg:h-[655px] justify-center items-start shadow-md"
              style={{ backgroundColor: "#bfc9c0" }}
            >
              <span className="font-sans text-[10px] tracking-mega uppercase text-brand-dark/70 text-left">
                Lorem Ipsum Dolor
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-left text-brand-text mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h1>
              
              {submitSuccess && (
                <div className="bg-white/80 border border-emerald-600/20 p-4 rounded-sm text-center w-full flex flex-col items-center gap-2 animate-fade-in shadow-sm">
                  <CheckCircle2 size={24} className="text-emerald-700" />
                  <div>
                    <h3 className="font-serif text-sm text-emerald-950 font-medium">Lorem Ipsum</h3>
                    <p className="font-sans text-[11px] text-brand-muted mt-0.5">
                      Thank you. We have received your details.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-brand-dark/80 font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent border-b border-brand-dark/40 focus:border-brand-text outline-none py-1.5 text-sm transition-colors duration-300 text-brand-text font-medium"
                  />
                </div>

                {/* Email address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-brand-dark/80 font-semibold">
                    Email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-b border-brand-dark/40 focus:border-brand-text outline-none py-1.5 text-sm transition-colors duration-300 text-brand-text font-medium"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="details" className="text-[10px] uppercase tracking-widest text-brand-dark/80 font-semibold">
                    Message *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                    className="bg-transparent border-b border-brand-dark/40 focus:border-brand-text outline-none py-1.5 text-sm transition-colors duration-300 resize-none text-brand-text font-medium"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-start mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-2.5 bg-brand-dark text-brand-bg uppercase tracking-widest text-[10px] hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium rounded-sm min-h-[40px]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* BLOCK 2: Contact Information Grid */}
          <div className="border-t border-brand-accent/20 pt-16 pb-20">
            <h2 className="font-serif text-3xl font-light text-center mb-12 text-brand-text">
              Lorem Ipsum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-stretch text-center">
              
              {/* Column 1: Address */}
              <div className="flex flex-col items-center justify-between px-4">
                <div className="text-sm text-brand-muted leading-relaxed max-w-xs">
                  <p>Nairobi</p>
                  <p> </p>
                </div>
              </div>

              {/* Column 2: Hours/Description */}
              <div className="flex flex-col items-center justify-between px-4 md:border-x border-brand-accent/20">
                <p className="text-sm text-brand-muted leading-relaxed max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Column 3: Contact Info */}
              <div className="flex flex-col items-center justify-between px-4">
                <div className="text-sm text-brand-muted leading-relaxed">
                  <p className="hover:text-brand-accent transition-colors duration-300">
                    <a href="mailto: petermungai@mail.com"> petermungai@mail.com</a>
                  </p>
                  <p className="mt-1">+415 7896459</p>
                </div>
              </div>

            </div>
          </div>

          {/* BLOCK 3: Recent Works Grid */}
          <div className="border-t border-brand-accent/20 pt-16">
            <h2 className="font-serif text-3xl font-light text-center mb-12 text-brand-text">
              Lorem Ipsum
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="flex flex-col">
                <div className="w-full aspect-[4/5] bg-white border border-brand-accent/20 shadow-sm transition-transform duration-500 hover:scale-[1.01] mb-4"></div>
                <h4 className="font-serif text-lg font-light text-center text-brand-text mb-1">
                  Lorem Ipsum Dolor
                </h4>
                <h5 className="text-2xs uppercase tracking-widest text-center text-brand-accent">
                  Lorem Ipsum
                </h5>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col">
                <div className="w-full aspect-[4/5] bg-white border border-brand-accent/20 shadow-sm transition-transform duration-500 hover:scale-[1.01] mb-4"></div>
                <h4 className="font-serif text-lg font-light text-center text-brand-text mb-1">
                  Lorem Ipsum Sit Amet
                </h4>
                <h5 className="text-2xs uppercase tracking-widest text-center text-brand-accent">
                  Lorem Ipsum
                </h5>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col">
                <div className="w-full aspect-[4/5] bg-white border border-brand-accent/20 shadow-sm transition-transform duration-500 hover:scale-[1.01] mb-4"></div>
                <h4 className="font-serif text-lg font-light text-center text-brand-text mb-1">
                  Lorem Ipsum Consectetur
                </h4>
                <h5 className="text-2xs uppercase tracking-widest text-center text-brand-accent">
                  Lorem Ipsum
                </h5>
              </div>

            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;

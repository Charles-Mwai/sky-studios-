import { createContext, useState } from "react";

const BookingContext = createContext();

export { BookingContext };

export const BookingProvider = ({ children }) => {
  const [inquiries, setInquiries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // WhatsApp Configuration
  const whatsappNumber = "+1234567890"; // Representative number (e.g., +1 for US/Canada)
  const defaultMessage = "Hello skystudios, I would like to inquire about booking a photography session.";

  const getWhatsAppLink = (message = defaultMessage) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
  };

  const submitInquiry = async (formData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    // Simulate API call for premium UX feel
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const newInquiry = {
      id: `inq-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...formData,
    };
    
    setInquiries((prev) => [newInquiry, ...prev]);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset success state after a few seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
    return true;
  };

  return (
    <BookingContext.Provider
      value={{
        inquiries,
        isSubmitting,
        submitSuccess,
        submitInquiry,
        whatsappNumber,
        getWhatsAppLink,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SymptomChecker from "@/components/SymptomChecker";
import Treatments from "@/components/Treatments";
import Differentials from "@/components/Differentials";
import Specialists from "@/components/Specialists";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Header Navigation */}
      <Navbar />

      {/* Hero Section with GSAP Animations */}
      <Hero />

      {/* Floating Authority Stats Bar */}
      <StatsBar />

      {/* Interactive Symptom & Pain Checker Tool */}
      <SymptomChecker />

      {/* Clinical Treatments & Specialties */}
      <Treatments />

      {/* Differentials & Value Proposition */}
      <Differentials />

      {/* Expert Medical Team & CREFITO Credentials */}
      <Specialists />

      {/* Patient Testimonials & Social Proof */}
      <Testimonials />

      {/* FAQ & Health Insurance Reimbursement */}
      <FaqSection />

      {/* High-converting Booking Form */}
      <BookingSection />

      {/* Clinic Location & Map */}
      <LocationMap />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloat />
    </main>
  );
}

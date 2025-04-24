import { FeaturedSection } from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import LoanProcess from "@/components/LoanProcess";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased overflow-x-hidden">
      <HeroSection />
      <FeaturedSection />
      <LoanProcess />
      <div className="bg-black flex justify-center items-center">
        <Testimonials />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </main>
  );
}

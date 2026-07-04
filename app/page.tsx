import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}
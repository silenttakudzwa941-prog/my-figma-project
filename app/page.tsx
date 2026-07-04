import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero'
import Features from '@/components/Features'
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
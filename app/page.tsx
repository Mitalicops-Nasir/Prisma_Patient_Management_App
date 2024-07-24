import { LoginButton } from "@/components/auth/login-button";
import Achievements from "@/components/Landing_Page/Achievements";
import Blog from "@/components/Landing_Page/Blog";
import CTA from "@/components/Landing_Page/CTA";
import Faculty from "@/components/Landing_Page/Faculty";
import Features from "@/components/Landing_Page/Features";
import Hero from "@/components/Landing_Page/Hero";
import Navbar from "@/components/Landing_Page/Navbar";
import Services from "@/components/Landing_Page/Services";
import Testimonials from "@/components/Landing_Page/Testimonials";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-300 flex flex-col gap-[3rem]">
      <Navbar/>
      <Hero />
      <Features />
      <Services />
      <Achievements />
      <Faculty />
      <Blog />
      <Testimonials />
      <CTA />
    </div>
  );
}

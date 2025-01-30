import CallToAction from "@/components/landing-page/CallToAction";
import FAQ from "@/components/landing-page/FAQ";
import FeaturedIn from "@/components/landing-page/FeaturedIn";
import Footer from "@/components/landing-page/Footer";
import HeroSection from "@/components/landing-page/HeroSection";
import Navbar from "@/components/landing-page/Navbar";
import Services from "@/components/landing-page/Services";
import Stats from "@/components/landing-page/Stats";
import Team from "@/components/landing-page/Team";
import Testimonials from "@/components/landing-page/Testimonials";
import VoteSteps from "@/components/landing-page/VoteSteps";
import React from "react";

function Main() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stats />
      <FeaturedIn />
      <VoteSteps />
      <Services />
      <Team />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Main;

import React from "react";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ComparisonSection } from "./sections/ComparisonSection";
import { GoogleRatesSection } from "./sections/GoogleRatesSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { SecuritySection } from "./sections/SecuritySection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const navigationLinks = [
  { label: "Our rate", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start px-0 py-[22px] relative bg-white overflow-x-hidden">
      <header className="flex h-[74px] items-center justify-between px-[60px] py-3 relative self-stretch w-full bg-white rounded-xl overflow-hidden">
        <div className="flex w-[250px] items-center gap-2.5 relative">
          <img
            className="relative w-36 h-[27.83px] mb-[-5.28px]"
            alt="Group"
            src="/group-2.png"
          />

          <div className="relative flex items-center justify-center flex-1 self-stretch mt-[-1.00px] [font-family:'Archivo',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
            <span className="font-light">powered by </span>
            <span className="font-bold">stripe</span>
          </div>
        </div>

        <nav className="inline-flex gap-10 flex-[0_0_auto] items-center relative">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex justify-center w-fit mt-[-1.00px] [font-family:'Archivo',Helvetica] font-light text-black text-base tracking-[0] leading-[normal] whitespace-nowrap items-center relative hover:font-semibold transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <Button
            variant="outline"
            className="h-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#222222]"
          >
            <span className="text-[#222222] relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Archivo',Helvetica] font-semibold text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Sign in
            </span>
          </Button>

          <Button className="h-auto inline-flex relative flex-[0_0_auto] bg-[#005aee] items-center justify-center gap-2.5 px-6 py-4 rounded-lg hover:bg-[#0047bb]">
            <span className="text-white relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Archivo',Helvetica] font-semibold text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Sign up
            </span>
          </Button>
        </div>
      </header>

      <main className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <HeroSection />
        <GoogleRatesSection />
        <ComparisonSection />
        <HowItWorksSection />
        <SecuritySection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
    </div>
  );
};

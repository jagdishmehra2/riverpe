import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
  {
    id: 1,
    imagePosition: "left",
    imageBg: "url(..//mobile.png)",
    title: "Sign up and open your USD account",
    description:
      "Create your account in minutes and complete quick KYC (PAN + ID) to unlock USD (and EUR) receiving details.",
    cardContent: {
      top: "top-[485px]",
      left: "left-[26px]",
      accountType: "USD Account",
      balance: "USD  $7,000.00",
      showPoweredBy: true,
    },
  },
  {
    id: 2,
    imagePosition: "right",
    imageBg: "url(..//mobile-1.png)",
    title: "Link your platforms & clients",
    description:
      "Add your USD details to Upwork or share them with clients. Receive in USD, then convert at the Google rate with no FX margin.",
    cardContent: {
      top: "top-[629px]",
      left: "left-[18px]",
      label: "You receive",
      amount: "+₹ 7,400 INR",
      amountColor: "text-[#1fcb92]",
      flagSrc: "/flag-round-250-1-2.png",
      iconSrc: "/frame-2147223832.svg",
    },
  },
  {
    id: 3,
    imagePosition: "left",
    imageBg: "url(..//frame-2147223882.png)",
    title: "Get paid—clearly and fast",
    description:
      "See fees and final INR upfront, then settle to your local bank. Track payouts, download statements, and stay compliant from day one.",
    cardContent: {
      top: "top-[629px]",
      left: "left-[18px]",
      label: "Upwork Client",
      amount: "+$2,500 USD",
      amountColor: "text-[#1fcb92]",
      iconSrc: "/frame-2147223831.svg",
      showUsdIcon: true,
    },
  },
];

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col items-start gap-[60px] px-[115px] py-0">
        <div className="flex flex-col items-center gap-2.5 w-full max-w-[1229px]">
          <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-black text-5xl text-center tracking-[0] leading-[normal]">
            Simplifying your payouts, so you keep more
          </h2>

          <p className="[font-family:'Archivo',Helvetica] font-normal text-[#1f1f1f] text-2xl text-center tracking-[0] leading-9">
            No FX markup, just a flat 0.25%, so more of each payout lands in
            your pocket.
          </p>
        </div>

        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex h-[726px] items-center justify-between w-full max-w-[1229px] ${
              step.imagePosition === "right" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`[background:${step.imageBg}_50%_50%_/_cover] w-[540px] h-[726px] rounded-3xl overflow-hidden relative`}
            >
              {step.id === 1 ? (
                <Card
                  className={`${step.cardContent.top} ${step.cardContent.left} flex flex-col w-[485px] items-start gap-4 px-4 py-6 absolute bg-white rounded-2xl overflow-hidden border-0`}
                >
                  <CardContent className="p-0 w-full">
                    <div className="w-8 h-[33px] rounded-[33554400px] [background:url(..//container-2.png)_50%_50%_/_cover]" />

                    <div className="flex flex-col items-start gap-2 w-full mt-4">
                      <div className="[font-family:'Archivo',Helvetica] font-medium text-xs leading-4 text-[#222222] tracking-[0]">
                        {step.cardContent.accountType}
                      </div>

                      <div className="flex items-center justify-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-xl leading-[normal] text-[#222222] tracking-[0]">
                        {step.cardContent.balance}
                      </div>

                      <div className="flex items-center gap-2 w-full">
                        <div className="bg-[linear-gradient(135deg,rgba(0,90,238,0.75)_0%,rgba(34,226,162,0.75)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Archivo',Helvetica] font-bold text-transparent text-xs tracking-[0] leading-4 whitespace-nowrap">
                          Powered by
                        </div>

                        <img
                          className="w-[70.23px] h-[13.57px]"
                          alt="Group"
                          src="/group-2-4.png"
                        />
                      </div>
                    </div>

                    <Button className="h-8 w-full bg-[#005aee] hover:bg-[#0047bb] items-center justify-center gap-2.5 px-6 py-4 rounded-lg mt-4">
                      <span className="[font-family:'Archivo',Helvetica] font-semibold text-white text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        View Account
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card
                  className={`${step.cardContent.top} ${step.cardContent.left} flex flex-col w-[504px] items-start gap-2.5 p-2 absolute bg-white rounded-2xl overflow-hidden border-0`}
                >
                  <CardContent className="p-0 w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="inline-flex items-center gap-6">
                        <img
                          className="w-[52px] h-14"
                          alt="Frame"
                          src={step.cardContent.iconSrc}
                        />

                        <div className="flex items-center justify-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                          {step.cardContent.label}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-3">
                        {step.cardContent.flagSrc && (
                          <img
                            className="w-[33px] h-[33px] object-cover"
                            alt="Flag round"
                            src={step.cardContent.flagSrc}
                          />
                        )}
                        {step.cardContent.showUsdIcon && (
                          <div className="w-8 h-[33px] rounded-[33554400px] [background:url(..//container-2.png)_50%_50%_/_cover]" />
                        )}

                        <div
                          className={`flex items-center justify-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal ${step.cardContent.amountColor} text-2xl tracking-[0] leading-[normal]`}
                        >
                          {step.cardContent.amount}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="flex flex-col w-[600px] items-start gap-10">
              <div className="flex flex-col items-center gap-2.5 w-full">
                <h3 className="flex items-center justify-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[normal]">
                  {step.title}
                </h3>

                <p className="flex items-center justify-center [font-family:'Archivo',Helvetica] font-light text-[#1f1f1f] text-xl tracking-[0] leading-[30px]">
                  {step.description}
                </p>
              </div>

              <div className="inline-flex items-start gap-10">
                <Button className="h-auto w-[253px] items-center justify-center gap-2.5 px-6 py-4 bg-[#005aee] hover:bg-[#0047bb] rounded-lg">
                  <span className="[font-family:'Archivo',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Get Started
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  className="h-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg hover:bg-transparent"
                >
                  <span className="[font-family:'Archivo',Helvetica] font-semibold text-[#222222] text-base text-center tracking-[0] leading-[normal] underline whitespace-nowrap">
                    Learn how it works
                  </span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

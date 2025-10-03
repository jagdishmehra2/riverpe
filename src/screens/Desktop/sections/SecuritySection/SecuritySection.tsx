import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const securityFeatures = [
  {
    icon: "/icon-1.svg",
    title: "Verified identity (KYC + PAN)",
    description: "PAN + one government ID, with selfie/liveness.",
  },
  {
    icon: "/lucide-globe-lock.svg",
    title: "Bank-grade rails & encryption",
    description:
      "Stripe-powered processing, data encrypted in transit and at rest.",
  },
  {
    icon: "/lucide-brick-wall-shield.svg",
    title: "Real-time monitoring & controls",
    description:
      "Anomaly checks, optional 2FA/device verification, instant receipts/audit trail.",
  },
];

const businessTypes = [
  {
    backgroundImage: "url(../frame-2147223882.png)",
    title: "For Freelancers",
  },
  {
    backgroundImage: "url(../frame-2147223857.png)",
    title: "For \nAgencies",
  },
  {
    backgroundImage: "url(../frame-2147223858.png)",
    title: "For Marketplace",
  },
];

export const SecuritySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start w-full">
      <div className="w-full bg-[#0c0c0c] py-[76px] px-[89px]">
        <div className="max-w-[1262px] mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col w-full max-w-[871px] items-center gap-2.5">
            <h2 className="w-full text-center [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[normal]">
              Your money, handled the right way
            </h2>

            <p className="w-full text-center [font-family:'Archivo',Helvetica] font-normal text-white text-2xl tracking-[0] leading-9">
              Riverpe runs on Stripe-powered rails with bank-grade security.
              Funds move through regulated partners, with KYC/AML checks and
              receipts for every conversion.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 w-full">
            {securityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#005aee] rounded-3xl overflow-hidden border-0"
              >
                <CardContent className="flex flex-col items-start gap-3 p-[30px] pt-[60px] min-h-[268px]">
                  <img className="w-10 h-10" alt="Icon" src={feature.icon} />

                  <div className="flex flex-col items-start gap-3">
                    <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-white text-xl tracking-[0] leading-7 whitespace-nowrap">
                      {feature.title}
                    </h3>

                    <p className="[font-family:'Archivo',Helvetica] font-medium text-white text-sm tracking-[0] leading-[22px]">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="bg-[#005aee] hover:bg-[#0047bb] text-white px-6 py-4 rounded-lg h-auto">
            <span className="[font-family:'Archivo',Helvetica] font-semibold text-base tracking-[0] leading-[normal]">
              How we keep your money safe
            </span>
          </Button>
        </div>
      </div>

      <div className="w-full bg-[#0c0c0c] py-[46px] px-[60px] min-h-[941px]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col items-start gap-2.5 mb-[222px]">
            <h2 className="w-full max-w-[871px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[normal]">
              The same clear payouts, no matter your business
            </h2>

            <p className="w-full max-w-[871px] [font-family:'Archivo',Helvetica] font-normal text-white text-2xl tracking-[0] leading-9">
              One simple flow for everyone: USD in, INR out, transparent
              pricing, receipts for your records.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[60px]">
            {businessTypes.map((business, index) => (
              <Card
                key={index}
                className="rounded-3xl overflow-hidden border-0 h-[540px] bg-cover bg-center bg-no-repeat"
                style={{ background: business.backgroundImage }}
              >
                <CardContent className="flex flex-col justify-between h-full p-0">
                  <div className="flex justify-end p-[25px]">
                    <img
                      className="w-[60px] h-[60px]"
                      alt="Frame"
                      src="/frame-2147223860.svg"
                    />
                  </div>

                  <div className="m-[15px] bg-[#0059ed] rounded-2xl overflow-hidden p-[15px] flex items-center min-h-[142px]">
                    <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[normal] whitespace-pre-line">
                      {business.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

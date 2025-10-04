import React from "react";
import { Link } from "react-router-dom";

export const AccountType = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex items-center px-12 py-6 border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-36 h-[27.83px]"
            alt="Riverpe Logo"
            src="/group-2.png"
          />
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-[1200px]">
          <h1 className="text-center [font-family:'Archivo',Helvetica] font-semibold text-[40px] text-black tracking-[0] leading-[1.2] mb-16">
            What kind of account would you like to open?
          </h1>

          <div className="flex gap-8 justify-center items-stretch">
            <button className="flex-1 max-w-[360px] bg-white border-2 border-gray-300 rounded-2xl p-8 hover:border-[#2e5cef] hover:shadow-lg transition-all flex flex-col items-center">
              <div className="w-40 h-40 mb-6 flex items-center justify-center">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="50" width="40" height="50" fill="#E8F0FE" rx="4"/>
                  <rect x="75" y="40" width="50" height="60" fill="#D2E3FC" rx="4"/>
                  <circle cx="55" cy="45" r="15" fill="#4285F4"/>
                  <path d="M50 40 C 50 35, 60 35, 60 40 L 60 50 L 50 50 Z" fill="#1967D2"/>
                  <rect x="45" y="70" width="5" height="20" fill="#174EA6" rx="1"/>
                  <rect x="60" y="70" width="5" height="20" fill="#174EA6" rx="1"/>
                  <rect x="35" y="95" width="30" height="3" fill="#0D47A1" rx="1"/>
                  <circle cx="95" cy="50" r="3" fill="#34A853"/>
                  <path d="M80 75 L 90 70 L 95 80 Z" fill="#FBBC05"/>
                </svg>
              </div>

              <h2 className="[font-family:'Archivo',Helvetica] font-semibold text-2xl text-[#2e5cef] tracking-[0] leading-[1.2] mb-3">
                For myself
              </h2>

              <p className="[font-family:'Archivo',Helvetica] font-semibold text-base text-black tracking-[0] leading-[1.4] mb-4">
                Freelancer / Sole Proprietor
              </p>

              <p className="[font-family:'Archivo',Helvetica] font-normal text-sm text-gray-600 tracking-[0] leading-[1.5] text-center">
                Open a virtual USD account in your own name. Verify with PAN + one ID.
              </p>
            </button>

            <button className="flex-1 max-w-[360px] bg-white border-2 border-gray-300 rounded-2xl p-8 hover:border-[#2e5cef] hover:shadow-lg transition-all flex flex-col items-center">
              <div className="w-40 h-40 mb-6 flex items-center justify-center">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="45" width="35" height="45" fill="#E8F0FE" rx="4"/>
                  <rect x="85" y="45" width="35" height="45" fill="#D2E3FC" rx="4"/>
                  <circle cx="57" cy="38" r="12" fill="#4285F4"/>
                  <path d="M52 33 C 52 29, 62 29, 62 33 L 62 42 L 52 42 Z" fill="#1967D2"/>
                  <circle cx="102" cy="38" r="12" fill="#4285F4"/>
                  <path d="M97 33 C 97 29, 107 29, 107 33 L 107 42 L 97 42 Z" fill="#1967D2"/>
                  <rect x="50" y="60" width="60" height="35" fill="#4285F4" rx="4"/>
                  <circle cx="70" cy="72" r="6" fill="white"/>
                  <circle cx="90" cy="72" r="6" fill="white"/>
                  <path d="M 65 80 Q 80 88, 95 80" stroke="white" strokeWidth="3" fill="none"/>
                  <rect x="58" y="100" width="10" height="5" fill="#EA4335" rx="1"/>
                  <rect x="92" y="100" width="10" height="5" fill="#FBBC05" rx="1"/>
                  <circle cx="80" cy="110" r="4" fill="#34A853"/>
                </svg>
              </div>

              <h2 className="[font-family:'Archivo',Helvetica] font-semibold text-2xl text-[#2e5cef] tracking-[0] leading-[1.2] mb-3">
                For a business
              </h2>

              <p className="[font-family:'Archivo',Helvetica] font-semibold text-base text-black tracking-[0] leading-[1.4] mb-4">
                SMB / Agency / Company
              </p>

              <p className="[font-family:'Archivo',Helvetica] font-normal text-sm text-gray-600 tracking-[0] leading-[1.5] text-center">
                Open a virtual USD account for your company. Verify your business and owner(s).
              </p>
            </button>
          </div>

          <div className="mt-16 max-w-[800px] mx-auto">
            <p className="text-center [font-family:'Archivo',Helvetica] font-normal text-sm text-gray-700 tracking-[0] leading-[1.6]">
              You must use Riverpe in line with our{" "}
              <a href="#" className="text-black font-semibold underline">
                Acceptable Use Policy
              </a>
              . You cannot use a personal account for personal account for business purposes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

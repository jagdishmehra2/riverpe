import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const Signup = (): JSX.Element => {
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

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[490px]">
          <h1 className="text-center [font-family:'Archivo',Helvetica] font-semibold text-[32px] text-black tracking-[0] leading-[1.2] mb-12">
            Create your Riverpe account
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="[font-family:'Archivo',Helvetica] font-normal text-base text-black tracking-[0] leading-[normal]">
                Sign up with
              </p>

              <Button
                variant="outline"
                className="w-full h-[56px] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-3"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <span className="[font-family:'Archivo',Helvetica] font-normal text-sm text-gray-600 tracking-[0]">
                or
              </span>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="[font-family:'Archivo',Helvetica] font-normal text-base text-black tracking-[0] leading-[normal]"
                >
                  Enter your email address or phone number
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full h-[56px] bg-white border border-gray-300 rounded-lg px-4 [font-family:'Archivo',Helvetica] font-normal text-base text-black focus:outline-none focus:border-[#2e5cef] focus:ring-1 focus:ring-[#2e5cef]"
                  placeholder=""
                />
              </div>

              <Button className="w-full h-[56px] bg-[#2e5cef] hover:bg-[#2449c8] text-white rounded-lg [font-family:'Archivo',Helvetica] font-semibold text-base">
                Sign up
              </Button>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <p className="text-center [font-family:'Archivo',Helvetica] font-normal text-sm text-gray-600 tracking-[0] leading-[1.5]">
                By creating an account, you accept the{" "}
                <a href="#" className="text-black font-semibold underline">
                  Terms of use
                </a>{" "}
                and{" "}
                <a href="#" className="text-black font-semibold underline">
                  Privacy Policy
                </a>
                .
              </p>

              <p className="text-center [font-family:'Archivo',Helvetica] font-normal text-base text-black tracking-[0] leading-[normal]">
                Already have an account?{" "}
                <a href="#" className="font-semibold underline">
                  Sign in
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

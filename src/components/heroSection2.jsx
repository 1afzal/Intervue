import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import map from "../assets/map.png";

const features = [
  {
    title: "Faster Hiring",
    description: "Reduce your engineering screening time by 70%.",
    icon: (
      <svg
        className="w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 text-blue-600 drop-shadow-md"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" className="opacity-15" />
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    footer: "Get to great devs quicker.",
  },
  {
    title: "Reliable Assessments",
    description: "Standardize and improve your technical interviews.",
    icon: (
      <svg
        className="w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 text-green-600 drop-shadow-md"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path d="M8 12l2 2l4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    footer: "Signal, not noise.",
  },
  {
    title: "Seamless Collaboration",
    description: "Share results and progress easily with your team.",
    icon: (
      <svg
        className="w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 text-purple-600 drop-shadow-md"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        viewBox="0 0 24 24"
      >
        <path
          d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    footer: "Great for distributed teams.",
  },
];

function HeroSection2() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 w-full py-6 px-2 sm:py-12 sm:px-4 md:px-0">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 xs:mb-3 text-center tracking-tight drop-shadow-sm">
          Why Intervue.io?
        </h2>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 mb-5 xs:mb-8 sm:mb-12 max-w-full sm:max-w-2xl text-center px-2">
          Streamline your technical hiring process with powerful, intuitive, and collaborative tools.
        </p>
        <div
          className="
            w-full
            max-w-none xs:max-w-lg sm:max-w-2xl md:max-w-6xl
            grid grid-cols-1
            xs:grid-cols-2
            sm:grid-cols-3
            gap-4 xs:gap-5 sm:gap-6 md:gap-8
            px-2
          "
        >
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="
                bg-white flex flex-col items-center justify-between shadow-xl border-0 rounded-2xl xs:rounded-3xl
                px-3 py-5 xs:px-4 xs:py-7 sm:px-7 sm:py-8
                transition-all duration-200
                hover:-translate-y-1 xs:hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-2xl
                group w-full
                max-w-[92vw] xs:max-w-xs mx-auto
                min-h-[290px] xs:min-h-[320px] md:min-h-[340px]
              "
              style={{
                minWidth: 0,
                boxShadow:
                  "0 6px 32px 0 rgba(96, 165, 250, 0.08), 0 1px 2px 0 rgba(60, 60, 60, 0.06)",
              }}
            >
              <CardHeader className="flex flex-col items-center gap-2 xs:gap-3 w-full px-0">
                <div className="mb-2 animate-bounce-slow group-hover:scale-110 duration-200">
                  {feature.icon}
                </div>
                <CardTitle className="text-center text-base xs:text-lg sm:text-2xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-center leading-relaxed text-xs xs:text-sm sm:text-lg text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-0"></CardContent>
              <CardFooter className="flex justify-center w-full px-0">
                <span className="text-indigo-600 font-medium bg-indigo-50 rounded-full py-2 px-2 xs:px-3 sm:px-4 text-xs sm:text-sm shadow shadow-indigo-100 text-center">
                  {feature.footer}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-8 xs:mt-10 sm:mt-16 px-2">
        <img
          src={map}
          alt="Customers from all over the world"
          className="
            w-full
            max-w-[92vw] xs:max-w-xs sm:max-w-md md:max-w-5xl
            h-auto
            rounded-lg xs:rounded-2xl
            shadow-lg border border-gray-100
            object-cover
          "
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default HeroSection2;

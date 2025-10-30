import React from "react";
import mainLogo from "../assets/main-logo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Demo() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center">
      <img
        src={mainLogo}
        alt="Main logo"
        className="h-16 xs:h-20 md:h-28 w-auto mb-4 sm:mb-6"
      />

      <div className="text-center w-full max-w-lg sm:max-w-xl mb-7 sm:mb-12 px-2">
        <h1 className="text-2xl xs:text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 drop-shadow">
          Request a Demo
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-gray-600">
          See how 400+ talent teams use <span className="font-semibold text-black">Intervue's</span> on-demand interview marketplace to hire engineers 60% faster, without burning out your team.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch md:items-start gap-5 md:gap-8 w-full max-w-4xl">
        <Card className="flex-1 min-w-0 sm:min-w-[320px] shadow-xl border-0 rounded-2xl bg-white mb-5 md:mb-0">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl font-semibold">Personalized Walkthrough</CardTitle>
            <CardDescription>
              Get a guided tour tailored to your hiring needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 xs:pl-5 space-y-1 text-gray-700 text-sm xs:text-base">
              <li>Platform overview</li>
              <li>Feature demonstration</li>
              <li>Interactive Q&amp;A</li>
            </ul>
          </CardContent>
          <CardFooter>
            <button className="w-full px-4 py-2 sm:px-5 sm:py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition text-sm sm:text-base">
              Book now
            </button>
          </CardFooter>
        </Card>

        <Card className="flex-1 min-w-0 sm:min-w-[320px] shadow-xl border-0 rounded-2xl bg-white">
          <CardHeader>
            <CardTitle className="text-lg xs:text-xl font-semibold">Contact Our Team</CardTitle>
            <CardDescription>
              Submit your details and we'll connect with you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-3 xs:gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-3 py-2 border rounded focus:outline-none focus:ring text-sm xs:text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 border rounded focus:outline-none focus:ring text-sm xs:text-base"
                required
              />
              <textarea
                placeholder="Tell us about your hiring needs..."
                className="px-3 py-2 border rounded focus:outline-none focus:ring text-sm xs:text-base"
                rows={3}
                required
              />
            </form>
          </CardContent>
          <CardFooter>
            <button type="submit" className="w-full px-4 py-2 sm:px-5 sm:py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition text-sm sm:text-base">
              Request Demo
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Demo;

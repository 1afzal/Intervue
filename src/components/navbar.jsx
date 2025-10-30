import React, { useState } from "react";
import mainLogo from "../assets/main-logo.png";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="z-100 fixed w-full bg-gray-100 items-center shadow sm:px-6 px-2 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <img
            src={mainLogo}
            alt="main logo"
            className="h-12 w-30 md:h-20"
          />
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu className="border rounded-4xl bg-white border-none px-1 py-1">
            <NavigationMenuList className="flex space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-1">Why Intervue?</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-1">Products</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-1">Solution</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-1">Pricing</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-1">Resources</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 py-1">Contact us</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="gap-3 flex justify-center hidden md:flex">
          <div className="flex-shrink-0">
            <button
              onClick={() => {
                navigate("/demo");
              }}
              className="bg-black rounded-md py-2 px-4 text-white text-base font-semibold transition-colors duration-200 hover:bg-gray-800"
            >
              schedule a demo
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="bg-black rounded-md py-2 px-4 text-white text-base font-semibold transition-colors duration-200 hover:bg-gray-800"
            >
              login
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center ml-2 mr-3">
          <button
            className="text-gray-600 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 mt-2 bg-white shadow-lg z-50 border-t">
          <div className="flex flex-col px-4 py-4 space-y-2">
            <button
              className="text-left py-2 px-2 rounded font-medium hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
                // Route or scroll to each section as appropriate...
              }}
            >
              Why Intervue?
            </button>
            <button
              className="text-left py-2 px-2 rounded font-medium hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Products
            </button>
            <button
              className="text-left py-2 px-2 rounded font-medium hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Solution
            </button>
            <button
              className="text-left py-2 px-2 rounded font-medium hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Pricing
            </button>
            <button
              className="text-left py-2 px-2 rounded font-medium hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Resources
            </button>
            <button
              className="text-left py-2 px-2 rounded font-medium hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Contact us
            </button>
            <div className="border-t my-2" />
            {/* Show mobile buttons below menu on mobile */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/demo");
              }}
              className="w-full bg-black rounded-md py-2 px-4 mb-2 text-white text-base font-semibold transition-colors duration-200 hover:bg-gray-800"
            >
              schedule a demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/login");
              }}
              className="w-full bg-black rounded-md py-2 px-4 text-white text-base font-semibold transition-colors duration-200 hover:bg-gray-800"
            >
              login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

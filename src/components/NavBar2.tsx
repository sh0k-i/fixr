"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavBar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoized navigation links
  const navigationLinks = useMemo(() => [
    { 
      name: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Our Services",
      href: "/services",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },

    {
      name: "About Us",
      href: "/about-us",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      name: "FAQs",
      href: "/faqs",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ], []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed w-full top-0 left-0 z-30 transition-colors duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-transparent"
    }`}>
      <header className="relative">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between">
            {/* Logo */}
            <div className="md:flex md:items-center md:gap-12">
              <a className="block" href="/">
                <img src="/fixr-logo.png" alt="Logo" className="h-12 sm:h-14 lg:h-16" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navigationLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {currentPath === link.href ? (
                    <span className="sm:px-5 py-2.5 text-base font-medium text-accentColor border-b-2 border-accentColor cursor-default">
                      {link.name}
                    </span>
                  ) : (
                    <a
                      className="sm:px-5 py-2.5 text-base font-medium text-gray-800 hover:text-accentColor transition-colors"
                      href={link.href}
                    >
                      {link.name}
                      <span className="absolute bottom-[-9px] left-0 w-0 h-0.5 bg-accentColor transition-all group-hover:w-full"></span>
                    </a>
                  )}
                </div>
              ))}
              <div className="ml-4">
                <a
                  className="bg-accentColor rounded-lg px-4 py-3 text-sm font-medium text-white hover:bg-accentDark"
                  href="/request-quotes"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-800 hover:text-accentColor transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50"
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <img src="/fixr-logo.png" alt="Logo" className="h-10" />
                  <button
                    className="p-2 text-gray-600 hover:text-accentColor rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col p-4 space-y-2">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        currentPath === link.href
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={link.icon}
                        />
                      </svg>
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="/request-quotes"
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      currentPath === "/request-quotes"
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Get Free Quote
                  </a>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default NavBar2;

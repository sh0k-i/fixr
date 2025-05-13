"use client";
import React from "react";
import BlurFade from "./ui/blur-fade";

const HowItWorks2: React.FC = () => {
  return (
    <div className="bg-white">
      {/* <!-- Icon Blocks --> */}
      <div className="space-y-8 sm:space-y-10 pointer-events-none">
        <BlurFade inView delay={1 * 0.15}  yOffset={0} className="space-y-2 md:space-y-4 text-center">
            <h2 className="section_header">
            How It <span className="text-accentColor">Works</span>
            </h2>
            <p className="section_description">
            Simple steps, seamless service—from booking to building, we make home improvement easy and stress-free.
            </p>
        </BlurFade>
        <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 items-center gap-12">
          {/* <!-- Icon Block --> */}
          <div className="text-center">
            <div className="flex justify-center items-center ">
              <img src="/images/step-1.png" alt="step 1" className="shrink-0 size-24 sm:size-24 md:size-28 text-gray-600 dark:text-neutral-400" />
            </div>
            <div className="mt-3">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
              1. Choose Your Service
              </h3>
              <p className="mt-1 section_description">
              Browse our range of expert services—from repairs to full renovations—and select what fits your project best.
              </p>
            </div>
          </div>
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
          <div className="text-center">
          <div className="flex justify-center items-center ">
              <img src="/images/step-2.png" alt="step 2" className="shrink-0 size-24 sm:size-24 md:size-28 text-gray-600 dark:text-neutral-400" />
            </div>
            <div className="mt-3">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
              2. Schedule Your Appointment
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Use our easy online booking tool to set an appointment at your convenience—no phone calls needed.
              </p>
            </div>
          </div>
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
          <div className="text-center">
          <div className="flex justify-center items-center ">
              <img src="/images/step-3.png" alt="step 3" className="shrink-0 size-24 sm:size-24 md:size-28 text-gray-600 dark:text-neutral-400" />
            </div>
            <div className="mt-3">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
              3. Get a Professional Visit
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
              A qualified technician or contractor will visit your home, assess your needs, and get started on making your vision a reality.
              </p>
            </div>
          </div>
          {/* <!-- End Icon Block --> */}

        </div>

        </div>

      </div>
      {/* <!-- End Icon Blocks --> */}
    </div>
  );
};

export default HowItWorks2;

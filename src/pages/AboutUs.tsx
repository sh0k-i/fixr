import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import BlurFade from "@/components/ui/blur-fade";

const AboutUs = () => {
  return (
    <div>
      <NavBar2 />
      <div className="mt-6 md:mt-[46px] h-[230px] md:h-[330px] flex items-end justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top">
        <div className="text-center max-w-4xl px-4 md:pb-[88px]">
          <BlurFade
            delay={1 * 0.15}
            inView
            className="text-2xl font-bold sm:text-3xl md:text-4xl text-gray-800 mb-4"
          >
            About Us
          </BlurFade>
          <BlurFade delay={2 * 0.15} inView className="section_description">
          From Dumaguete Roots to National Expertise – Your Trusted Renovation Partner Since 2015
          </BlurFade>
        </div>
      </div>
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:pt-0  space-y-12 sm:space-y-20 lg:space-y-24">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-12 pointer-events-none">
          {/* Photo - First on mobile, right on desktop */}
          <BlurFade
            delay={4 * 0.15}
            inView
            yOffset={0}
            className="max-w-xl md:order-2 mb-8 md:mb-0"
          >
            <img
              className="rounded-xl"
              src="/images/team.jpg"
              alt="About Us Image"
            />
          </BlurFade>

          {/* Content - Second on mobile, left on desktop */}
          <BlurFade delay={3 * 0.15} inView yOffset={0} className="md:order-1">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <div className="max-w-xl space-y-2 md:space-y-2">
                  <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-gray-800">
                    Our Story
                  </p>
                  <div className="space-y-2 md:space-y-3 section_description">
                    <p>
                      At Fixr, we're redefining home improvement in the
                      Philippines—one project at a time. Born in the heart of
                      Dumaguete, Negros Oriental, in 2015, our journey began
                      with a simple mission: to connect homeowners with trusted
                      local professionals effortlessly.
                    </p>
                    <p>
                      What started as a small team of contractors and tech
                      enthusiasts has grown into a nationwide network of skilled
                      partners, serving thousands of happy homeowners.
                    </p>
                  </div>
                </div>
                <div className="max-w-xl space-y-2 md:space-y-2">
                  <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-gray-800">
                    Mission
                  </p>
                  <div className="space-y-2 md:space-y-3 section_description">
                    <p>
                      To empower homeowners and contractors through technology,
                      creating seamless connections that transform houses into
                      dream homes. We prioritize transparency, affordability,
                      and trust, ensuring every project—big or small—is
                      stress-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
        {/* End Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 ">
          <BlurFade
            delay={1 * 0.15}
            inView
            className="group flex gap-y-6 size-full bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-default"
          >
            <svg
              className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800 dark:text-white">
                  Local Expertise
                </h3>
                <p className="text-gray-600 dark:text-neutral-400">
                  From our Dumaguete roots, we’ve expanded to serve every major
                  Philippine city.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade
            delay={2 * 0.15}
            inView
            className="group flex gap-y-6 size-full bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-default"
          >
            <svg
              className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800 dark:text-white">
                  Vetted Professionals
                </h3>
                <p className="text-gray-600 dark:text-neutral-400">
                  Every contractor undergoes rigorous background checks and
                  training.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade
            delay={3 * 0.15}
            inView
            className="group flex gap-y-6 size-full bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-default"
          >
            <svg
              className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800 dark:text-white">
                  Customer-Centric
                </h3>
                <p className="text-gray-600 dark:text-neutral-400">
                  Our 24/7 support team ensures you’re never alone in your
                  renovation journey.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

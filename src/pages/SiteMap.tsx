import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import BlurFade from "@/components/ui/blur-fade";

const SiteMap = () => {
  return (
    <div>
      <NavBar2 />

      <div className="fixed top-0 left-0 w-full h-[300px] flex items-center justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top z-[-1]"></div>
      <div className="max-w-[85rem] mt-[100px] md:mt-[175px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20  space-y-12 sm:space-y-20 lg:space-y-24">
        <div className="space-y-6 sm:space-y-8">
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="space-y-2 md:space-y-4 text-center cursor-default"
          >
            <h2 className="section_header">Sitemap</h2>
          </BlurFade>
        </div>

        <div>
          <BlurFade
            delay={3 * 0.15}
            inView
            yOffset={0}
            className="flex w-full justify-center items-center"
          >
            <div className="pl-40 w-full max-w-[80rem] grid grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Main</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact-us"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/request-quotes"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Get Free Assesment
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a
                      href="/filtered-services?category_id=2"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Bathroom Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/filtered-services?category_id=4"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Electrical & Lighting Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/filtered-services?category_id=6"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Flooring & Walls Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/filtered-services?category_id=1"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Kitchen Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/filtered-services?category_id=3"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Outdoor & Landscaping Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/filtered-services?category_id=7"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Solar Services
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Support & Resources</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <a
                        href="/faqs"
                        className="text-gray-800 transition hover:text-accentColor"
                      >
                        {" "}
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-800 transition hover:text-accentColor"
                      >
                        {" "}
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-of-use"
                      className="text-gray-800 transition hover:text-accentColor"
                    >
                      {" "}
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>

              </div>



            </div>

          
            
          </BlurFade>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SiteMap;

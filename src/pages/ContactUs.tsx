import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import BlurFade from "@/components/ui/blur-fade";

const ContactUs = () => {
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
            Contact Us
          </BlurFade>
          <BlurFade delay={2 * 0.15} inView className="section_description">
            Whether you're planning a kitchen remodel in Davao or need urgent
            plumbing repairs in Quezon City, the Fixr team is here to help.
          </BlurFade>
        </div>
      </div>
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:pt-0  space-y-12 sm:space-y-20 lg:space-y-24">
        {/* Grid */}
        <div className="md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-12 xl:gap-32 pointer-events-none mx-auto max-w-7xl px-4">
          {/* Image Column */}
          <BlurFade
            delay={3 * 0.15}
            inView
            yOffset={0}
            className="mb-5 sm:mb-10 lg:mb-0"
          >
            <img
              className="rounded-xl w-full max-w-2xl"
              src="/images/contact-us.png"
              alt="Contact Us Image"
            />
          </BlurFade>

          {/* Content Column */}
          <BlurFade
            delay={4 * 0.15}
            inView
            yOffset={0}
            className="max-w-prose md:w-fit"
          >
            <div className="space-y-6 sm:space-y-8 md:pr-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-2">
                <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-gray-800">
                  Our Office
                </p>
                <div className="space-y-2 md:space-y-3 section_description">
                  <div>
                    <p>123 Katipunan Street, Dumaguete City</p>
                    <p>Negros Oriental, Philippines, 6201</p>
                  </div>
                  <div className="mt-4">
                    <p>Call Us: 091234567890</p>
                    <p>Email: contact.fixr.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 md:space-y-2">
                <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-gray-800">
                  Hours
                </p>
                <div className="space-y-2 md:space-y-3 section_description">
                  <div>
                    <p>Monday–Saturday: 8:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
        {/* End Grid */}
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

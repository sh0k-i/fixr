import Hero from "../components/Hero";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import Feature from "@/components/Feature";
import NavBar from "@/components/NavBar";
import HowItWorks2 from "@/components/HowItWorks2";
import BlurFade from "@/components/ui/blur-fade";
import ProductCarousel from "@/components/ProductCarousel";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const Home = () => {
  const { featured } = useAppContext();

  const handleServiceSelect = async (service: any) => {
    //redirect to page
    window.location.href = `/request-quotes?service_id=${service.id}`;
  };

  if (!featured) {
    return null; // or a loading spinner
  }

  return (
    <div className="bg-white">
      {/* <NavBar2 /> */}
      <NavBar />
      <Hero />
      <Testimonials />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24  space-y-12 sm:space-y-20 lg:space-y-24">
        {/* featured services */}
        <div className="space-y-8 sm:space-y-10 ">
          <BlurFade
            inView
            delay={2 * 0.15}
            yOffset={0}
            className="space-y-2 md:space-y-4 text-center cursor-default"
          >
            <h2 className="section_header">
              Deals <span className="text-accentColor">You'll Love</span>
            </h2>
            <p className="section_description">
              Don’t miss out on our best deals—give your space the upgrade it
              deserves
            </p>
          </BlurFade>
          <BlurFade inView delay={3 * 0.15} yOffset={0}>
            <ProductCarousel
              services={featured}
              handleServiceSelect={handleServiceSelect}
            />
          </BlurFade>

          {/* button */}
          <BlurFade
            inView
            delay={3 * 0.15}
            yOffset={0}
            className="cursor-default"
          >
            <div className="text-center mt-6 ">
              <a
                href="/services"
                className="pb-1 border-b border-accentColor hover:border-accentDark bg-transparent text-accentColor hover:text-accentDark transition duration-300 text-lg"
              >
                View More →
              </a>
            </div>
          </BlurFade>
        </div>

        <HowItWorks2 />
        <Feature />
        <div className="space-y-8 sm:space-y-10 ">
          <BlurFade
            inView
            delay={2 * 0.15}
            yOffset={0}
            className="space-y-2 md:space-y-4 text-center cursor-default"
          >
            <h2 className="section_header">
              Watch Our <span className="text-accentColor">Demo</span>
            </h2>
          </BlurFade>
        <div className="flex w-full justify-center items-center">
        <BlurFade inView delay={2 * 0.15} yOffset={0} className="max-w-5xl">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="/demo.mp4"
            thumbnailSrc="images/thumbnail.jpg"
            thumbnailAlt="How To Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="/demo.mp4"
            thumbnailSrc="images/thumbnail.jpg"
            thumbnailAlt="How To Video"
          />
        </BlurFade>
        </div>

        </div>

        <Benefits />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import BlurFade from "@/components/ui/blur-fade";

const OurServices = () => {
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
            Our Services
          </BlurFade>
          <BlurFade delay={2 * 0.15} inView className="section_description">
            description
          </BlurFade>
        </div>
      </div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:pt-0  space-y-12 sm:space-y-20 lg:space-y-24 min-h-screen"></div>
      <Footer />
    </div>
  );
};

export default OurServices;

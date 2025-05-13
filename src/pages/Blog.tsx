import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";

const Blog = () => {
  return (
    <div>
      <NavBar2 />
      <div className="fixed top-0 left-0 w-full h-[300px] flex items-center justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top">
      </div>
      <div className="max-w-[85rem] mt-[92px] md:mt-[175px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20  space-y-12 sm:space-y-20 lg:space-y-24 min-h-screen"></div>
      <Footer />
    </div>
  );
};

export default Blog;

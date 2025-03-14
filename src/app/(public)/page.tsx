import FAQ from "@/components/FAQ";
import AboutUs from "@/components/home/AboutUs";
import HomeHero from "@/components/home/HomeHero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <>
      <HomeHero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <NewsLetter />
    </>
  );
};

export default page;

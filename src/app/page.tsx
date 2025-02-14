import AboutUs from "@/components/home/AboutUs";
import HomeHero from "@/components/home/HomeHero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsLetter from "@/components/NewsLetter";
import Testimonial from "@/components/Testimonials";

const page = () => {
  return (
    <>
      <HomeHero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default page;

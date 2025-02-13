import AboutUs from "@/components/home/AboutUs";
import HomeHero from "@/components/home/HomeHero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const page = () => {
  return (
    <>
      <section>
        <HomeHero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
      </section>
    </>
  );
};

export default page;

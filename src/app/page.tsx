import AboutUs from "@/components/home/AboutUs";
import HomeHero from "@/components/home/HomeHero";
import Services from "@/components/home/Services";

const page = () => {
  return (
    <>
      <section>
        <HomeHero />
        <AboutUs />
        <Services />
      </section>
    </>
  );
};

export default page;

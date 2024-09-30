import AboutUs from "./AboutUs";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Templates from "./components/Templates";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <Templates />
        <WhyChooseUs />
        <Testimonial />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;

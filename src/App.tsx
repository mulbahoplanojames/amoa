import Hero from "./components/Hero";
import Services from "./components/Services";
import Navbar from "./Layouts/Navbar/Navbar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
      </main>
    </div>
  );
};

export default App;

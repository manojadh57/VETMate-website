import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Approach from "./sections/Approach";
import Integrity from "./sections/Integrity";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-[#f1efe8] text-[#101010]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Approach />
        <Integrity />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

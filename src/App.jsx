import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="antialiased font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-60"
        style={{ scaleX }}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;

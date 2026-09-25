import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <main className="antialiased font-sans md:cursor-none">
        <CustomCursor />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </Router>
  );
}

export default App;

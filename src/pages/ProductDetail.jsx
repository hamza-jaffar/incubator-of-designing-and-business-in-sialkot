import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowLeft, CheckCircle2, ShoppingBag, Share2 } from "lucide-react";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-accent underline">
            Back to library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary/60 hover:text-accent font-medium transition-colors"
          >
            <ArrowLeft size={18} /> Back to Collection
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-white p-4 text-center text-xs font-bold uppercase tracking-widest shadow-xl rotate-12">
              Limited Available
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-secondary text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight italic">
                {product.name}
              </h1>
              <p className="text-3xl font-light text-accent mb-8">
                {product.price}
              </p>

              <div className="h-px bg-black/10 w-full mb-8" />

              <p className="text-primary/70 text-lg leading-relaxed mb-10">
                {product.description}
              </p>

              <div className="space-y-4 mb-12">
                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">
                  Key Highlights
                </h4>
                {product.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-3 text-primary/80"
                  >
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span>{detail}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-accent transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-accent/40 group">
                  <ShoppingBag
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  Enroll / Purchase Now
                </button>
                <button className="border-2 border-primary/10 text-primary p-5 rounded-2xl hover:bg-secondary transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

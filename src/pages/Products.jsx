import { motion } from "framer-motion";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { ArrowRight, Tag } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-secondary pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Elevate Your <span className="text-accent italic">Craft</span> with
            Premium Resources
          </h1>
          <p className="text-primary/70 text-lg md:text-xl">
            Explore our curated selection of workshops, tools, and services
            designed to empower the next generation of fashion designers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/products/${product.id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-primary font-bold text-sm">
                      {product.price}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-medium flex items-center gap-2">
                      View Details <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
                    <Tag size={12} />
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-primary/60 text-sm line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

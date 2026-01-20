import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/gallery-1.png",
    style: "md:col-span-2 md:row-span-2",
    title: "Exhibition Hall",
  },
  {
    src: "/assets/studio-1.png",
    style: "col-span-1 row-span-1",
    title: "Design Process",
  },
  {
    src: "/assets/hero.png",
    style: "col-span-1 md:row-span-2",
    title: "Couture Collection",
  },
  {
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600",
    style: "col-span-1 row-span-1",
    title: "Fashion Photography",
  },
];

const Gallery = () => {
  return (
    <section className="section-padding bg-secondary scroll-mt-20" id="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs md:text-sm mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold serif">
            Studio & Work Preview
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-[30px] shadow-premium ${img.style}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <p className="text-accent text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2 font-medium">
                  {img.title}
                </p>
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  Studio Excellence
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

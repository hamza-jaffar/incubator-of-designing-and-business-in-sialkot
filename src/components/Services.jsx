import { motion } from "framer-motion";
import {
  Scissors,
  GraduationCap,
  LayoutPanelLeft,
  Camera,
  Home,
  Share2,
} from "lucide-react";

const services = [
  {
    icon: <Scissors size={32} />,
    title: "Customized Stitching",
    description:
      "Bespoke tailoring for men and women, ensuring perfect fit and premium craftsmanship.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Diploma Programs",
    description:
      "Professional fashion designing courses to nurture the next generation of industry leaders.",
  },
  {
    icon: <LayoutPanelLeft size={32} />,
    title: "Exhibition Hall",
    description:
      "A premium space for fashion events, brand launches, and student showcases.",
  },
  {
    icon: <Camera size={32} />,
    title: "Photography Solutions",
    description:
      "Professional fashion photography and portfolio development for brands and designers.",
  },
  {
    icon: <Home size={32} />,
    title: "Interior Designing",
    description:
      "Creative interior solutions that blend aesthetic beauty with functional excellence.",
  },
  {
    icon: <Share2 size={32} />,
    title: "Social Media Strategy",
    description:
      "Comprehensive brand management and digital growth strategies for the fashion industry.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-white scroll-mt-20" id="services">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs md:text-sm mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Premium Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 md:p-10 rounded-3xl bg-secondary border border-gray-100 hover:border-accent/30 transition-all duration-300 text-left group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center text-accent mb-6 md:mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 serif">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

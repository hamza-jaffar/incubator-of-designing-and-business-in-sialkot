import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "First Fashion Incubator in Pakistan",
  "Biggest Design Studio in Sialkot",
  "Industry-Level Training",
  "Complete Fashion Ecosystem",
  "Professional Team & Creative Excellence",
];

const WhyChooseUs = () => {
  return (
    <section
      className="section-padding bg-primary overflow-hidden relative"
      id="why-choose-us"
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-20 hidden md:block" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center text-white">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent uppercase tracking-[0.2em] font-bold text-xs md:text-sm mb-6 block"
            >
              Excellence Redefined
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-10 leading-tight serif"
            >
              Why Choose Mezaaj <br />
              <span className="italic font-normal text-accent">
                Fashion Studio?
              </span>
            </motion.h2>

            <ul className="space-y-4 md:space-y-6">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex items-center gap-4 text-base md:text-lg font-light text-white/90"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Check size={14} />
                  </div>
                  {reason}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] backdrop-blur-sm">
              <div className="text-6xl md:text-8xl font-bold text-accent mb-4 serif opacity-80">
                20+
              </div>
              <p className="text-xl md:text-2xl font-medium mb-2">
                Years of Combined Expertise
              </p>
              <p className="text-white/60 text-sm md:text-base font-light italic">
                Leading the fashion revolution in Pakistan through innovation
                and education.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

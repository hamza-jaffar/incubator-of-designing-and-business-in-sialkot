import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-padding bg-secondary scroll-mt-20" id="about">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <img
                src="/assets/studio-1.png"
                alt="Mezaaj Studio"
                className="rounded-2xl shadow-premium relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-accent/10 rounded-2xl z-0" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs md:text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Pioneering the Fashion <br />
              <span className="serif italic text-primary/80">
                Legacy of Sialkot
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Mezaaj Fashion Studio is Pakistan’s first fashion incubator
                offering customized stitching for men & women, professional
                diploma programs in fashion designing, exhibition hall services,
                photography solutions, interior designing, and social media
                strategy for brands and students.
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                We bridge the gap between creative passion and commercial
                success, providing a complete ecosystem for aspiring designers
                and established brands alike.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

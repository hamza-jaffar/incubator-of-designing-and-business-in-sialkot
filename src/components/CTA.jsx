import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="section-padding bg-white overflow-hidden scroll-mt-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-accent rounded-[40px] md:rounded-[60px] p-10 md:p-24 text-center relative overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-primary text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight serif">
              Start Your Fashion <br />
              <span className="italic font-normal">Journey With Us</span>
            </h2>
            <p className="text-primary/70 text-base md:text-xl mb-10 md:mb-12 font-light">
              Join the biggest design studio in Sialkot and transform your
              creative vision into a professional brand. Enrollment is now open.
            </p>
            <button className="btn btn-primary bg-primary! text-white! hover:bg-black! px-10! md:px-12! py-4! text-base md:text-lg">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

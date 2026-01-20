import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-svh flex pt-100 md:pt-32 items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/hero.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <div className="container relative z-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
          >
            Mezaaj <br />
            <span className="text-accent italic font-normal">
              Fashion Studio
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white/90 text-xl md:text-3xl font-light mb-6 uppercase tracking-widest serif"
          >
            Pakistan’s First Fashion Incubator & Creative Design Studio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed"
          >
            Customized stitching, fashion education, exhibitions, photography,
            and complete fashion solutions under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex gap-4 sm:gap-6 flex-wrap"
          >
            <button className="btn btn-primary bg-accent! hover:bg-accent-light! border-none! text-primary font-semibold">
              Our Services
            </button>
            <button className="btn btn-outline border-white! text-white! hover:bg-white! hover:text-primary!">
              Enroll Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -ms-px z-20"
      >
        <div className="w-px h-16 bg-linear-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
};

export default Hero;

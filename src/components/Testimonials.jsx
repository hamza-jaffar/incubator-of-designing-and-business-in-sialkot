import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Fashion Designer",
    text: "Joining the incubator at Mezaaj was the best decision for my brand. The mentorship and exhibition facilities are world-class."
  },
  {
    name: "Zain Ali",
    role: "Boutique Owner",
    text: "Their custom stitching service is phenomenal. The attention to detail and timely delivery have kept me coming back for years."
  },
  {
    name: "Sara Ahmed",
    role: "Fashion Student",
    text: "The diploma program gave me hands-on experience that no other institute offered. A true creative hub in Sialkot!"
  },
  {
    name: "Fatima Noor",
    role: "Client",
    text: "Got my bridal dress customized here. The team was so patient and the final result was beyond my expectations."
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-primary text-secondary overflow-hidden" id="testimonials">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent uppercase tracking-[0.2em] font-bold text-xs md:text-sm mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold serif text-white">
            What They Say <br />
            <span className="italic text-accent font-normal">About Us</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden w-full group">
        <div className="py-12 animate-marquee flex gap-8 min-w-full">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="glass !bg-white/5 border-white/10 p-8 rounded-3xl w-[350px] md:w-[450px] shrink-0"
            >
              <div className="flex text-accent mb-6 gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-white font-bold text-lg">{t.name}</h4>
                <p className="text-accent/80 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

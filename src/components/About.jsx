import { motion } from "framer-motion";
import { Target, Lightbulb, Trophy } from "lucide-react";

const stats = [
  { label: "Students Mentored", value: "500+" },
  { label: "Custom Designs", value: "1000+" },
  { label: "Exhibitions", value: "50+" },
  { label: "Years Experience", value: "10+" }
];

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower creative individuals by providing world-class fashion education and a platform to launch their own successful brands."
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "Becoming the leading hub for fashion innovation and business incubation in Pakistan, fostering a new generation of designers."
  }
];

const About = () => {
  return (
    <section className="section-padding bg-secondary scroll-mt-20" id="about">
      <div className="container space-y-24">
        {/* Original Story Section */}
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
              
              {/* Extra Floating Element */}
              <motion.div 
                className="absolute -top-8 -left-8 glass p-6 rounded-2xl z-20 hidden md:block shadow-premium"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Trophy className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">#1</h4>
                    <p className="text-text-muted text-sm">Fashion Incubator</p>
                  </div>
                </div>
              </motion.div>
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
            
            {/* New Stats Row */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-primary/10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h3 className="text-3xl font-bold text-accent mb-2">{stat.value}</h3>
                  <p className="text-text-muted text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* New Features/Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <feature.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

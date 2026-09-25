import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-secondary border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 serif">
              Mezaaj{" "}
              <span className="text-accent italic font-normal">
                Fashion Studio
              </span>
            </h2>
            <p className="text-text-muted max-w-sm font-light leading-relaxed">
              Pakistan’s first fashion incubator and the biggest design studio
              in Sialkot. Developing the future of fashion design and
              craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-primary/80">
              Contact
            </h4>
            <ul className="space-y-4 text-text-muted font-light">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-sm">Sialkot, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-sm">+92 (000) 0000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-sm">hello@mezaajstudio.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-primary/80">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-text-muted text-xs md:text-sm font-light text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Mezaaj Fashion Studio. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

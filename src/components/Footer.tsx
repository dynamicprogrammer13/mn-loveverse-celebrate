import { motion } from "framer-motion";
import { Heart, Calendar, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:mayank.nikita@celebration.com" },
  ];

  return (
    <footer className="relative py-12 px-4 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Heart className="w-8 h-8 fill-primary text-primary animate-pulse-glow" />
            <span className="font-serif text-3xl font-bold text-background">
              M & N
            </span>
            <Heart className="w-8 h-8 fill-primary text-primary animate-pulse-glow" />
          </motion.div>

          <p className="text-background/90 text-lg mb-8 max-w-2xl mx-auto">
            Thank you for being part of our journey. Your love and support mean the world to us!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:shadow-glow transition-all"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 text-background" />
                </motion.a>
              );
            })}
          </div>

          {/* Save the Date CTA */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // Add to calendar functionality would go here
              alert("Calendar functionality coming soon!");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-glow transition-all"
          >
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </motion.a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background/20 my-8" />

        {/* Bottom Text */}
        <div className="text-center text-background/70 text-sm">
          <p>Made with ❤️ for our celebration</p>
          <p className="mt-2">December 15, 2025 • The Grand Garden Estate</p>
        </div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-background/50 text-xs italic">
            Psst... you've scrolled to the very end! Share a fun memory of the couple for a chance to be mentioned at the party! 💕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

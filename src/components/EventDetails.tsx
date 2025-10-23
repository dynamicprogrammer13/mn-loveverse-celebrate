import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Shirt } from "lucide-react";
import venueImage from "@/assets/venue.jpg";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "Date",
      info: "December 15, 2025",
      subtitle: "Save the date!",
    },
    {
      icon: Clock,
      title: "Time",
      info: "6:00 PM onwards",
      subtitle: "Evening celebration",
    },
    {
      icon: MapPin,
      title: "Venue",
      info: "The Grand Garden Estate",
      subtitle: "123 Celebration Lane, Mumbai",
    },
    {
      icon: Shirt,
      title: "Dress Code",
      info: "Cocktail Attire",
      subtitle: "Elegant & festive",
    },
  ];

  return (
    <section id="details" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Event Details
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know to join our celebration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="rounded-3xl overflow-hidden shadow-elegant"
            >
              <img
                src={venueImage}
                alt="Event venue"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="text-3xl font-serif font-bold mb-2">
                  The Grand Garden Estate
                </h3>
                <p className="text-background/90">
                  An enchanting venue for an unforgettable celebration
                </p>
              </div>
            </motion.div>

            {/* Map Button */}
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-glow flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              View on Map
            </motion.a>
          </motion.div>

          {/* Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
            {details.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateZ: index % 2 === 0 ? 2 : -2 }}
                  className="bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-xl font-bold text-foreground mb-1">
                    {detail.info}
                  </p>
                  <p className="text-sm text-muted-foreground">{detail.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Countdown Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-accent/20 rounded-2xl px-8 py-4 border border-accent">
            <p className="text-lg font-medium">
              Can't wait to celebrate with you! ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;

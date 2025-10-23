import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set engagement date (adjust this date as needed)
  const engagementDate = new Date("2025-12-15T18:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +engagementDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mayank and Nikita Engagement"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-primary/40 to-background/90" />
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
          >
            <Heart className="w-6 h-6 fill-primary text-primary" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4">
            <span className="text-background drop-shadow-lg">Mayank</span>
            <Heart className="inline-block w-12 h-12 md:w-16 md:h-16 mx-4 fill-primary text-primary animate-pulse-glow" />
            <span className="text-background drop-shadow-lg">Nikita</span>
          </h1>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-serif font-semibold text-background mb-6 drop-shadow-md"
        >
          Our Greatest Adventure Begins...
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-background/90 mb-8 font-light drop-shadow"
        >
          December 15, 2025
        </motion.p>

        {/* Countdown */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 md:gap-8 mb-8"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-background/20 backdrop-blur-md rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] border border-background/30"
            >
              <div className="text-3xl md:text-5xl font-bold text-background drop-shadow-lg">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-background/80 capitalize mt-1">
                {unit}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all hover:shadow-primary/50"
        >
          Join Our Celebration
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

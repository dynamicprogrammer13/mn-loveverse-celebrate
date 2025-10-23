import { motion } from "framer-motion";
import { Coffee, Heart, Sparkles, Calendar } from "lucide-react";
import firstMeetImage from "@/assets/first-meet.jpg";
import proposalImage from "@/assets/proposal.jpg";

const Timeline = () => {
  const milestones = [
    {
      title: "First Meet",
      date: "January 2020",
      description:
        "A chance encounter at a coffee shop turned into hours of conversation. We knew this was something special.",
      icon: Coffee,
      image: firstMeetImage,
    },
    {
      title: "First Date",
      date: "February 2020",
      description:
        "From coffee to a magical evening under the stars. The beginning of countless beautiful memories.",
      icon: Heart,
      image: firstMeetImage,
    },
    {
      title: "The Proposal",
      date: "October 2024",
      description:
        "At sunset on our favorite beach, Mayank got down on one knee and asked the most important question. She said YES!",
      icon: Sparkles,
      image: proposalImage,
    },
    {
      title: "The Celebration",
      date: "December 2025",
      description:
        "Join us as we celebrate our engagement and the beautiful journey ahead. Your presence would make it perfect!",
      icon: Calendar,
      image: proposalImage,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="story" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-muted-foreground">
            Every great love story has a beginning...
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={milestone.title}
                variants={itemVariants}
                className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: isEven ? 5 : -5 }}
                  className="w-full md:w-5/12 group"
                >
                  <div className="bg-card rounded-3xl shadow-elegant overflow-hidden border border-border hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {milestone.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-glow z-10" />

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;

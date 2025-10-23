import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Confetti from "react-confetti";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    message: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show confetti and success state
    setShowConfetti(true);
    setSubmitted(true);

    toast({
      title: "You're In! 🎉",
      description: "Get ready to celebrate with us!",
    });

    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
    
    // Reset form after animation
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        guests: "1",
        attending: "yes",
        message: "",
      });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={500}
            colors={["#FF2E93", "#6A0DAD", "#FFD700", "#AAFFC7"]}
          />
        )}
        <section id="rsvp" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center"
            >
              <div className="bg-card rounded-3xl shadow-elegant p-12 border border-border">
                <CheckCircle2 className="w-24 h-24 text-primary mx-auto mb-6" />
                <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                  You're In!
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get ready to celebrate with us! We can't wait to see you there! 🎉
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Submit Another Response
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Join Our Celebration
          </h2>
          <p className="text-xl text-muted-foreground">
            We'd love to have you there! Let us know if you can make it
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl shadow-elegant p-8 md:p-12 border border-border"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Your Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-border focus:border-primary transition-all"
                placeholder="Enter your full name"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-border focus:border-primary transition-all"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <Label htmlFor="attending" className="text-foreground font-medium">
                  Will You Attend? *
                </Label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="yes">Yes! Can't wait! 🎉</option>
                  <option value="no">Sorry, can't make it 😢</option>
                </select>
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <Label htmlFor="guests" className="text-foreground font-medium">
                  Number of Guests
                </Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.guests}
                  onChange={handleChange}
                  className="border-border focus:border-primary transition-all"
                />
              </motion.div>
            </div>

            <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">
                Share Your Wishes (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border-border focus:border-primary transition-all resize-none"
                placeholder="Send your love and blessings..."
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground text-lg py-6 rounded-xl font-semibold shadow-glow flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Our Love!
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;

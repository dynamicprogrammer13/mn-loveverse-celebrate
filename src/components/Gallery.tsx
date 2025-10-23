import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";
import firstMeetImage from "@/assets/first-meet.jpg";
import proposalImage from "@/assets/proposal.jpg";
import venueImage from "@/assets/venue.jpg";
import heroImage from "@/assets/hero-bg.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const images = [
    { src: heroImage, alt: "Mayank and Nikita together" },
    { src: proposalImage, alt: "The proposal moment" },
    { src: firstMeetImage, alt: "Our first coffee date" },
    { src: venueImage, alt: "Celebration venue" },
    { src: proposalImage, alt: "Beach sunset" },
    { src: firstMeetImage, alt: "Coffee shop memories" },
  ];

  const toggleFavorite = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(index)) {
        newFavorites.delete(index);
      } else {
        newFavorites.add(index);
      }
      return newFavorites;
    });
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Our Moments
          </h2>
          <p className="text-xl text-muted-foreground">
            A glimpse into our beautiful journey together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Favorite Button */}
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => toggleFavorite(index, e)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  favorites.has(index)
                    ? "bg-primary shadow-glow"
                    : "bg-background/50 backdrop-blur-sm"
                } opacity-0 group-hover:opacity-100`}
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.has(index)
                      ? "fill-primary-foreground text-primary-foreground"
                      : "text-foreground"
                  }`}
                />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

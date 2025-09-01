import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import businessAd from "../images/businessAd.jpg";
import Azar from "../images/Azar.jpeg";

import goil from "../images/goil.jpg";


export default function CallToAction() {
  const ads = [
    {
      title: "Boost Your Business with Us 🚀",
      description: "Advertise here and reach thousands of potential clients daily.",
      img: businessAd,
      link: "https://your-business-link.com",
      buttonText: "Advertise Now",
      bgGradient: "from-purple-600 via-pink-500 to-red-500",
    },
    {
      title: "🎨 Brighten Your World with Azar Paints 🌍",
      description: "For decades, Azar Paints has been a trusted name in Ghana, delivering high-quality paints that bring life, beauty, and durability to every surface. Whether for homes, offices, or large projects, Azar Paints offers vibrant colours, long-lasting protection, and eco-friendly solutions to make your spaces truly stand out.",
      img: Azar ,
      link: "https://your-electronics-link.com",
      buttonText: "Shop Now",
      bgGradient: "from-blue-500 via-cyan-400 to-green-400",
    },
    {
      title: "⛽ GOIL – Your Trusted Energy Partner 🇬🇭",
      description: "As Ghana’s leading oil marketing company, GOIL is committed to powering the nation with quality fuels, lubricants, and reliable energy solutions. With a strong presence across the country, GOIL stands for trust, innovation, and excellence – serving homes, businesses, and communities every day.",
      img: goil,
      link: "https://www.100jsprojects.com/",
      buttonText: "Learn more",
      bgGradient: "from-yellow-400 via-orange-500 to-red-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads.length]);

  const currentAd = ads[currentIndex];

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative w-full max-w-27xl mx-auto overflow-hidden">
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.3 },
          }}
          className={`flex border-2 border-white/20 p-4 justify-center items-center rounded-3xl flex-col sm:flex-row text-center bg-gradient-to-r ${currentAd.bgGradient} shadow-lg backdrop-blur-sm`}
        >
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 flex flex-col justify-center p-4 text-white z-10"
          >
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {currentAd.title}
            </motion.h2>
            <motion.p 
              className="text-white/80 my-3 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {currentAd.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a href={currentAd.link} target="_blank" rel="noopener noreferrer">
                <Button
                  gradientDuoTone="purpleToPink"
                  className="rounded-full px-8 py-2 text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  {currentAd.buttonText}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="flex-1 p-4 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm"></div>
            <img
              src={currentAd.img}
              alt={currentAd.title}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover relative z-10 border-2 border-white/20"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {ads.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentIndex ? "bg-white shadow-lg" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={() => goToSlide((currentIndex - 1 + ads.length) % ads.length)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={() => goToSlide((currentIndex + 1) % ads.length)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
}
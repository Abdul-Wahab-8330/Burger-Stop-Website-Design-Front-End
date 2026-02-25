import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ArrowLeftFromLine, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "RJ - Dinner",
    priceRange: "£10–20",
    date: "a week ago",
    stars: 5,
    text: "A regular customer, I could not recommend Burger Stop highly enough! Great value, super fresh and boxed in proper Mancunian packaging! 5/5 👍",
    avatarColor: "#9C27B0", // Purple like in image
  },
  {
    id: 2,
    name: "Sarah - Lunch",
    priceRange: "£10–20",
    date: "2 weeks ago",
    stars: 5,
    text: "Best burgers in the city! The spice level is just perfect and everything arrived piping hot. Definitely ordering again soon.",
    avatarColor: "#00B4C5",
  },
  {
    id: 3,
    name: "Mark - Dinner",
    priceRange: "£20–30",
    date: "3 days ago",
    stars: 4,
    text: "Great portions and fast delivery. The 'Zero to Tasty' claim is real. Only wish there were more sauce options!",
    avatarColor: "#1E1E1C",
  }
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextReview = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[index];

  return (
    <section className="w-full bg-white pt-10 pb-5 md:pt-12 px-6 md:px-20 lg:px-[120px] overflow-hidden">
      <div className="max-w-7xl mx-auto pb-2">
        
        {/* TOP ROW: Stars and Navigation */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-1">
            {[...Array(current.stars)].map((_, i) => (
              <Star key={i} size={20} fill="#FFB800" color="#FFB800" />
            ))}
            <span className="ml-2 font-inter font-bold text-gray-500 text-sm">{current.date}</span>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prevReview}
              className="text-primary hover:opacity-70 transition-opacity" 
            >
              <ChevronLeft size={24} strokeWidth={1.8} />
            </button>
            <button 
              onClick={nextReview}
              className="text-primary hover:opacity-70 transition-opacity"
            >
              <ChevronRight size={24} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* MIDDLE ROW: Content with Animation */}
        <div className="relative min-h-[140px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-inter font-bold text-xs"
                  style={{ backgroundColor: current.avatarColor }}
                >
                  {current.name.charAt(0)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-md font-inter text-secondary">
                    {current.name}
                  </span>
                  <span className="text-gray-900 font-bold text-md font-inter">|</span>
                  <span className="text-gray-900 font-bold text-md font-inter">
                    {current.priceRange}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <p className="font-inter text-gray-600 text-base md:text-lg font-semibold leading-relaxed max-w-3xl">
                {current.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
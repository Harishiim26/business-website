import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1461141346587-763ab02bced9",
    title: "Crafting Excellence",
    description: "Premium leather goods crafted with precision and passion",
  },
  {
    url: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68",
    title: "Handcrafted Quality",
    description: "Each piece tells a story of dedication and artistry",
  },
  {
    url: "https://images.unsplash.com/photo-1484527273420-c598cb0601f8",
    title: "Timeless Design",
    description: "Elegant leather products that stand the test of time",
  },
  {
    url: "https://images.unsplash.com/photo-1525980748402-b2911c326b52",
    title: "Modern Elegance",
    description: "Where tradition meets contemporary style",
  },
];

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % heroImages.length;
      if (nextIndex === 0) {
        // When going from last to first image
        const totalWidth = scrollRef.current?.scrollWidth || 0;
        scrollRef.current?.scrollTo({ left: totalWidth, behavior: "auto" });
        setTimeout(() => {
          scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
        }, 50);
      } else {
        scroll("right");
      }
      setCurrentIndex(nextIndex);
      setScrollPosition(nextIndex * window.innerWidth);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(scrollRef.current.scrollLeft + scrollAmount);
    }
  };

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scrollable Images Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="flex-none w-full h-[90vh] snap-center relative"
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.3)",
              }}
            />
            <div className="relative z-10 h-full flex items-center">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {image.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8">
                    {image.description}
                  </p>
                  <div className="flex gap-4">
                    <Button asChild size="lg">
                      <Link href="/products">View Collection</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              Math.floor(scrollPosition / window.innerWidth) === index
                ? "bg-white w-4"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

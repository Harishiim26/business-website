import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Certifications from "@/components/sections/certifications";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Premium Leather Products</h2>
              <p className="text-muted-foreground mb-6">
                Our collection features handcrafted leather goods made from the finest materials.
                Each piece tells a story of craftsmanship and dedication.
              </p>
              <Button asChild>
                <Link href="/products">Explore Collection</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1473188588951-666fce8e7c68"
                alt="Leather product"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8"
                alt="Leather product"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <Process />
      <Certifications />
    </div>
  );
}
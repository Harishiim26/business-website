import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About LeatherCraft</h1>
          <p className="text-muted-foreground">
            Crafting excellence since 1985
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1552590290-8213d3f0b4e8"
              alt="Our workshop"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 1985, LeatherCraft has been dedicated to the art of leather crafting
              for over three decades. Our journey began with a simple passion for creating
              exceptional leather goods that stand the test of time.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to uphold the same values of quality, craftsmanship, and
              attention to detail that have defined our brand since its inception.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="Our team"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-1"
          >
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              We believe in creating products that not only look beautiful but also improve
              with age. Each piece is carefully crafted using traditional techniques combined
              with modern innovation.
            </p>
            <p className="text-muted-foreground">
              Our commitment to sustainability and ethical practices ensures that every
              product we create respects both our craftsmen and the environment.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

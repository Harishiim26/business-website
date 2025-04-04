import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const processes = [
  {
    title: "Material Selection",
    description: "Carefully sourcing the finest quality leather from trusted suppliers.",
    image: "https://images.unsplash.com/photo-1695603414685-af28aff0f9d2",
  },
  {
    title: "Crafting",
    description: "Skilled artisans meticulously craft each piece by hand.",
    image: "https://images.unsplash.com/photo-1532186773960-85649e5cb70b",
  },
  {
    title: "Quality Control",
    description: "Rigorous inspection ensures every product meets our high standards.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82",
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Manufacturing Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the artistry behind our leather crafting process, where tradition meets modern precision.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{process.title}</CardTitle>
                  <CardDescription>{process.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
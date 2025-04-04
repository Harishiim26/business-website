import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    name: "Classic Leather Bag",
    description: "Timeless design meets functionality",
    price: "$299",
    image: "https://images.unsplash.com/photo-1525980748402-b2911c326b52",
  },
  {
    name: "Leather Wallet",
    description: "Slim and sophisticated",
    price: "$89",
    image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68",
  },
  {
    name: "Travel Duffle",
    description: "Perfect companion for your journeys",
    price: "$399",
    image: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b",
  },
  {
    name: "Belt Collection",
    description: "Handcrafted excellence",
    price: "$129",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908",
  },
];

export default function Products() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium leather products, each piece crafted with attention to detail and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{product.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

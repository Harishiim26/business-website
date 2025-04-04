import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Shield, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// This can be configured to load real certificates from a specific path
const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
    icon: <Shield className="w-12 h-12 text-primary" />,
    year: "2020",
    certificateFile: "/certificates/iso9001.pdf" // Example path for real certificate
  },
  {
    title: "Leather Working Group",
    description: "Gold Rated Manufacturing Facility",
    icon: <Award className="w-12 h-12 text-primary" />,
    year: "2021",
    certificateFile: "/certificates/lwg-gold.pdf"
  },
  {
    title: "Environmental Excellence",
    description: "Sustainable Manufacturing Certification",
    icon: <CheckCircle className="w-12 h-12 text-primary" />,
    year: "2022",
    certificateFile: "/certificates/environmental.pdf"
  },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Hall of Fame</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is recognized through various international certifications and standards.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {cert.icon}
                  </div>
                  <CardTitle>{cert.title}</CardTitle>
                  <CardDescription>Awarded {cert.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{cert.description}</p>
                  {cert.certificateFile && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <FileText className="w-4 h-4" />
                      View Certificate
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
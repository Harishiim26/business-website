import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LeatherCraft</h3>
            <p className="text-sm text-muted-foreground">
              Crafting premium leather goods with passion and precision since 1985.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/products">Products</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="text-sm space-y-2">
              <p>123 Leather Lane</p>
              <p>Craftsville, CV1 2AB</p>
              <p>contact@leathercraft.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Business Hours</h4>
            <div className="text-sm space-y-2">
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LeatherCraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: ["Men's Shoes", "Women's Shoes", "Kids' Shoes", "New Releases", "Sale"],
    support: ["Contact Us", "FAQs", "Shipping", "Returns", "Size Guide"],
    company: ["About Us", "Careers", "Press", "Sustainability", "Stores"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialLinks = [
    { name: "Instagram", icon: "IG" },
    { name: "Twitter", icon: "X" },
    { name: "TikTok", icon: "TK" },
    { name: "YouTube", icon: "YT" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="py-16 border-b border-border bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-4xl md:text-5xl mb-4">
            JOIN THE <span className="text-gradient">MOVEMENT</span>
          </h3>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
            Subscribe for exclusive drops, early access, and 10% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 pl-12 pr-4 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button variant="hero" size="xl">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="inline-block mb-4">
                <span className="text-2xl font-display tracking-wider text-gradient">
                  SOLESCAPE
                </span>
              </a>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Premium footwear for athletes and sneaker enthusiasts worldwide.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-heading text-xs hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider mb-4">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 SoleScape. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8 opacity-60" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8 opacity-60" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-8 opacity-60" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-8 opacity-60" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

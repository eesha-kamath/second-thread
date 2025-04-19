
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-beige-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-poppins font-bold text-forest">
                Second<span className="text-rustic">Thread</span>
              </h2>
            </Link>
            <p className="text-sm max-w-xs">
              We transform discarded clothes into sustainable stories – handcrafted just for you.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest hover:text-rustic transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest hover:text-rustic transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest hover:text-rustic transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:info@secondthread.com" 
                className="text-forest hover:text-rustic transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4 text-forest">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="hover:text-forest transition-colors text-sm">
                  Shop Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-forest transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-forest transition-colors text-sm">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/custom" className="hover:text-forest transition-colors text-sm">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-forest transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4 text-forest">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-forest transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-forest transition-colors text-sm">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-forest transition-colors text-sm">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-forest transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-forest transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4 text-forest">Stay Connected</h3>
            <p className="text-sm mb-4">
              Subscribe for sustainable inspiration, discounts, and updates on new products.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none"
                  aria-label="Email for newsletter"
                />
                <Button 
                  type="submit" 
                  className="bg-forest hover:bg-forest-light text-white rounded-l-none"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
              </p>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-forest/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Second Thread. All rights reserved.
            </p>
            <p className="text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart size={14} className="mx-1 text-rustic" /> in India
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm font-medium font-poppins text-forest">
          Give Your Clothes a Second Thread of Life
        </p>
      </div>
    </footer>
  );
};

export default Footer;

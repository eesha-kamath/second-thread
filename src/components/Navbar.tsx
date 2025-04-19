import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-poppins font-bold text-forest">
            Second<span className="text-rustic">Thread</span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-poppins font-medium hover:text-forest transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-poppins font-medium hover:text-forest transition-colors">
            Our Story
          </Link>
          <Link to="/shop" className="font-poppins font-medium hover:text-forest transition-colors">
            Shop
          </Link>
          <Link to="/impact" className="font-poppins font-medium hover:text-forest transition-colors">
            Impact
          </Link>
          <Link to="/custom" className="font-poppins font-medium hover:text-forest transition-colors">
            Custom Orders
          </Link>
          <Link to="/contact" className="font-poppins font-medium hover:text-forest transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-rustic text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-poppins font-medium hover:text-forest transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-poppins font-medium hover:text-forest transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link 
              to="/shop" 
              className="font-poppins font-medium hover:text-forest transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/impact" 
              className="font-poppins font-medium hover:text-forest transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </Link>
            <Link 
              to="/custom" 
              className="font-poppins font-medium hover:text-forest transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Custom Orders
            </Link>
            <Link 
              to="/contact" 
              className="font-poppins font-medium hover:text-forest transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

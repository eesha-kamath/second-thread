
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Upcycled Tote Bag",
    image: "https://images.unsplash.com/photo-1604176424472-37dbe65d8ff7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bags",
    price: "₹1,299"
  },
  {
    id: 2,
    name: "Fabric Jewelry Set",
    image: "https://images.unsplash.com/photo-1623834574347-955071a8d3b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Jewelry",
    price: "₹899"
  },
  {
    id: 3,
    name: "Handmade Stuffed Toy",
    image: "https://images.unsplash.com/photo-1545315003-c5ad6201d82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Toys",
    price: "₹749"
  },
  {
    id: 4,
    name: "Upcycled Rug",
    image: "https://images.unsplash.com/photo-1617806501553-77a54c830142?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home Decor",
    price: "₹2,499"
  },
  {
    id: 5,
    name: "Patchwork Cushion Cover",
    image: "https://images.unsplash.com/photo-1612280413447-d55e479d5bd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home Decor",
    price: "₹599"
  },
  {
    id: 6,
    name: "Fabric Wall Hanging",
    image: "https://images.unsplash.com/photo-1601379329542-31c59817ea78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home Decor",
    price: "₹1,899"
  }
];

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const visibleProducts = () => {
    // In a real implementation, this would adjust based on screen size
    // For now, we'll just return 3 products at a time
    return products.slice(currentIndex, currentIndex + productsPerView.desktop);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(products.length - productsPerView.desktop, prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-forest mb-2">Our Collection</h2>
            <p className="text-muted-foreground max-w-2xl">
              Each piece tells a story of sustainability and craftsmanship, transforming discarded textiles into treasures.
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous product"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handleNext}
              disabled={currentIndex >= products.length - productsPerView.desktop}
              aria-label="Next product"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts().map(product => (
            <div key={product.id} className="group relative overflow-hidden rounded-xl slide-up">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-white/80 bg-rustic/80 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="text-white text-lg font-semibold mt-2">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-white font-medium">{product.price}</span>
                    <Button 
                      asChild
                      size="sm" 
                      className="bg-white text-forest hover:bg-white/90 rounded-full"
                    >
                      <Link to={`/shop/product/${product.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-forest">{product.category}</span>
                <h3 className="font-semibold mt-1">{product.name}</h3>
                <span className="text-rustic-light font-medium">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg" 
            className="bg-forest hover:bg-forest-light text-white rounded-full font-poppins font-medium"
          >
            <Link to="/shop">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

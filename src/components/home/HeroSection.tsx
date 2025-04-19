
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-16">
      <div className="absolute inset-0 bg-beige fabric-texture opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-forest/10 text-forest text-sm font-medium">
              Sustainable Upcycled Products
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest leading-tight max-w-xl">
              From Threads to Treasures
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-balance">
              We transform discarded clothes into sustainable stories – handcrafted just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-forest hover:bg-forest-light text-white rounded-full font-poppins font-medium"
              >
                <Link to="/shop">
                  Shop the Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-forest text-forest hover:bg-forest/5 rounded-full font-poppins font-medium"
              >
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl scale-in">
            <img 
              src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Upcycled fabric products including tote bags and accessories"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-sm font-medium bg-rustic/90 px-3 py-1 rounded-full">
                Handcrafted with Care
              </span>
              <h3 className="text-xl font-semibold mt-2">Discover Our Latest Collection</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

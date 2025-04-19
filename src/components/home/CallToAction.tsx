
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-forest text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Turn Your Old Clothes Into Something Beautiful!</h2>
            <p className="text-lg mb-8 text-white/90">
              Give your cherished garments a second life by transforming them into unique, handcrafted pieces. Our skilled artisans will work closely with you to create something truly special.
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-white text-forest hover:bg-white/90 rounded-full font-poppins font-medium"
            >
              <Link to="/custom">
                Start Your Custom Order
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="/31 Creative Art Projects Using Recycled Materials_ Eco-Friendly Creations for Artists.jpeg" 
                alt="Patch work bag" 
                className="rounded-lg h-40 w-full object-cover shadow-md"
              />
              <img 
                src="/Red Mogra gajra.jpeg" 
                alt="" 
                className="rounded-lg h-60 w-full object-cover shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="/Amazon_com_ Womens Leather Handbags - Women's Handbags, Purses & Wallets _ Women's Fashion_ Clothing, Shoes & Jewelry.jpeg" 
                alt="After: Handcrafted denim bag" 
                className="rounded-lg h-60 w-full object-cover shadow-md"
              />
              <img 
                src="/Psychic Outlaw Sling Bag.jpeg" 
                alt="" 
                className="rounded-lg h-40 w-full object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

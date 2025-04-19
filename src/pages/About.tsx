
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-forest mb-6">Why Second Thread?</h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Born out of the desire to reduce textile waste and craft with care, Second Thread transforms fabric waste into items with purpose and soul. Every stitch tells a story of second chances.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-forest mb-6">Our Story</h2>
                <p className="mb-4">
                  Second Thread began in a small workshop in Delhi, where our founder Meera noticed the mountains of discarded clothing piling up in local markets. With a background in textile design and a passion for sustainability, she began experimenting with ways to transform these abandoned fabrics into beautiful, functional items.
                </p>
                <p className="mb-4">
                  What started as a small passion project quickly grew as more people became interested in the unique, handcrafted items with stories to tell. Today, Second Thread works with a team of skilled artisans across India, each bringing their unique craftsmanship to our products.
                </p>
                <p className="mb-6">
                  We believe in creating a circular economy where nothing goes to waste and every piece of fabric has the potential for a second life. By choosing Second Thread, you're not just buying a product—you're participating in a movement towards a more sustainable and mindful way of living.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our founder in the workshop"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="italic text-forest">
                    "Every discarded piece of fabric has a story and potential for a new beginning."
                  </p>
                  <p className="text-right mt-2 font-medium">— Meera, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-forest/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest mb-4">Our Vision & Mission</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-forest text-white inline-flex items-center justify-center w-12 h-12 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-forest">Our Vision</h3>
                <p>
                  To make sustainability accessible, personal, and stylish in every Indian home. We envision a world where discarded textiles are seen as valuable resources rather than waste, and where consumers form emotional connections with their belongings.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-rustic text-white inline-flex items-center justify-center w-12 h-12 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-forest">Our Mission</h3>
                <p>
                  To inspire conscious living through affordable, upcycled products while supporting artisans and protecting the planet. We are committed to creating beautiful items that don't compromise on style or ethics, proving that sustainability can be both accessible and desirable.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest mb-4">Meet Our Artisans</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The skilled hands behind every Second Thread creation. Our artisans bring generations of craft heritage to create products that tell stories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-6 inline-block">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="Lakshmi, Master Weaver"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-forest text-white px-3 py-1 rounded-full text-xs">
                    Master Weaver
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lakshmi</h3>
                <p className="text-sm text-muted-foreground">
                  With over 15 years of experience in traditional weaving techniques, Lakshmi brings expertise and precision to every piece she creates.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-6 inline-block">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="Rajesh, Pattern Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-rustic text-white px-3 py-1 rounded-full text-xs">
                    Pattern Designer
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rajesh</h3>
                <p className="text-sm text-muted-foreground">
                  A third-generation textile artisan, Rajesh combines traditional patterns with contemporary designs to create unique textile stories.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-6 inline-block">
                  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="Ananya, Embroidery Specialist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo text-white px-3 py-1 rounded-full text-xs">
                    Embroidery Specialist
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ananya</h3>
                <p className="text-sm text-muted-foreground">
                  Known for her intricate hand embroidery, Ananya transforms simple fabrics into works of art with her skilled needlework.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-beige-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-forest mb-6">Join Our Sustainable Journey</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be part of our mission to reduce textile waste and create beautiful, meaningful products that celebrate craft and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-forest hover:bg-forest-light text-white rounded-full font-poppins font-medium"
              >
                <Link to="/shop">
                  Shop Our Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-forest text-forest hover:bg-forest/5 rounded-full font-poppins font-medium"
              >
                <Link to="/impact">
                  See Our Impact
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

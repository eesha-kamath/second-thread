
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ImpactCounter = ({ target, label, unit }: { target: number; label: string; unit: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // ms
    const step = Math.ceil(target / (duration / 16)); // 16ms is approx one frame at 60fps
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target]);
  
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-forest mb-2">
        {count.toLocaleString()}<span className="text-rustic">{unit}</span>
      </div>
      <p className="text-lg text-muted-foreground">{label}</p>
    </div>
  );
};

const Impact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-forest mb-6">Our Impact</h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Every product we create contributes to a more sustainable future. Here's how our collective efforts are making a difference.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-beige rounded-xl shadow-sm">
                <ImpactCounter target={5280} label="Fabric Waste Saved" unit="kg" />
              </div>
              <div className="bg-beige rounded-xl shadow-sm">
                <ImpactCounter target={9745} label="Upcycled Products Made" unit="" />
              </div>
              <div className="bg-beige rounded-xl shadow-sm">
                <ImpactCounter target={48} label="Artisans Employed" unit="+" />
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest mb-4">Environmental Impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                The fashion industry is one of the world's largest polluters. By upcycling existing textiles, we're helping to reduce:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-forest/5 p-6 rounded-xl">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-forest">Water Usage</h3>
                  <p className="text-sm">
                    Saved over 10 million liters of water by repurposing existing textiles.
                  </p>
                </div>
                
                <div className="bg-forest/5 p-6 rounded-xl">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-forest">Energy Reduction</h3>
                  <p className="text-sm">
                    Cut energy consumption by 85% compared to new textile production.
                  </p>
                </div>
                
                <div className="bg-forest/5 p-6 rounded-xl">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-forest">Carbon Footprint</h3>
                  <p className="text-sm">
                    Prevented 42 tonnes of CO₂ emissions through our upcycling process.
                  </p>
                </div>
                
                <div className="bg-forest/5 p-6 rounded-xl">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-forest">Landfill Diversion</h3>
                  <p className="text-sm">
                    Diverted 5+ tonnes of textiles from landfills through our upcycling initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-beige-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-forest mb-6">Social Impact</h2>
                <p className="mb-4">
                  Our impact goes beyond environmental benefits. We're committed to creating positive social change through our work:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-forest text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <strong className="text-forest font-semibold">Artisan Empowerment:</strong>
                      <p className="mt-1">Providing stable employment and fair wages to 48+ artisans across India, with 70% being women from marginalized communities.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-forest text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <strong className="text-forest font-semibold">Skill Development:</strong>
                      <p className="mt-1">Conducted 24 workshops teaching traditional and contemporary textile techniques to 180+ individuals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-forest text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <strong className="text-forest font-semibold">Community Engagement:</strong>
                      <p className="mt-1">Partnered with 12 local schools to educate 1,500+ students on sustainable fashion and textile waste reduction.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-forest text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <strong className="text-forest font-semibold">Accessibility:</strong>
                      <p className="mt-1">Making sustainable products accessible through affordable pricing and education about conscious consumption.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/Фото 915153667454 из альбома ☼ ИДЕИ ДЛЯ МАСТЕРИЦ_ Смотрите в группе ИЗ ТОГО, ЧТО ПОД РУКАМИ - рукоделие, декор, дизайн в ОК.jpeg" 
                    alt="Artisans at work" 
                    className="rounded-lg h-48 w-full object-cover shadow-md"
                  />
                  <img 
                    src="/zero waste fashion brands.jpeg" 
                    alt="Community workshop" 
                    className="rounded-lg h-64 w-full object-cover shadow-md"
                  />
                </div>
                <div className="space-y-4 pt-6">
                  <img 
                    src="/Neutral Patchwork Dress.jpeg" 
                    alt="Skills development workshop" 
                    className="rounded-lg h-64 w-full object-cover shadow-md"
                  />
                  <img 
                    src="/Embroidered Scrunchie, Embroidered Hair Bow, Linen Hair Bow, Hair Accessories, Hand Embroidered Barrette_ Bow Hair Tie, Christmas Gifts - Etsy.jpeg" 
                    alt="Women artisans" 
                    className="rounded-lg h-48 w-full object-cover shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest mb-4">Customer Impact Stories</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our customers are at the heart of our impact. Here are some stories of how our products have created emotional connections and sustainable choices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-beige/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Neha from Bangalore"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Neha</h3>
                    <p className="text-sm text-muted-foreground">Bangalore</p>
                  </div>
                </div>
                <blockquote className="text-sm italic">
                  "I had my grandfather's old kurtas that I couldn't bear to throw away after he passed. Second Thread transformed them into the most beautiful memory cushions that now have a permanent place in my living room. Every time I look at them, I'm reminded of him."
                </blockquote>
              </div>
              
              <div className="bg-beige/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Vikram from Mumbai"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Vikram</h3>
                    <p className="text-sm text-muted-foreground">Mumbai</p>
                  </div>
                </div>
                <blockquote className="text-sm italic">
                  "The upcycled tote bag I bought from Second Thread has replaced all my plastic bags. I've received so many compliments on it, which gives me the chance to talk about sustainable fashion choices with others. It's durable, beautiful, and has a story."
                </blockquote>
              </div>
              
              <div className="bg-beige/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Aisha from Delhi"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Aisha</h3>
                    <p className="text-sm text-muted-foreground">Delhi</p>
                  </div>
                </div>
                <blockquote className="text-sm italic">
                  "I own a small café and wanted sustainable decor. The wall hangings and table runners I ordered from Second Thread give my space such a warm, unique feel. My customers love hearing about how they're made from reclaimed fabrics."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-forest text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Be Part of Our Impact</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Every purchase contributes to our environmental and social mission. Join us in creating a more sustainable future for fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-forest hover:bg-white/90 rounded-full font-poppins font-medium"
              >
                <Link to="/shop">
                  Shop Sustainably
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 rounded-full font-poppins font-medium"
              >
                <Link to="/custom">
                  Start a Custom Project
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

export default Impact;

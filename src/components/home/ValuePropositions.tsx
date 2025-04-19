
import { Recycle, Heart, Leaf } from "lucide-react";

const values = [
  {
    icon: <Recycle className="h-8 w-8 text-forest" />,
    title: "Sustainable by Design",
    description: "Every product is crafted from discarded textiles, giving new life to materials that would otherwise end up in landfills."
  },
  {
    icon: <Leaf className="h-8 w-8 text-rustic" />,
    title: "Affordable and Ethical",
    description: "We believe sustainable choices should be accessible. Our products are fairly priced while ensuring ethical treatment of our artisans."
  },
  {
    icon: <Heart className="h-8 w-8 text-indigo" />,
    title: "Handcrafted with Emotion",
    description: "Each piece carries a story and is lovingly made by skilled artisans who pour their heart into every stitch."
  }
];

const ValuePropositions = () => {
  return (
    <section className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-forest mb-4">Why Choose Second Thread?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to sustainable practices, ethical production, and emotional storytelling sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-beige-dark rounded-full h-16 w-16 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-forest">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-forest/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-forest mb-4">Our Sustainability Promise</h3>
              <p className="mb-4">
                At Second Thread, we're committed to reducing textile waste while creating beautiful, functional products that bring joy to your everyday life.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-forest text-white rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Zero waste manufacturing process</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-forest text-white rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Fair wages for all artisans</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-forest text-white rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Eco-friendly packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-forest text-white rounded-full p-1 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Local production to reduce carbon footprint</span>
                </li>
              </ul>
            </div>
            <div className="relative h-72 md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1592087976548-4d889e0094cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sustainable fabric workshop"
                className="rounded-xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;

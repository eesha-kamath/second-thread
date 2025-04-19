
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    text: "I turned my late grandfather's shirts into memory pillows through Second Thread. Now I have a beautiful keepsake that brings me comfort every day. The craftsmanship is exceptional."
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    text: "The tote bag I ordered is not just functional but also a conversation starter! Everyone asks about it, and I proudly share how it's made from upcycled materials. Great quality and unique design."
  },
  {
    id: 3,
    name: "Anika Patel",
    location: "Bangalore",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    text: "I ordered a custom rug made from old saris that had been in my family for generations but were too worn to wear. The result is stunning - a beautiful piece of functional art that preserves our memories."
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 4,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    text: "The fabric jewelry set I bought for my wife was a hit! Knowing that it's sustainable made the gift even more special. Second Thread's attention to detail and quick delivery impressed us both."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-indigo/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-forest mb-4">Customer Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about how Second Thread products have made a difference in their lives.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md hover:bg-forest hover:text-white"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="transition-transform duration-500 ease-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full p-8 md:p-12 flex flex-col md:flex-row gap-8"
                >
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="relative w-20 h-20 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="rounded-full object-cover w-full h-full"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-forest text-white rounded-full p-1">
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <div className="flex items-center mt-2 justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-rustic fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="relative">
                      <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-forest/10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84036 12.86 3.05622 12.5533 2.41376 11.94C1.77129 11.3266 1.45006 10.4467 1.45006 9.29999C1.45006 8.07332 1.83108 6.87332 2.59312 5.69999C3.35516 4.49999 4.38147 3.55332 5.67208 2.85999L6.26946 3.78666C5.32079 4.31999 4.59051 4.91999 4.07863 5.58666C3.56675 6.25332 3.31179 6.98666 3.31179 7.78666C3.31179 8.31999 3.44448 8.73332 3.70988 9.02666C3.97529 9.31999 4.24068 9.51999 4.50608 9.62666C4.77149 9.73332 5.06148 9.79999 5.37606 9.82666C5.69064 9.85332 5.94252 9.93332 6.13076 10.06C6.31901 10.1867 6.41314 10.3667 6.41314 10.6C6.41314 10.8333 6.37975 11.0333 6.31298 11.2C6.2462 11.3667 6.14327 11.5 6.0042 11.6C5.86513 11.7 5.71334 11.7667 5.54881 11.8C5.38428 11.8333 5.18246 11.85 4.94334 11.85C4.47178 11.85 4.07863 11.7167 3.76405 11.45C3.44948 11.1833 3.24319 10.9 3.14537 10.6L2.01754 11.1C2.18141 11.5667 2.45149 11.9667 2.82653 12.3C3.20158 12.6333 3.74553 12.8 4.45838 12.8C5.02265 12.8 5.51344 12.6667 5.93053 12.4C6.34763 12.1333 6.6514 11.7933 6.84185 11.38C7.03229 10.9667 7.12752 10.5267 7.12752 10.06C7.12752 9.59332 7.03229 9.22666 6.84185 8.95999C6.6514 8.69332 6.41314 8.49332 6.13076 8.35999C5.84839 8.22666 5.51344 8.14666 5.12552 8.11999C4.7376 8.09332 4.35247 8.05332 3.97014 7.99999C3.5878 7.94666 3.23198 7.83332 2.90268 7.65999C2.57338 7.48666 2.40885 7.23999 2.40885 6.91999C2.40885 6.18666 2.8058 5.46666 3.59972 4.75999C4.39363 4.05332 5.38171 3.52666 6.56393 3.17999L6.84185 3.17999C6.84185 3.17999 7.39762 10.3 7.39762 10.3Z" fill="currentColor" />
                        <path d="M14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0669 12.86 10.2828 12.5533 9.64032 11.94C8.99784 11.3266 8.67661 10.4467 8.67661 9.29999C8.67661 8.07332 9.05763 6.87332 9.81968 5.69999C10.5817 4.49999 11.608 3.55332 12.8986 2.85999L13.496 3.78666C12.5473 4.31999 11.8171 4.91999 11.3052 5.58666C10.7933 6.25332 10.5383 6.98666 10.5383 7.78666C10.5383 8.31999 10.671 8.73332 10.9364 9.02666C11.2018 9.31999 11.4672 9.51999 11.7326 9.62666C11.998 9.73332 12.288 9.79999 12.6026 9.82666C12.9172 9.85332 13.1691 9.93332 13.3573 10.06C13.5455 10.1867 13.6397 10.3667 13.6397 10.6C13.6397 10.8333 13.6063 11.0333 13.5395 11.2C13.4727 11.3667 13.3698 11.5 13.2307 11.6C13.0916 11.7 12.9399 11.7667 12.7753 11.8C12.6108 11.8333 12.409 11.85 12.1699 11.85C11.6983 11.85 11.3052 11.7167 10.9906 11.45C10.676 11.1833 10.4697 10.9 10.3719 10.6L9.24409 11.1C9.40796 11.5667 9.67804 11.9667 10.0531 12.3C10.4281 12.6333 10.9721 12.8 11.6849 12.8C12.2492 12.8 12.74 12.6667 13.1571 12.4C13.5742 12.1333 13.878 11.7933 14.0684 11.38C14.2588 10.9667 14.3541 10.5267 14.3541 10.06C14.3541 9.59332 14.2588 9.22666 14.0684 8.95999C13.878 8.69332 13.6397 8.49332 13.3573 8.35999C13.0749 8.22666 12.74 8.14666 12.3521 8.11999C11.9641 8.09332 11.579 8.05332 11.1967 7.99999C10.8144 7.94666 10.4585 7.83332 10.1292 7.65999C9.79992 7.48666 9.63539 7.23999 9.63539 6.91999C9.63539 6.18666 10.0323 5.46666 10.8262 4.75999C11.6201 4.05332 12.6082 3.52666 13.7904 3.17999L14.0684 3.17999C14.0684 3.17999 14.6242 10.3 14.6242 10.3Z" fill="currentColor" />
                      </svg>
                      <blockquote className="relative text-lg md:text-xl leading-relaxed">
                        {testimonial.text}
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md hover:bg-forest hover:text-white"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-forest' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

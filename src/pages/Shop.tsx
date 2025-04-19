
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Filter, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Tote Bags", "Stuffed Toys", "Jewelry", "Home Decor", "Gifts"];

const products = [
  {
    id: 1,
    name: "Upcycled Tote Bag",
    image: "/tote.jpeg",
    category: "Tote Bags",
    price: "₹599",
    story: "Created from vintage denim jeans"
  },
  {
    id: 2,
    name: "Fabric Jewelry Set",
    image: "/set.jpeg",
    category: "Jewelry",
    price: "₹199",
    story: "Handcrafted from silk saree scraps"
  },
  {
    id: 3,
    name: "Handmade Stuffed Toy",
    image: "/toy.jpeg",
    category: "Stuffed Toys",
    price: "₹299",
    story: "Made with love from cotton t-shirts"
  },
  {
    id: 4,
    name: "Upcycled Rug",
    image: "/rug.jpeg",
    category: "Home Decor",
    price: "₹299",
    story: "Woven from old clothing"
  },
  {
    id: 5,
    name: "Patchwork Cushion Cover",
    image: "/pillow.jpeg",
    category: "Home Decor",
    price: "₹199",
    story: "A collage of memories in fabric"
  },
  {
    id: 6,
    name: "Fabric Wall Hanging",
    image: "/wall.jpeg",
    category: "Home Decor",
    price: "₹399",
    story: "Traditional art meets sustainability"
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.story.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-forest mb-2">Shop Our Collection</h1>
          <p className="text-muted-foreground">
            Each piece tells a story of sustainability and craftsmanship
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Filter size={18} />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-forest bg-forest/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-semibold mt-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{product.story}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-semibold text-forest">{product.price}</span>
                      <Button size="sm" className="rounded-full">
                        <ShoppingBag className="mr-2" size={16} />
                        Add to Bag
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

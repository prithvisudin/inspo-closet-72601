import { useState } from "react";
import { Upload, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

interface WardrobeItem {
  id: string;
  image: string;
  category: string;
  color: string;
}

const Wardrobe = () => {
  const [items, setItems] = useState<WardrobeItem[]>([
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
      category: "Blazer",
      color: "Navy",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      category: "Jeans",
      color: "Blue",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
      category: "Sneakers",
      color: "White",
    },
  ]);

  const handleUpload = () => {
    toast.success("Upload feature coming soon! This will use AI to auto-tag your items.");
  };

  const handleRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    toast.success("Item removed from wardrobe");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Wardrobe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Upload photos of your clothes and let AI automatically tag them. The more items you add,
            the better your outfit recommendations!
          </p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8 p-8 bg-gradient-card border-0 shadow-soft">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-medium">
              <Upload className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Add New Items</h3>
              <p className="text-muted-foreground mb-4">
                Take a photo or upload from your gallery
              </p>
            </div>
            <Button variant="hero" size="lg" onClick={handleUpload}>
              <Plus className="w-5 h-5" />
              Upload Items
            </Button>
          </div>
        </Card>

        {/* Items Grid */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Your Items ({items.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square relative">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-3 bg-gradient-card">
                  <p className="font-semibold text-sm">{item.category}</p>
                  <p className="text-xs text-muted-foreground">{item.color}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wardrobe;

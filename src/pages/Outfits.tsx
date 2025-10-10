import { useState } from "react";
import { Sparkles, RefreshCw, Heart, Share2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import outfitSample from "@/assets/outfit-sample.jpg";

interface Outfit {
  id: string;
  items: string[];
  occasion: string;
  weather: string;
  saved: boolean;
}

const Outfits = () => {
  const [currentOutfit, setCurrentOutfit] = useState<Outfit>({
    id: "1",
    items: ["Navy Blazer", "White Shirt", "Dark Jeans", "Brown Loafers"],
    occasion: "Work Meeting",
    weather: "20°C, Partly Cloudy",
    saved: false,
  });

  const handleGenerate = () => {
    toast.success("Generating new outfit based on today's weather and your style!");
    // Simulate outfit generation
    setTimeout(() => {
      setCurrentOutfit({
        ...currentOutfit,
        id: Math.random().toString(),
        saved: false,
      });
    }, 1000);
  };

  const handleSave = () => {
    setCurrentOutfit({ ...currentOutfit, saved: !currentOutfit.saved });
    toast.success(currentOutfit.saved ? "Outfit removed from favorites" : "Outfit saved!");
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Today's Outfit
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-curated outfits from your wardrobe, personalized to your style and today's weather
          </p>
        </div>

        {/* Weather & Occasion Info */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <div className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            {currentOutfit.weather}
          </div>
          <div className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            {currentOutfit.occasion}
          </div>
        </div>

        {/* Main Outfit Card */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="overflow-hidden border-0 shadow-strong">
            <div className="aspect-[4/5] bg-gradient-card relative">
              <img
                src={outfitSample}
                alt="Today's outfit"
                className="w-full h-full object-cover"
              />
              <button
                onClick={handleSave}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all hover:scale-110 shadow-medium"
              >
                <Heart
                  className={`w-6 h-6 ${
                    currentOutfit.saved ? "fill-accent text-accent" : "text-foreground"
                  }`}
                />
              </button>
            </div>
            
            <div className="p-6 bg-gradient-card">
              <h3 className="text-xl font-semibold mb-4">Outfit Items</h3>
              <div className="space-y-2 mb-6">
                {currentOutfit.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Why This Outfit */}
              <div className="mb-6 p-4 rounded-lg bg-background/50">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Why this outfit?</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  This professional look balances the cool weather with layers while maintaining a
                  polished appearance for your work meeting. The navy blazer adds structure, and
                  brown loafers provide a sophisticated touch.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={handleShare}>
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline">
                  <Calendar className="w-4 h-4" />
                  Plan Event
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Generate New Button */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={handleGenerate}>
            <RefreshCw className="w-5 h-5" />
            Generate New Outfit
          </Button>
        </div>

        {/* Saved Outfits Preview */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Saved Outfits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className="aspect-[3/4] overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-card" />
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Outfits;

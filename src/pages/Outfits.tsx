import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";

const Outfits = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Daily Outfit</h1>
              <p className="text-muted-foreground">Your personalized outfit recommendations</p>
            </div>
            <Button variant="hero" className="mt-4 md:mt-0">
              <Sparkles className="w-4 h-4" />
              Generate Outfit
            </Button>
          </div>
          
          <div className="grid gap-6">
            {/* Empty State */}
            <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 rounded-2xl border-2 border-dashed border-border bg-muted/20">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No outfits yet</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                Add items to your wardrobe first, then let our AI create perfect outfit combinations for you.
              </p>
              <Button variant="outline" asChild>
                <a href="/wardrobe">Go to Wardrobe</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outfits;
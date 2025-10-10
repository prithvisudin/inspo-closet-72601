import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Upload, Plus, Grid3x3 } from "lucide-react";

const Wardrobe = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Wardrobe</h1>
              <p className="text-muted-foreground">Manage your clothing collection</p>
            </div>
            <Button variant="hero" className="mt-4 md:mt-0">
              <Upload className="w-4 h-4" />
              Upload Clothes
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Empty State */}
            <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 rounded-2xl border-2 border-dashed border-border bg-muted/20">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                <Grid3x3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Your wardrobe is empty</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                Start by uploading photos of your clothes. Our AI will automatically organize them for you.
              </p>
              <Button variant="hero">
                <Plus className="w-4 h-4" />
                Add Your First Item
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
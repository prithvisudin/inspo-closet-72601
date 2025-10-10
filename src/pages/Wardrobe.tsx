import { useState } from "react";
import { Camera, Upload, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";

const Wardrobe = () => {
  const [wardrobeItems, setWardrobeItems] = useState<any[]>([]);

  const sampleItems = [
    { id: 1, name: 'Navy Blazer', category: 'jacket', color: 'navy', season: 'all', image: '🧥' },
    { id: 2, name: 'White Shirt', category: 'top', color: 'white', season: 'all', image: '👔' },
    { id: 3, name: 'Blue Jeans', category: 'bottom', color: 'blue', season: 'all', image: '👖' },
    { id: 4, name: 'Ankle Boots', category: 'shoes', color: 'brown', season: 'fall', image: '👢' },
    { id: 5, name: 'Black Dress', category: 'dress', color: 'black', season: 'all', image: '👗' },
    { id: 6, name: 'Sneakers', category: 'shoes', color: 'white', season: 'all', image: '👟' }
  ];

  const addSampleItems = () => {
    setWardrobeItems([...sampleItems]);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">My Wardrobe</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <button
              onClick={addSampleItems}
              className="bg-card border-2 border-dashed border-border rounded-xl p-8 hover:border-primary hover:bg-accent/10 transition-all duration-200"
            >
              <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-foreground font-medium">Take Photo</p>
              <p className="text-sm text-muted-foreground mt-1">Snap a photo of your clothing</p>
            </button>

            <button
              onClick={addSampleItems}
              className="bg-card border-2 border-dashed border-border rounded-xl p-8 hover:border-primary hover:bg-accent/10 transition-all duration-200"
            >
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-foreground font-medium">Upload Photos</p>
              <p className="text-sm text-muted-foreground mt-1">Select from your gallery</p>
            </button>
          </div>

          {wardrobeItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wardrobeItems.map(item => (
                <div key={item.id} className="bg-card rounded-xl shadow-medium p-4 hover:shadow-strong transition-shadow">
                  <div className="text-6xl text-center mb-3">{item.image}</div>
                  <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground capitalize">{item.category}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">{item.color}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-xl p-12 text-center shadow-medium">
              <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Your wardrobe is empty. Add items to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
import { useState } from "react";
import { Cloud, ThumbsUp, ThumbsDown, Heart, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Outfits = () => {
  const [currentOutfit, setCurrentOutfit] = useState<any>(null);
  const [outfits, setOutfits] = useState<any[]>([]);

  const sampleItems = [
    { id: 1, name: 'Navy Blazer', category: 'jacket', color: 'navy', season: 'all', image: '🧥' },
    { id: 2, name: 'White Shirt', category: 'top', color: 'white', season: 'all', image: '👔' },
    { id: 3, name: 'Blue Jeans', category: 'bottom', color: 'blue', season: 'all', image: '👖' },
    { id: 4, name: 'Ankle Boots', category: 'shoes', color: 'brown', season: 'fall', image: '👢' }
  ];

  const generateOutfit = (occasion = 'casual') => {
    const outfit = {
      id: Date.now(),
      occasion,
      items: [sampleItems[1], sampleItems[2], sampleItems[3]],
      weather: '15°C, Partly Cloudy',
      reason: 'This outfit balances comfort and style for today\'s cool weather. The layers work well for temperature changes.',
      saved: false
    };
    setCurrentOutfit(outfit);
  };

  const saveOutfit = () => {
    if (currentOutfit && !currentOutfit.saved) {
      setOutfits([...outfits, { ...currentOutfit, saved: true }]);
      setCurrentOutfit({ ...currentOutfit, saved: true });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8">Today's Outfit</h1>

          {!currentOutfit ? (
            <div className="bg-card rounded-2xl shadow-strong p-8">
              <div className="text-center mb-6">
                <Cloud className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Columbus, Ohio</p>
                <p className="text-3xl font-bold">15°C</p>
                <p className="text-muted-foreground">Partly Cloudy</p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => generateOutfit('casual')}
                  className="w-full bg-gradient-primary text-white font-semibold py-6 rounded-xl hover:shadow-strong transition-all"
                >
                  Style Me for Today
                </Button>
                <Button
                  onClick={() => generateOutfit('work')}
                  variant="outline"
                  className="w-full py-6 rounded-xl"
                >
                  Style Me for Work
                </Button>
                <Button
                  onClick={() => generateOutfit('date')}
                  variant="outline"
                  className="w-full py-6 rounded-xl"
                >
                  Style Me for Date Night
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-card rounded-2xl shadow-strong p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Cloud className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{currentOutfit.weather}</span>
                  </div>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full capitalize">
                    {currentOutfit.occasion}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {currentOutfit.items.map((item: any) => (
                    <div key={item.id} className="bg-muted rounded-xl p-4 text-center">
                      <div className="text-5xl mb-2">{item.image}</div>
                      <p className="text-xs text-foreground font-medium">{item.name}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 rounded-xl p-4 mb-4">
                  <p className="text-sm font-semibold mb-2">Why this outfit?</p>
                  <p className="text-sm text-muted-foreground">{currentOutfit.reason}</p>
                </div>

                <div className="flex space-x-3 mb-3">
                  <Button
                    onClick={() => setCurrentOutfit(null)}
                    variant="outline"
                    className="flex-1"
                  >
                    <ThumbsDown className="w-5 h-5 mr-2" />
                    Try Again
                  </Button>
                  <Button
                    onClick={() => {}}
                    variant="outline"
                    className="flex-1 border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950"
                  >
                    <ThumbsUp className="w-5 h-5 mr-2" />
                    Love It
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={saveOutfit}
                    className="bg-gradient-primary"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    {currentOutfit.saved ? 'Saved!' : 'Save'}
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {outfits.length > 0 && (
                <div className="bg-card rounded-2xl shadow-strong p-6">
                  <h3 className="font-bold mb-4">Saved Outfits</h3>
                  <div className="space-y-3">
                    {outfits.map((outfit: any) => (
                      <div key={outfit.id} className="bg-muted rounded-xl p-4 flex items-center justify-between">
                        <div className="flex space-x-2">
                          {outfit.items.map((item: any) => (
                            <span key={item.id} className="text-2xl">{item.image}</span>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground capitalize">{outfit.occasion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Outfits;
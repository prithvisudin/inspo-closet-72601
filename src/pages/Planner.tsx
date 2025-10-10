import { Plus, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Planner = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20 pb-8 px-4 bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Outfit Planner</h1>
            <Button className="bg-gradient-primary">
              <Plus className="w-5 h-5 mr-2" />
              New Event
            </Button>
          </div>

          <div className="bg-card rounded-2xl shadow-strong p-6 mb-6">
            <h3 className="font-bold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold">Morning Meeting</p>
                <p className="text-sm text-muted-foreground">Tomorrow, 9:00 AM</p>
                <p className="text-xs text-primary mt-1">Outfit planned ✓</p>
              </div>
              <div className="border-l-4 border-border pl-4 py-2">
                <p className="font-semibold">Dinner with Friends</p>
                <p className="text-sm text-muted-foreground">Friday, 7:00 PM</p>
                <button className="text-xs text-primary mt-1 hover:underline">Plan outfit →</button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-strong p-6">
            <h3 className="font-bold mb-4">Trip Planning</h3>
            <button className="w-full border-2 border-dashed border-border rounded-xl p-8 hover:border-primary hover:bg-accent/10 transition-all">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-foreground font-medium">Plan a Trip</p>
              <p className="text-sm text-muted-foreground mt-1">Get packing lists and outfit suggestions</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planner;

import { Link, useLocation } from "react-router-dom";
import { Sparkles, Home, ShoppingBag, Calendar, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ClosetMuse
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              asChild
              className="gap-2"
            >
              <Link to="/">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
            <Button
              variant={isActive("/wardrobe") ? "default" : "ghost"}
              asChild
              className="gap-2"
            >
              <Link to="/wardrobe">
                <ShoppingBag className="w-4 h-4" />
                My Wardrobe
              </Link>
            </Button>
            <Button
              variant={isActive("/outfits") ? "default" : "ghost"}
              asChild
              className="gap-2"
            >
              <Link to="/outfits">
                <Calendar className="w-4 h-4" />
                Daily Outfit
              </Link>
            </Button>
            <Button
              variant={isActive("/planner") ? "default" : "ghost"}
              asChild
              className="gap-2"
            >
              <Link to="/planner">
                <CalendarDays className="w-4 h-4" />
                Planner
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
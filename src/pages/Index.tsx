import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Camera, Brain, CalendarDays, TrendingUp, ArrowRight } from "lucide-react";
import heroWardrobe from "@/assets/hero-wardrobe.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Your AI Fashion Assistant
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Style Yourself{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Effortlessly
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Turn your closet into a smart wardrobe. Get AI-powered outfit recommendations from the clothes you already own.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/wardrobe">
                    Start Building Wardrobe
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/outfits">See Example Outfits</Link>
                </Button>
              </div>
              
              <div className="flex gap-12 pt-4">
                <div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-sm text-muted-foreground">Outfits Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-3xl"></div>
              <img
                src={heroWardrobe}
                alt="Modern wardrobe with colorful clothes"
                className="relative rounded-3xl shadow-strong w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple, smart, and personalized to your style
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Wardrobe Capture</h3>
              <p className="text-muted-foreground">
                Upload photos of your clothes and let AI automatically tag them by category, color, and style.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Recommendations</h3>
              <p className="text-muted-foreground">
                Get personalized outfit suggestions based on weather, occasion, and your unique style preferences.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <CalendarDays className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Daily Outfit Planner</h3>
              <p className="text-muted-foreground">
                Plan outfits for events and trips. Generate packing lists in minutes with smart suggestions.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn Your Style</h3>
              <p className="text-muted-foreground">
                The more you use it, the better it gets. Rate outfits to help AI understand your taste.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who've simplified their mornings and elevated their style
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/wardrobe">
              Get Started for Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
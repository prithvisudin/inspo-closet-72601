import { Link } from "react-router-dom";
import { Sparkles, Camera, Zap, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroWardrobe from "@/assets/hero-wardrobe.jpg";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "Smart Wardrobe Capture",
      description: "Upload photos of your clothes and let AI automatically tag them by category, color, and style.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Recommendations",
      description: "Get personalized outfit suggestions based on weather, occasion, and your unique style preferences.",
    },
    {
      icon: Zap,
      title: "Daily Outfit Planner",
      description: "Plan outfits for events and trips. Generate packing lists in minutes with smart suggestions.",
    },
    {
      icon: Heart,
      title: "Learn Your Style",
      description: "The more you use it, the better it gets. Rate outfits to help AI understand your taste.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium shadow-soft">
                ✨ Your AI Fashion Assistant
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Style Yourself{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Effortlessly
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Turn your closet into a smart wardrobe. Get AI-powered outfit recommendations
              from the clothes you already own.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/wardrobe">
                <Button variant="hero" size="lg">
                  Start Building Wardrobe
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/outfits">
                <Button variant="outline" size="lg">
                  See Example Outfits
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
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
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-strong">
              <img
                src={heroWardrobe}
                alt="Modern wardrobe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-3xl shadow-strong opacity-20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-primary rounded-3xl shadow-strong opacity-20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, smart, and personalized to your style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 bg-gradient-primary border-0 shadow-strong text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who've simplified their mornings and elevated their style
          </p>
          <Link to="/wardrobe">
            <Button
              variant="outline"
              size="lg"
              className="bg-background text-primary hover:bg-background/90 border-0 shadow-medium"
            >
              Get Started for Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNavigation } from "@/components/MainNavigation";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCards } from "@/components/FeatureCards";
import { AtlasPreview } from "@/components/AtlasPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <MainNavigation />
      <HeroSection />
      <FeatureCards />
      <AtlasPreview />
      <Footer />
    </div>
  );
};

export default Index;

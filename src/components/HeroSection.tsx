import { Button } from "@/components/ui/button";
import weddingCouple from "@/assets/wedding-couple.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen romantic-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl text-primary/20 animate-float">❀</div>
      <div className="absolute top-32 right-20 text-4xl text-accent/30 animate-bounce">♥</div>
      <div className="absolute bottom-20 left-16 text-5xl text-primary/15 animate-pulse">✿</div>
      <div className="absolute bottom-32 right-32 text-3xl text-accent/25 animate-float">♥</div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="text-sm font-medium text-primary/80 tracking-wide uppercase">
              ♥ Bismillah ♥  <br />
            </div>
            
           <h1 className="text-3xl lg:text-5xl font-serif font-bold text-foreground leading-snug">
             In the Name of Allah, The Most Beneficent, The Most Merciful
  </h1>

          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
       Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous.
  </p>
          
          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              View Gallery
            </Button>
          </div> */}
          
          {/* Scroll Indicator */}
          {/* <div className="pt-8 hidden lg:block">
            <div className="text-sm text-muted-foreground flex items-center space-x-2">
              <span className="transform -rotate-90">Scroll Down</span>
              <div className="w-8 h-px bg-muted-foreground"></div>
            </div>
          </div> */}
        </div>
        
        {/* Right Content - Wedding Photo */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative">
            {/* Ornate Frame */}
            <div className="ornate-border p-4 bg-white rounded-3xl shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={weddingCouple} 
                  alt="Beautiful wedding couple in traditional attire"
                  className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover"
                />
                
                {/* Overlay with romantic elements */}
                <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg">
                  <span className="text-primary text-xl">♥</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-accent/90 rounded-full p-4 shadow-lg animate-bounce">
              <span className="text-2xl">❀</span>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-primary/90 text-white rounded-full p-3 shadow-lg animate-pulse">
              <span className="text-xl">♥</span>
            </div>
            
            {/* Wedding Planner Badge */}
            {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-accent/30">
              <span className="text-accent font-semibold text-sm">Wedding Planner</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
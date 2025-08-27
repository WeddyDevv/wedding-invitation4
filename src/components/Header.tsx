import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 floating-hearts">
          <span className="text-2xl">♥</span>
          <span className="text-xl font-serif font-semibold text-primary">Wedding</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
            Home
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
            About Us
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
            Services
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
            Pricing
          </a>
        </nav>
        
        {/* CTA Button */}
        <Button 
          variant="default" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Let's Talk
        </Button>
      </div>
    </header>
  );
};

export default Header;
const RomanticHeader = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8 flex justify-center">
        {/* Romantic Title with Decorative Elements */}
        <div className="relative text-center">
          {/* Decorative Hearts and Curves - Hidden on very small screens */}
          <div className="hidden sm:block absolute -top-3 lg:-top-4 -left-12 lg:-left-16 text-2xl lg:text-3xl text-primary/40 animate-float">♥</div>
          <div className="hidden sm:block absolute -top-1 lg:-top-2 -right-12 lg:-right-16 text-xl lg:text-2xl text-accent/50 animate-bounce">❀</div>
          <div className="hidden sm:block absolute -bottom-1 lg:-bottom-2 -left-8 lg:-left-12 text-lg lg:text-xl text-primary/30">✿</div>
          <div className="hidden sm:block absolute -bottom-3 lg:-bottom-4 -right-8 lg:-right-12 text-xl lg:text-2xl text-accent/40">♥</div>
          
          {/* Ornate Curves - Hidden on mobile */}
          <div className="hidden md:block absolute -left-16 lg:-left-20 top-1/2 transform -translate-y-1/2 w-6 lg:w-8 h-6 lg:h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-full"></div>
          <div className="hidden md:block absolute -right-16 lg:-right-20 top-1/2 transform -translate-y-1/2 w-6 lg:w-8 h-6 lg:h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-full"></div>
          
          {/* Main Title */}
          <div className="space-y-2">
            <div className="text-sm sm:text-base lg:text-lg font-medium text-primary/80 tracking-wider">
              ♥ Bismillah ♥
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              <span className="gold-gradient bg-clip-text text-transparent">
                Wedding Ceremony
              </span>
            </h1>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-3 lg:mt-4">
              <div className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
              <span className="text-lg sm:text-xl text-primary">♥</span>
              <div className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RomanticHeader;
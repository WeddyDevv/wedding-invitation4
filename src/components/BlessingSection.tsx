const BlessingSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
            <span className="mx-4 text-primary text-2xl">❀</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24"></div>
          </div>

          {/* Arabic Text */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-relaxed" 
                style={{ fontFamily: 'serif', direction: 'rtl' }}>
              بارك الله لكما وبارك عليكما وجمع بينكما في خير
            </h2>
          </div>

          {/* English Translation */}
          <div className="mb-8">
            <p className="text-lg lg:text-xl xl:text-2xl text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
              "May Allah bless this union with love, mercy, and tranquility, and make it a source of goodness in this life and the next."
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-primary text-xl">♥</span>
            <div className="mx-6 h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 w-32"></div>
            <span className="text-primary text-xl">♥</span>
          </div>

          {/* Additional Blessing */}
          <div className="space-y-4">
            <p className="text-muted-foreground/80 text-base lg:text-lg">
              With the blessings of Allah, family, and friends
            </p>
            <p className="text-muted-foreground/80 text-base lg:text-lg">
              May this journey be filled with endless love and happiness
            </p>
          </div>

          {/* Bottom Decorative */}
          <div className="flex items-center justify-center mt-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">✦</span>
                <div className="mx-4 h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 w-20"></div>
                <span className="text-primary text-xl">♥</span>
                <div className="mx-4 h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 w-20"></div>
                <span className="text-primary text-2xl">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-hearts">
          {/* <span className="heart-decoration">♥</span>
          <span className="heart-decoration">♥</span>
          <span className="heart-decoration">♥</span> */}
        </div>
      </div>
    </section>
  );
};

export default BlessingSection;
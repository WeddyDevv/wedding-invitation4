import { useState, useEffect } from "react";



const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date - Dec 8, 2026
    const targetDate = new Date('2026-12-08T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-8 left-4 lg:left-16 text-4xl lg:text-6xl text-primary/10 animate-float">❀</div>
      <div className="absolute top-16 right-8 lg:right-20 text-3xl lg:text-5xl text-accent/15 animate-bounce">♥</div>
      <div className="absolute bottom-12 left-8 lg:left-24 text-2xl lg:text-4xl text-primary/20 animate-pulse">✿</div>
      <div className="absolute bottom-8 right-4 lg:right-16 text-3xl lg:text-5xl text-accent/10 animate-float">♥</div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Content - Names and Countdown */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Decorative Heart Line */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <span className="text-2xl text-primary animate-pulse">♥</span>
              <div className="w-16 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
            </div>

            {/* Names */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
                <span className="text-foreground font-bold">Yaseen</span>
                <span className="text-primary font-light italic mx-4">&</span>
                <span className="text-primary font-bold">Sara</span>
              </h2>
              
          <p className="text-lg lg:text-xl text-muted-foreground font-serif font-semibold italic tracking-wide">
  WE ARE GETTING MARRIED DEC 8, 2026
</p>

            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Mins' },
                { value: timeLeft.seconds, label: 'Secs' }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="group relative bg-white rounded-full p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative dots */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
                    <div className="w-1 h-1 bg-accent/30 rounded-full"></div>
                    <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-sm lg:text-base text-muted-foreground font-medium mt-1">
                      {item.label}
                    </div>
                  </div>
                  
                  {/* Decorative dots bottom */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div className="w-1 h-1 bg-accent/30 rounded-full"></div>
                    <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
                    <div className="w-1 h-1 bg-accent/30 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
              <span className="text-2xl text-primary animate-pulse">♥</span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>

          {/* Right Content - Wedding Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
              <div className="absolute -inset-2 bg-white rounded-2xl shadow-lg"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl p-4 shadow-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/54005a48-266c-4bad-88c5-a3ff90462383.png"
                  alt="Wedding hands with rings and bouquet"
                  className="w-72 h-80 lg:w-80 lg:h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Hearts */}
                <div className="absolute top-6 right-6 text-2xl text-white/80 animate-bounce">♥</div>
                <div className="absolute bottom-8 left-6 text-xl text-white/60 animate-pulse">❀</div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 bg-primary/90 text-white rounded-full p-3 shadow-lg animate-float">
                <span className="text-xl">♥</span>
              </div>
              
              <div className="absolute -bottom-6 -left-4 bg-accent/90 text-white rounded-full p-2 shadow-lg animate-bounce">
                <span className="text-lg">❀</span>
              </div>
              
              {/* Decorative Flowers */}
              <div className="absolute top-8 -left-8 text-3xl text-primary/40 animate-float" style={{ animationDelay: '1s' }}>✿</div>
              <div className="absolute bottom-16 -right-8 text-2xl text-accent/50 animate-pulse" style={{ animationDelay: '0.5s' }}>♥</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
const RecentActivitiesSection = () => {
  const activities = [
    {
      id: 1,
      image: "/public/lovable-uploads/q1.jpg",
      alt: "Happy couple embracing on their wedding day",
      span: "col-span-1 row-span-2"
    },
    {
      id: 2,
      image: "/public/lovable-uploads/q2.jpg",
      alt: "Wedding ring exchange ceremony",
      span: "col-span-2 row-span-1"
    },
    {
      id: 3,
      image: "/public/lovable-uploads/q3.jpg",
      alt: "Wedding rings on hands",
      span: "col-span-1 row-span-1"
    },
    {
      id: 4,
      image: "/public/lovable-uploads/q4.jpg",
      alt: "Bridal bouquet arrangement",
      span: "col-span-1 row-span-1"
    },
    {
      id: 5,
      image: "/public/lovable-uploads/q6.jpg",
      alt: "Wedding reception table setting",
      span: "col-span-2 row-span-1"
    },
    {
      id: 6,
      image: "/public/lovable-uploads/q5.avif",
      alt: "Outdoor wedding ceremony setup",
      span: "col-span-1 row-span-2"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-accent/5 to-primary/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-8 right-4 lg:right-16 text-4xl lg:text-6xl text-primary/8 animate-float">❀</div>
      <div className="absolute top-20 left-4 lg:left-20 text-3xl lg:text-5xl text-accent/10 animate-bounce">♥</div>
      <div className="absolute bottom-16 right-8 lg:right-32 text-2xl lg:text-4xl text-primary/12 animate-pulse">✿</div>
      <div className="absolute bottom-8 left-8 lg:left-24 text-3xl lg:text-5xl text-accent/8 animate-float">♥</div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 relative">
          {/* Decorative Pink Flower */}
          <div className="absolute top-0 right-4 lg:right-8 text-4xl lg:text-5xl text-accent/40 animate-pulse">❀</div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our Recent Activities
          </h2>
          
          {/* Decorative Line with Heart */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="w-16 lg:w-24 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="text-2xl lg:text-3xl text-primary animate-pulse">♥</span>
            <div className="w-16 lg:w-24 h-px bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
        </div>

        {/* Activities Grid - Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-4 max-w-6xl mx-auto h-[800px]">
          {activities.map((activity, index) => (
            <div 
              key={activity.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${activity.span}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={activity.image}
                alt={activity.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Hearts */}
              <div className="absolute top-4 right-4 text-white/80 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                ♥
              </div>
              
              {/* Bottom Decoration */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex space-x-2">
                  <span className="text-white/80 text-sm">✿</span>
                  <span className="text-white/60 text-sm">♥</span>
                  <span className="text-white/80 text-sm">✿</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activities Grid - Mobile & Tablet Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 md:gap-6">
          {activities.map((activity, index) => (
            <div 
              key={activity.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-64 md:h-80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={activity.image}
                alt={activity.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Hearts */}
              <div className="absolute top-4 right-4 text-white/80 text-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                ♥
              </div>
              
              {/* Bottom Decoration */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex space-x-2">
                  <span className="text-white/80 text-sm">✿</span>
                  <span className="text-white/60 text-sm">♥</span>
                  <span className="text-white/80 text-sm">✿</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="flex items-center justify-center space-x-6">
            <div className="w-20 lg:w-32 h-px bg-gradient-to-r from-transparent to-primary/30"></div>
            <span className="text-2xl lg:text-3xl text-primary animate-pulse">♥</span>
            <div className="w-20 lg:w-32 h-px bg-gradient-to-l from-transparent to-primary/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivitiesSection;
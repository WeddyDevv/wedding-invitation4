import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Engagement ",
      image: "/lovable-uploads/engage.jpeg",
      alt: "Couple walking on beach for pre-wedding photography",
      p:"12-03-2026"
    },
    {
      id: 2,
      title: "Haldi Ceremony",
      image: "/lovable-uploads/haldi.jpg",
      alt: "Wedding ceremony setup with flowers and decorations",
      p1:"02-12-2026"
    },
    {
      id: 3,
      title: "Mahendi Ceremony",
      image: "/lovable-uploads/mahendi.webp",
      alt: "Elegant indoor wedding venue with couple",
      p2:"04-12-2026"
    },
    {
      id: 4,
      title: "Sachak Ceremony",
      image: "/lovable-uploads/sachak.jpg",
      alt: "Beautiful outdoor wedding setup in garden",
      p3:"06-12-2026"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-background to-accent/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-8 left-4 lg:left-16 text-4xl lg:text-6xl text-primary/8 animate-float">❀</div>
      <div className="absolute top-20 right-4 lg:right-20 text-3xl lg:text-5xl text-accent/10 animate-bounce">♥</div>
      <div className="absolute bottom-16 left-8 lg:left-32 text-2xl lg:text-4xl text-primary/12 animate-pulse">✿</div>
      <div className="absolute bottom-8 right-8 lg:right-24 text-3xl lg:text-5xl text-accent/8 animate-float">♥</div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 relative">
          {/* Decorative Pink Flower */}
          <div className="absolute top-0 right-4 lg:right-8 text-4xl lg:text-5xl text-accent/40 animate-pulse">❀</div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
          Pre Wedding Activities
          </h2>
          
          {/* Decorative Line with Heart */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="w-16 lg:w-24 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="text-2xl lg:text-3xl text-primary animate-pulse">♥</span>
            <div className="w-16 lg:w-24 h-px bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-primary/10 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Heart */}
                  <div className="absolute top-4 right-4 text-white/80 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                    ♥
                  </div>
                </div>
                
                {/* Content */}
           <div className="p-4 lg:p-6 text-center space-y-4">
  <h3 className="text-xl lg:text-2xl font-bold text-primary tracking-wide font-[Poppins]">
    <span className="italic text-accent">{service.title}</span>
    <br />
  </h3>
<p className="text-sm lg:text-base text-muted-foreground leading-relaxed font-semibold italic space-y-2" style={{ fontFamily: "'Playfair Display', serif" }}>
  <span className="block">{service.p}</span>
  <span className="block">{service.p1}</span>
  <span className="block">{service.p2}</span>
  <span className="block">{service.p3}</span>
</p>

</div>

              </CardContent>
            </Card>
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

export default ServicesSection;
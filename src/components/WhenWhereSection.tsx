import { Card, CardContent } from "@/components/ui/card";

const WhenWhereSection = () => {
  const events = [
    {
      title: "Nikah Ceremony",
      date: "Monday, 12 Apr, 2025",
      time: "After Namaz-e-Asr",
      location: "Wazir Ali Masjid, Lal Darwaza, Hyderabad",
      image: "/public/lovable-uploads/masjid.jpg",
      gradient: "from-rose-100/50 to-pink-100/50"
    },
    {
      title: "Reception",
      date: "Monday, 12 Apr, 2025",
      time: "1:00 PM - 2:30 PM",
      location: "4857 Washington Ave, Manchester, Kentucky 39495",
      image: "/public/lovable-uploads/vintage.png",
      gradient: "from-amber-100/50 to-orange-100/50"
    },
    {
      title: "Dinner",
      date: "Monday, 12 Apr, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "4857 Washington Ave, Manchester, Kentucky 39495",
      image: "/public/lovable-uploads/king.jpg",
      gradient: "from-purple-100/50 to-violet-100/50"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl text-primary animate-pulse">🌸</div>
        <div className="absolute top-40 right-20 text-4xl text-primary animate-pulse delay-1000">🌹</div>
        <div className="absolute bottom-40 left-20 text-5xl text-primary animate-pulse delay-500">💐</div>
        <div className="absolute bottom-20 right-10 text-4xl text-primary animate-pulse delay-1500">🌺</div>
        <div className="absolute top-1/2 left-1/4 text-3xl text-primary animate-bounce">♥</div>
        <div className="absolute top-1/3 right-1/4 text-3xl text-primary animate-bounce delay-1000">♥</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-4 font-light tracking-wide">Our Wedding</p>
          
          {/* Decorative Header with Flowers */}
          <div className="flex items-center justify-center mb-6">
            <span className="text-primary text-2xl mr-4">🌸</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-16"></div>
            <span className="mx-4 text-primary text-xl">♥</span>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-16"></div>
            <span className="text-primary text-2xl ml-4">🌸</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 font-serif">
            When & Where
          </h2>
          
          {/* Bottom Decorative Dot */}
          <div className="flex justify-center">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-50`}></div>
              
              {/* Decorative Hearts */}
              <div className="absolute top-4 right-4 text-primary text-xl opacity-70 group-hover:animate-pulse">♥</div>
              <div className="absolute bottom-4 left-4 text-primary text-lg opacity-50 group-hover:animate-bounce">🌹</div>
              
              <CardContent className="p-0 relative z-10">
                {/* Event Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Event Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground font-serif group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <span className="text-primary mr-2">📅</span>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <span className="text-primary mr-2">🕐</span>
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2 mt-0.5">📍</span>
                      <span className="leading-relaxed">{event.location}</span>
                    </div>
                  </div>
                  
                  {/* Decorative Bottom Border */}
                  <div className="pt-4">
                    <div className="flex items-center justify-center">
                      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-16"></div>
                      <span className="mx-3 text-primary text-sm">♥</span>
                      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-16"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Decorative Section */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-primary text-2xl mr-6">🌺</span>
            <div className="h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 w-32"></div>
            <span className="mx-6 text-primary text-3xl">♥</span>
            <div className="h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 w-32"></div>
            <span className="text-primary text-2xl ml-6">🌺</span>
          </div>
          <p className="text-muted-foreground text-lg italic">
            Join us as we celebrate our love story
          </p>
        </div>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-hearts">
          {/* <span className="heart-decoration">♥</span>
          <span className="heart-decoration">♥</span>
          <span className="heart-decoration">♥</span>
          <span className="heart-decoration">♥</span> */}
        </div>
      </div>
    </section>
  );
};

export default WhenWhereSection;
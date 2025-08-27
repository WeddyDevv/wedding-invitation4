import { Card, CardContent } from "@/components/ui/card";

const WeddingDecorationSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl text-primary/10 animate-float">❀</div>
      <div className="absolute bottom-20 right-16 text-5xl text-accent/15 animate-pulse">♥</div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Outside Pre Wedding Decoration Card */}
          <Card className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-primary/20">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/lovable-uploads/quran.jpg"
                  alt="Outside Pre Wedding Decoration"
                  className="w-full h-64 object-cover object-left group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
               Qur'an 78:8
                </h3>
                <p className="text-muted-foreground leading-relaxed">
            Nikah is not just a contract, but a divine bond that completes half of faith, bringing peace, love, and protection between two souls.  </p>
                
                {/* Decorative Hearts */}
                <div className="flex justify-end mt-4 space-x-2">
                  <span className="text-accent text-sm">♥</span>
                  <span className="text-primary text-sm">♥</span>
                  <span className="text-accent text-sm">♥</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wedding Reception Card */}
          <Card className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-accent/20">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/lovable-uploads/quran2.jpg"
                  alt="Wedding Reception in the center"
                  className="w-full h-64 object-cover object-right group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-serif font-bold text-accent mb-3">
           — Qur'an 2:187
                </h3>
                <p className="text-muted-foreground leading-relaxed">
              Spouses are a covering and protection for one another — in dignity, honor, and support. Together, they walk in righteousness, supporting each other in faith and life. </p>
                
                {/* Decorative Hearts */}
                <div className="flex justify-end mt-4 space-x-2">
                  <span className="text-primary text-sm">♥</span>
                  <span className="text-accent text-sm">♥</span>
                  <span className="text-primary text-sm">♥</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom Decorative Element */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="text-3xl text-primary animate-pulse">♥</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDecorationSection;